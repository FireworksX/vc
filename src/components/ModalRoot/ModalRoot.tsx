import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Touch from '@/components/Touch'
import vueListenersAdapter from '@/helpers/vueListenersAdapter'
import transitionEvents from '@/lib/transitionEvents'
import setTransformStyle from '@/lib/styles'
import { rubber } from '@/lib/touch'

export const TYPE_CARD = 'modal-card'
export const TYPE_PAGE = 'modal-page'

export interface ModalsStateEntry {
    id: string
    onClose?: () => void
    type?: 'modal-card' | 'modal-page'

    settlingHeight?: number
    dynamicContentHeight?: boolean
    expandable?: boolean

    modalElement?: HTMLElement
    innerElement?: HTMLElement
    headerElement?: HTMLElement
    contentElement?: HTMLElement
    footerElement?: HTMLElement

    translateY?: number
    translateYFrom?: number
    translateYCurrent?: number
    touchStartTime?: Date
    touchStartContentScrollTop?: number
    touchMovePositive?: boolean | null
    touchShiftYPercent?: number
    expanded?: boolean
    collapsed?: boolean
    hidden?: boolean
    contentScrolled?: boolean
    expandedRange?: [number, number]
    collapsedRange?: [number, number]
    hiddenRange?: [number, number]
    contentScrollStopTimeout?: number
    persistent?: boolean
}

export interface ModalRootData {
    [key: string]: any
    modalsState: {
        [key: string]: ModalsStateEntry
    }
}

const snapshotData: any = {}

function numberInRange(number: number, range: number[]) {
    return number >= range[0] && number <= range[1]
}

function rangeTranslate(number: number) {
    return Math.max(0, Math.min(98, number))
}

