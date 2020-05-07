import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Touch from '@/components/Touch'
import './ModalRoot.sass'
import vueListenersAdapter from '@/helpers/vueListenersAdapter'
import transitionEvents from '@/lib/transitionEvents'
import setTransformStyle from '@/lib/styles'

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
}

export interface ModalRootData {
    [key: string]: any
    modalsState: {
        [key: string]: ModalsStateEntry
    }
}

const snapshotData: any = {}

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

        nativeOnClose() {
            return vueListenersAdapter(this.$listeners.close)
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
        }
    },
    methods: {
        /* Total methods */

        updateComponent() {
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
                this.inited = false
                this.switching = false

                if (nextModal === null) {
                    this.closeActiveModal()
                } else {
                    this.initActiveModal()
                }

                return undefined
            }

            this.prevModal = prevModal
            this.nextModal = nextModal
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

            console.log(prevModal, nextModal)

            const prevModalState: ModalsStateEntry = this.modalsState[prevModal]
            const nextModalState: ModalsStateEntry = this.modalsState[nextModal]

            if (!prevModalState && !nextModalState) {
                return console.error('')
            }

            const prevIsPage = !!prevModalState && prevModalState.type === TYPE_PAGE
            const prevIsCard = !!prevModalState && prevModalState.type === TYPE_CARD

            const nextIsPage = !!nextModalState && nextModalState.type === TYPE_PAGE
            const nextIsCard = !!nextModalState && nextModalState.type === TYPE_CARD
            console.log(prevModalState, nextModalState)
            if (prevModalState && (nextIsCard || prevIsCard || nextIsPage)) {
                alert(1)
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
            if (!this.switching) {
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
            this.modalsState = this.modals.reduce((acc: any, modal: VNode) => {
                const state: ModalsStateEntry = {
                    id: this.getModalNameByNode(modal),
                    onClose: this.getModalOnCloseByNode(modal),
                    dynamicContentHeight: !!this.getModalAttrsByNode(modal).dynamicContentHeight,
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

            this.$nextTick(() => {
                const modalElement = this.pickModal(activeModal)
                const modalState = this.modalsState[activeModal]

                if (modalElement.querySelector('.vc-ModalPage')) {
                    modalState.type = TYPE_PAGE
                } else if (modalElement.querySelector('.vc-ModalCard')) {
                    modalState.type = TYPE_CARD
                    this.initCardModal(modalState, modalElement)
                }
            })

            this.inited = true
            this.switching = true
        },

        closeActiveModal() {
            if (!this.prevModal) {
                return
            }

            const prevModalState = this.modalsState[this.prevModal]

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

                    if (translateY && translateYCurrent) {
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
            this.activeModal = activeModal
            this.animated = false
            this.switching = false

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
                    setTransformStyle(modalState.innerElement, `translateY(${currentPercent}%)`)
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

        /* Card methods */
        initCardModal(state: ModalsStateEntry, element: HTMLElement) {
            state.modalElement = element
            const findCardIn = element.querySelector<HTMLElement>('.vc-ModalCard__in')
            if (findCardIn) {
                state.innerElement = findCardIn
            }
            state.translateY = 0
        },
    },
    created() {
        this.initModalsState()
    },
    mounted() {
        this.initActiveModal()
    },
    render(h: any) {
        if (!this.activeModal && !this.prevModal && !this.nextModal && !this.animated) {
            return <div></div>
        }

        return (
            <touch class={this.classNames}>
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