export default Vue.extend<ModalRootData, any, any, any>({
    name: 'vc-ModalRoot',
    components: {
        Touch,
    },
    props: {
        activeModal: { required: true }, // type : String | null
    },
    watch: {
        activeModal(newVal, oldVal) {
            snapshotData.activeModal = oldVal
            this.updateComponent()
        },
        switching(newVal, oldVal) {
            snapshotData.switching = oldVal
            this.updateComponent()
        },
    },
    computed: {
        classNames(): any {
            return [
                getClassName('vc-ModalRoot'),
                {
                    'vc-ModalRoot--touched': this.touchDown,
                    'vc-ModalRoot--switching': this.switching,
                },
            ]
        },
        modals(): any[] {
            if (this.$slots.default !== undefined) {
                return this.$slots.default
            }
            return []
        },

        document(): Document {
            return document
        },

        window(): Window {
            return window
        },
    },
    data() {
        return {
            prevModal: null,
            nextModal: this.activeModal,
            proxyActiveModal: this.activeModal,
            visibleModals: this.activeModal ? [this.activeModal] : [],
            animated: !!this.activeModal,
            touchDown: false,
            switching: false,
            history: this.activeModal ? [this.activeModal] : [],
            isBack: false,
            inited: false,
            dragging: false,
            frameIds: {},
            activeTransitions: 0,
            modalsState: {},
            maskAnimationFrame: '',
            documentScrolling: true,
            stopComponentUpdate: false,
            nativeOnClose: () => undefined,
        }
    },
    methods: {
        /* Total methods */

        updateComponent() {
            if (this.stopComponentUpdate) return undefined
            const nextModal = this.activeModal
            const prevModal = snapshotData.activeModal
            if (this.activeModal !== snapshotData.activeModal && !this.switching) {
                if (nextModal !== null && !this.modalsState[nextModal]) {
                    return console.error('Next modal not found')
                }

                let history: string[] = []
                let isBack = false

                if (nextModal === null) {
                    history = []
                } else if (history.includes(nextModal)) {
                    history = history.splice(0, history.indexOf(nextModal) + 1)
                    isBack = true
                } else {
                    history.push(nextModal)
                }

                this.proxyActiveModal = null
                this.nextModal = nextModal
                this.prevModal = prevModal
                this.visibleModals = [prevModal, nextModal]
                this.history = history
                this.isBack = isBack
                this.animated = true
                this.switching = false
                this.inited = false

                this.$nextTick(() => {
                    if (nextModal === null) {
                        this.closeActiveModal()
                    } else {
                        this.initActiveModal()
                    }
                })

                return undefined
            }

            if (this.switching && !snapshotData.switching) {
                requestAnimationFrame(() => this.switchPrevNext())
            }

            if (!this.activeModal && !this.prevModal && !this.nextModal) {
                this.toggleDocumentScrolling(true)
            } else {
                this.toggleDocumentScrolling(false)
            }

            return undefined
        },

        switchPrevNext() {
            const { prevModal, nextModal } = this

            const prevModalState: ModalsStateEntry = this.modalsState[prevModal]
            const nextModalState: ModalsStateEntry = this.modalsState[nextModal]

            if (!prevModalState && !nextModalState) {
                return console.error('')
            }

            const prevIsPage = !!prevModalState && prevModalState.type === TYPE_PAGE
            const prevIsCard = !!prevModalState && prevModalState.type === TYPE_CARD

            const nextIsPage = !!nextModalState && nextModalState.type === TYPE_PAGE
            const nextIsCard = !!nextModalState && nextModalState.type === TYPE_CARD
            if (prevModalState && (nextIsCard || prevIsCard || nextIsPage)) {
                this.waitTransitionFinish(prevModalState, () => {
                    this.activeTransitions += 1
                    this.waitTransitionFinish(nextModalState, this.prevNextSwitchEndHandler)
                    this.animateTranslate(nextModalState)
                })
                return this.animateTranslate(prevModalState, 100)
            }

            if (prevModalState && nextIsPage) {
                this.activeTransitions += 1

                this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler)

                if (prevModalState.translateY && nextModalState.translateYFrom)
                    if (
                        prevIsPage &&
                        prevModalState.translateY <= nextModalState.translateYFrom &&
                        !this.isBack
                    ) {
                        this.animateTranslate(prevModalState, nextModalState.translateYFrom + 10)
                    } else {
                        this.animateTranslate(prevModalState, 100)
                    }
            }

            this.activeTransitions += 1
            this.waitTransitionFinish(nextModalState, () => {
                this.prevNextSwitchEndHandler()
            })
            this.animateTranslate(nextModalState)

            return undefined
        },

        pickModal(id: string) {
            return this.document.getElementById(`modal-${id}`)
        },

        toggleDocumentScrolling(enabled: boolean) {
            if (this.documentScrolling === enabled) {
                return
            }
            this.documentScrolling = enabled

            if (enabled) {
                this.window.removeEventListener('touchmove', this.preventTouch, { passive: false })
            } else {
                this.window.addEventListener('touchmove', this.preventTouch, { passive: false })
            }
        },

        preventTouch(event: any) {
            let newEvent = event
            if (!newEvent) {
                return false
            }
            while (newEvent.originalEvent) {
                newEvent = newEvent.originalEvent
            }
            if (newEvent.preventDefault) {
                newEvent.preventDefault()
            }
            return false
        },

        calculateModalClass(modalId: string, modalState: ModalsStateEntry, isPage: boolean) {
            return [
                'vc-ModalRoot__modal',
                {
                    'vc-ModalRoot__modal--active': modalId === this.proxyActiveModal,
                    'vc-ModalRoot__modal--prev': modalId === this.prevModal,
                    'vc-ModalRoot__modal--next': modalId === this.nextModal,

                    'vc-ModalRoot__modal--dragging': this.dragging,

                    'vc-ModalRoot__modal--expandable': isPage && modalState.expandable,
                    'vc-ModalRoot__modal--expanded': isPage && modalState.expanded,
                    'vc-ModalRoot__modal--collapsed': isPage && modalState.collapsed,
                },
            ]
        },

        onMaskClick() {
            const activeModalName = this.proxyActiveModal || this.nextModal
            if (
                !this.switching &&
                !this.checkBooleanAttrTrue(this.modalsState[activeModalName].persistent)
            ) {
                this.triggerActiveModalClose()
            }
        },

        getModalNameByNode(node: VNode): string {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs.name
            }
            return ''
        },

        getModalAttrsByNode(node: VNode): any {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs
            }
            return undefined
        },

        getModalPersistentByNode(node: VNode): boolean {
            const propsPersistent = this.getModalPropsByNode(node)
                ? this.checkBooleanAttrTrue(this.getModalPropsByNode(node).persistent)
                : false
            const attrsPersistent = this.getModalAttrsByNode(node)
                ? this.checkBooleanAttrTrue(this.getModalAttrsByNode(node).persistent)
                : false
            return propsPersistent || attrsPersistent
        },

        checkBooleanAttrTrue(val: any) {
            return val !== undefined && val !== false
        },

        getModalPropsByNode(node: VNode): any {
            if (
                node.componentOptions !== undefined &&
                node.componentOptions.propsData !== undefined
            ) {
                return node.componentOptions.propsData
            }
            return undefined
        },

        getModalOnCloseByNode(node: VNode): () => any {
            if (
                node.componentOptions !== undefined &&
                node.componentOptions.listeners !== undefined
            ) {
                const listeners = node.componentOptions.listeners as any
                return listeners.close
            }
            return () => undefined
        },

        initModalsState() {
            this.modalsState = this.modals
                .filter((node: VNode) => node && node.tag)
                .reduce((acc: any, modal: VNode) => {
                    const state: ModalsStateEntry = {
                        id: this.getModalNameByNode(modal),
                        onClose: this.getModalOnCloseByNode(modal),
                        dynamicContentHeight: !!this.getModalAttrsByNode(modal)
                            .dynamicContentHeight,
                        persistent: this.getModalPersistentByNode(modal),
                    }

                    if (typeof this.getModalAttrsByNode(modal).settlingHeight === 'number') {
                        state.settlingHeight = this.getModalAttrsByNode(modal).settlingHeight
                    }

                    acc[state.id] = state
                    return acc
                }, {})
        },

        initActiveModal() {
            const activeModal = this.proxyActiveModal || this.nextModal

            if (!activeModal) {
                return
            }

            const modalElement = this.pickModal(activeModal)
            const modalState = this.modalsState[activeModal]

            if (modalElement.querySelector('.vc-ModalPage')) {
                modalState.settlingHeight = modalState.settlingHeight || 75
                modalState.type = TYPE_PAGE
                this.initPageModal(modalState, modalElement)
            } else if (modalElement.querySelector('.vc-ModalCard')) {
                modalState.type = TYPE_CARD
                this.initCardModal(modalState, modalElement)
            }

            this.inited = true
            this.switching = true
        },

        closeActiveModal() {
            if (!this.prevModal) {
                return
            }

            const prevModalState = this.modalsState[this.prevModal]

            prevModalState.translateYCurrent = 100
            this.waitTransitionFinish(prevModalState, this.prevNextSwitchEndHandler)
            this.animateTranslate(prevModalState, 100)
            this.setMaskOpacity(prevModalState, 0)
        },

        setMaskOpacity(modalState: ModalsStateEntry, forceOpacity?: number) {
            if (forceOpacity && this.history[0] === modalState.id) {
                return
            }

            cancelAnimationFrame(this.maskAnimationFrame)
            this.maskAnimationFrame = requestAnimationFrame(() => {
                if (this.$refs.maskElementRef) {
                    const { translateY, translateYCurrent } = modalState

                    if ((translateY || translateY === 0) && translateYCurrent) {
                        const opacity =
                            forceOpacity === undefined
                                ? 1 - (translateYCurrent - translateY) / (100 - translateY) || 0
                                : forceOpacity
                        this.$refs.maskElementRef.style.opacity = Math.max(
                            0,
                            Math.min(100, opacity)
                        ).toString()
                    }
                }
            })
        },

        triggerActiveModalClose() {
            const modalState = this.modalsState[this.activeModal]
            if (modalState) {
                this.doCloseModal(modalState)
            }
        },

        doCloseModal(modalState: ModalsStateEntry) {
            if (typeof modalState.onClose === 'function') {
                modalState.onClose()
            } else if (typeof this.nativeOnClose === 'function') {
                this.nativeOnClose()
            } else {
                console.error('OnClose is not find')
            }
        },

        waitTransitionFinish(modalState: ModalsStateEntry, handler: () => void) {
            const eventName = transitionEvents.transitionEndEventName

            const onceHandler = () => {
                if (modalState.innerElement !== undefined) {
                    modalState.innerElement.removeEventListener(eventName, onceHandler)
                }
                handler()
            }

            if (modalState.innerElement !== undefined) {
                modalState.innerElement.addEventListener(eventName, onceHandler)
            }
        },

        prevNextSwitchEndHandler() {
            this.activeTransitions = Math.max(0, this.activeTransitions - 1)

            if (this.activeTransitions > 0) {
                return
            }

            const activeModal = this.nextModal
            this.prevModal = null
            this.nextModal = null
            this.visibleModals = [activeModal]
            this.animated = false
            this.stopComponentUpdate = true
            this.switching = false
            this.$nextTick(() => {
                this.stopComponentUpdate = false
            }, 0)

            this.$nextTick(() => {
                this.proxyActiveModal = activeModal
            }, 0)

            if (!activeModal) {
                this.history = []
            }
        },

        animateTranslate(modalState: ModalsStateEntry, currentPercent: number | null = null) {
            let proxyCurrentPercent = currentPercent
            if (proxyCurrentPercent === null) {
                if (typeof modalState.translateY === 'number') {
                    proxyCurrentPercent = modalState.translateY
                }
            }
            const frameId = `animateTranslateFrame${modalState.id}`

            cancelAnimationFrame(this.frameIds[frameId])

            this.frameIds[frameId] = requestAnimationFrame(() => {
                if (modalState.innerElement) {
                    setTransformStyle(
                        modalState.innerElement,
                        `translateY(${proxyCurrentPercent}%)`
                    )
                }

                if (
                    modalState.type === TYPE_PAGE &&
                    modalState.footerElement &&
                    modalState.innerElement &&
                    proxyCurrentPercent
                ) {
                    const footerHeight = modalState.footerElement.offsetHeight
                    const factor =
                        modalState.innerElement.offsetHeight * (proxyCurrentPercent / 100)

                    setTransformStyle(
                        modalState.footerElement,
                        `translateY(calc(${footerHeight}px * -(${factor / footerHeight})))`
                    )
                }
            })

            if (modalState.type === TYPE_PAGE && modalState.expandable) {
                this.animatePageHeader(modalState, currentPercent)
            }
        },

        animatePageHeader(modalState: ModalsStateEntry, currentPercent: number | null = null) {
            let proxyCurrentPercent = currentPercent
            if (proxyCurrentPercent === null) {
                if (modalState.translateY) {
                    proxyCurrentPercent = modalState.translateY
                }
            }

            if (proxyCurrentPercent !== null) {
                const headerOpenPercent =
                    proxyCurrentPercent < 15 ? Math.max(0, 15 - proxyCurrentPercent) / 15 : 0

                requestAnimationFrame(() => {
                    if (modalState.headerElement !== undefined) {
                        const headerShadow: HTMLElement | null = modalState.headerElement.querySelector(
                            '.vc-ModalPageHeader__shadow'
                        )
                        if (headerShadow) {
                            headerShadow.style.opacity = headerOpenPercent.toString()
                        }
                    }
                })
            }
        },

        /* Touches */

        onTouchMove(e: any) {
            if (this.switching) {
                return
            }

            const activeModal = this.proxyActiveModal || this.nextModal
            if (!activeModal) {
                return
            }

            const modalState = this.modalsState[activeModal]

            if (modalState.type === TYPE_CARD) {
                this.onCardTouchMove(e, modalState)
            }

            if (modalState.type === TYPE_PAGE) {
                this.onPageTouchMove(e, modalState)
            }
        },

        onTouchEnd(e: any) {
            const activeModal = this.proxyActiveModal || this.nextModal
            if (!activeModal) {
                return
            }

            const modalState = this.modalsState[activeModal]

            if (modalState.type === TYPE_CARD) {
                this.onCardTouchEnd(e, modalState)
            }

            if (modalState.type === TYPE_PAGE) {
                this.onPageTouchEnd(e, modalState)
            }
        },

        /* Card methods */
        initCardModal(state: ModalsStateEntry, element: HTMLElement) {
            state.modalElement = element
            const findCardIn = element.querySelector<HTMLElement>('.vc-ModalCard__in')
            if (findCardIn) {
                state.innerElement = findCardIn
            }
            state.translateY = 0
        },

        onCardTouchMove(e: any, modalState: ModalsStateEntry) {
            const newModalState = modalState
            const { originalEvent, shiftY, startT } = e
            const target = originalEvent.target as HTMLElement

            if (target.closest('.vc-ModalCard__container')) {
                if (!this.touchDown) {
                    newModalState.touchStartTime = startT
                    this.touchDown = true
                    this.dragging = true
                }

                if (newModalState.innerElement) {
                    const shiftYPercent = (shiftY / newModalState.innerElement.offsetHeight) * 100
                    // TODO Add android
                    const shiftYCurrent = rubber(shiftYPercent, 72, 1.2, false)

                    newModalState.touchShiftYPercent = shiftYPercent
                    const translateY = modalState.translateY ? modalState.translateY : 0
                    newModalState.translateYCurrent = Math.max(0, translateY + shiftYCurrent)

                    this.animateTranslate(newModalState, newModalState.translateYCurrent)
                    this.setMaskOpacity(newModalState)
                }
            }
        },

        onCardTouchEnd(e: any, modalState: ModalsStateEntry) {
            let next
            const proxyModalState = modalState

            if (this.dragging) {
                let translateY = proxyModalState.translateYCurrent
                    ? proxyModalState.translateYCurrent
                    : 0
                const translateYPercent = proxyModalState.touchShiftYPercent
                    ? proxyModalState.touchShiftYPercent
                    : 0
                const touchStartTime: any = proxyModalState.touchStartTime
                    ? proxyModalState.touchStartTime
                    : new Date()

                const expectTranslateY =
                    translateY -
                    (Date.now() - touchStartTime.getTime()) *
                        240 *
                        0.6 *
                        (translateYPercent < 0 ? -1 : 1)
                translateY += Math.max(0, expectTranslateY)
                if (translateY >= 30 && !this.checkBooleanAttrTrue(proxyModalState.persistent)) {
                    translateY = 100
                } else {
                    translateY = 0
                }

                proxyModalState.translateY = translateY
                proxyModalState.hidden = translateY === 100

                if (proxyModalState.hidden) {
                    this.doCloseModal(proxyModalState)
                }

                next = () => {
                    if (!proxyModalState.hidden) {
                        this.animateTranslate(proxyModalState)
                        this.setMaskOpacity(proxyModalState)
                    }
                }

                this.touchDown = false
                this.dragging = false

                this.$nextTick(next)
            }
        },

        /* Page methods */

        initPageModal(modalState: ModalsStateEntry, modalElement: HTMLElement) {
            const newModalState = modalState

            const contentElement: HTMLElement | null = modalElement.querySelector(
                '.vc-ModalPage__content'
            )
            const contentHeight = contentElement
                ? (contentElement.firstElementChild as HTMLElement).offsetHeight
                : 0

            const prevTranslateY = modalState.translateY

            const innerElement: HTMLElement | null = modalElement.querySelector(
                '.vc-ModalPage__in-wrap'
            )
            const headerElement: HTMLElement | null = modalElement.querySelector(
                '.vc-ModalPage__header'
            )
            const contentQueryElement: HTMLElement | null = modalElement.querySelector(
                '.vc-ModalPage__content'
            )
            const footerElement: HTMLElement | null = modalElement.querySelector(
                '.vc-ModalPage__footer'
            )

            newModalState.expandable =
                contentHeight > (contentElement ? contentElement.clientHeight : 0)

            newModalState.modalElement = modalElement
            newModalState.innerElement = innerElement !== null ? innerElement : undefined
            newModalState.headerElement = headerElement !== null ? headerElement : undefined
            newModalState.contentElement =
                contentQueryElement !== null ? contentQueryElement : undefined
            newModalState.footerElement = footerElement !== null ? footerElement : undefined

            let collapsed = false
            let expanded = false
            let translateYFrom
            let translateY
            let expandedRange: [number, number]
            let collapsedRange: [number, number]
            let hiddenRange: [number, number]

            if (newModalState.expandable) {
                translateYFrom =
                    100 - (newModalState.settlingHeight ? newModalState.settlingHeight : 75)

                const shiftHalf = translateYFrom / 2
                const visiblePart = 100 - translateYFrom

                expandedRange = [0, shiftHalf]
                collapsedRange = [shiftHalf, (translateYFrom = visiblePart / 4)]
                hiddenRange = [translateYFrom + visiblePart / 4, 100]

                collapsed = translateYFrom > 0
                expanded = translateYFrom <= 0
                translateY = translateYFrom
            } else {
                const headerHeight = newModalState.headerElement
                    ? newModalState.headerElement.offsetHeight
                    : 0
                const height = contentHeight + headerHeight

                const parenElementHeight =
                    newModalState.innerElement && newModalState.innerElement.parentElement
                        ? newModalState.innerElement.parentElement.offsetHeight
                        : 0
                translateYFrom = 100 - (height / parenElementHeight) * 100
                translateY = translateYFrom

                expandedRange = [translateY, translateY + 25]
                collapsedRange = [translateY + 25, translateY + 25]
                hiddenRange = [translateY + 25, translateY + 100]
            }

            if (newModalState.expandable && prevTranslateY && translateY > prevTranslateY) {
                translateY = 0
            }

            newModalState.expandedRange = expandedRange
            newModalState.collapsedRange = collapsedRange
            newModalState.hiddenRange = hiddenRange
            newModalState.translateY = translateY
            newModalState.translateYFrom = translateYFrom
            newModalState.collapsed = collapsed
            newModalState.expanded = expanded
        },

        onPageTouchMove(e: any, modalState: ModalsStateEntry) {
            const proxyModalState = modalState
            const { shiftY, startT, originalEvent } = e

            const target = originalEvent.target as HTMLElement

            if (!e.isY) {
                if (target.closest('.vc-ModalPage')) {
                    originalEvent.preventDefault()
                }
                return undefined
            }

            if (!target.closest('.vc-ModalPage__in')) {
                return originalEvent.preventDefault
            }

            originalEvent.stopPropagation()

            const { expandable, contentScrolled, collapsed, expanded } = modalState

            if (!this.touchDown) {
                proxyModalState.touchStartTime = startT
                proxyModalState.touchStartContentScrollTop = proxyModalState.contentElement
                    ? proxyModalState.contentElement.scrollTop
                    : 0
                this.touchDown = true
            }

            if (contentScrolled) {
                return undefined
            }

            if (proxyModalState.touchMovePositive === null) {
                proxyModalState.touchMovePositive = shiftY > 0
            }

            if (
                !proxyModalState.expandable ||
                collapsed ||
                (expanded &&
                    proxyModalState.touchMovePositive &&
                    proxyModalState.touchStartContentScrollTop === 0) ||
                target.closest('.vc-ModalPage__header')
            ) {
                originalEvent.preventDefault()

                if (!expandable && shiftY < 0) {
                    return undefined
                }

                if (!this.dragging) {
                    this.dragging = true
                }

                const shiftTPercent = (shiftY / this.window.innerHeight) * 100
                // TODO Add android
                const shiftYCurrent = rubber(shiftTPercent, 72, 0.8, false)

                proxyModalState.touchShiftYPercent = shiftTPercent
                proxyModalState.translateYCurrent = rangeTranslate(
                    (proxyModalState.translateY ? proxyModalState.translateY : 0) + shiftYCurrent
                )

                this.animateTranslate(proxyModalState, proxyModalState.translateYCurrent)
                this.setMaskOpacity(proxyModalState)
            }

            return undefined
        },

        onPageTouchEnd(e: any, modalState: ModalsStateEntry) {
            const proxyModalState = modalState
            const { startY, shiftY } = e

            proxyModalState.contentScrolled = false
            proxyModalState.touchMovePositive = null

            let next

            if (this.dragging) {
                const shiftYEndPercent = ((startY + shiftY) / this.window.innerHeight) * 100
                const touchStartTime = modalState.touchStartTime
                    ? modalState.touchStartTime
                    : new Date()
                const touchShiftYPercent = modalState.touchShiftYPercent
                    ? modalState.touchShiftYPercent
                    : new Date()

                let translateY = proxyModalState.translateYCurrent
                    ? proxyModalState.translateYCurrent
                    : 0
                const expectTranslateY =
                    (translateY / (Date.now() - touchStartTime.getTime())) *
                    240 *
                    0.6 *
                    (touchShiftYPercent < 0 ? -1 : 1)
                translateY = rangeTranslate(translateY + expectTranslateY)

                const expandedRange = proxyModalState.expandedRange
                    ? proxyModalState.expandedRange
                    : [0, 0]
                const collapsedRange = proxyModalState.collapsedRange
                    ? proxyModalState.collapsedRange
                    : [0, 0]
                const hiddenRange = proxyModalState.hiddenRange
                    ? proxyModalState.hiddenRange
                    : [0, 0]

                if (numberInRange(translateY, expandedRange)) {
                    ;[translateY] = expandedRange
                } else if (numberInRange(translateY, collapsedRange)) {
                    translateY = proxyModalState.translateYFrom ? proxyModalState.translateYFrom : 0
                } else if (
                    numberInRange(translateY, hiddenRange) &&
                    !this.checkBooleanAttrTrue(proxyModalState.persistent)
                ) {
                    translateY = 100
                } else {
                    translateY = proxyModalState.translateYFrom ? proxyModalState.translateYFrom : 0
                }

                if (
                    translateY !== 100 &&
                    shiftYEndPercent >= 75 &&
                    !this.checkBooleanAttrTrue(proxyModalState.persistent)
                ) {
                    translateY = 100
                }

                proxyModalState.translateYCurrent = translateY
                proxyModalState.translateY = translateY
                proxyModalState.collapsed = translateY > 0 && translateY < shiftYEndPercent
                proxyModalState.expanded = translateY === 0
                proxyModalState.hidden = translateY === 100

                if (proxyModalState.hidden) {
                    this.doCloseModal(proxyModalState)
                }

                next = () => {
                    if (!proxyModalState.hidden) {
                        this.animateTranslate(proxyModalState)
                    }
                    this.setMaskOpacity(proxyModalState)
                }

                this.touchDown = false
                this.dragging = false

                this.$nextTick(next)
            }
        },
    },
    created() {
        this.initModalsState()
        if (this.$listeners.close) {
            this.nativeOnClose = this.$listeners.close
        }
    },
    mounted() {
        this.initActiveModal()
    },
    render(h: any) {
        if (!this.activeModal && !this.prevModal && !this.nextModal && !this.animated) {
            this.toggleDocumentScrolling(true)
            return h()
        }

        return (
            <touch class={this.classNames} onMoveY={this.onTouchMove} onEnd={this.onTouchEnd}>
                <div class="vc-ModalRoot__mask" onClick={this.onMaskClick} ref="maskElementRef" />
                <div class="vc-ModalRoot__viewport">
                    {this.modals.map((modal: VNode) => {
                        const modalId = this.getModalNameByNode(modal)
                        if (!this.visibleModals.includes(modalId)) {
                            return null
                        }
                        const modalState = { ...this.modalsState[modalId] }

                        const isPage = modalState.type === TYPE_PAGE
                        const key = `modal-${modalState.id}`

                        return (
                            <div
                                class={this.calculateModalClass(modalId, modalState, isPage)}
                                id={key}
                                key={key}
                            >
                                {modal}
                            </div>
                        )
                    })}
                </div>
            </touch>
        )
    },
})
