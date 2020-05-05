import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { canUseDOM } from '@/lib/dom'
import { coordX, coordY, getSupportedEvents, touchEnabled, VCUITouchEvent } from '@/lib/touch'
import vueListenersAdapter from '@/helpers/vueListenersAdapter'

const supportedEvents = getSupportedEvents()

export default Vue.extend({
    name: 'vc-Touch',
    props: {
        component: { type: String, default: 'div' },
        useCapture: { type: Boolean, default: true },
    },
    computed: {
        classNames(): any {
            return getClassName('vc-Touch')
        },
        containerRef(): any {
            return this.$refs.rootRef
        },
        document(): any {
            return document
        },
    },
    data() {
        return {
            cancelClick: false,
            gesture: {
                startX: 0,
                startY: 0,
                startT: new Date(),
                isPressed: false,
                isY: false,
                isX: false,
                isSlideX: false,
                isSlideY: false,
                isSlide: false,
                shiftX: 0,
                shiftY: 0,
                shiftXAbs: 0,
                shiftYAbs: 0,
            },
            onPropStart: vueListenersAdapter(this.$listeners.start),
            onPropStartY: vueListenersAdapter(this.$listeners.startY),
            onPropStartX: vueListenersAdapter(this.$listeners.startX),
            onPropMove: vueListenersAdapter(this.$listeners.move),
            onPropMoveX: vueListenersAdapter(this.$listeners.moveX),
            onPropMoveY: vueListenersAdapter(this.$listeners.moveY),
            onPropEnd: vueListenersAdapter(this.$listeners.end),
            onPropEndY: vueListenersAdapter(this.$listeners.endY),
            onPropEndX: vueListenersAdapter(this.$listeners.endX),
        }
    },
    methods: {
        onStart(e: VCUITouchEvent) {
            this.gesture.startX = coordX(e)
            this.gesture.startY = coordY(e)
            this.gesture.startT = new Date()
            this.gesture.isPressed = true

            const outputEvent = {
                ...this.gesture,
                originalEvent: e,
            }

            if (this.onPropStart) {
                this.onPropStart(outputEvent)
            }

            if (this.onPropStartX) {
                this.onPropStartX(outputEvent)
            }

            if (this.onPropStartY) {
                this.onPropStartY(outputEvent)
            }

            if (!touchEnabled) {
                this.subscribe(this.document)
            }
        },

        onMove(e: any & VCUITouchEvent) {
            const { isPressed, isX, isY, startX, startY }: any = this.gesture

            if (isPressed) {
                const shiftX = coordX(e) - startX
                const shiftY = coordY(e) - startY

                const shiftXAbs = Math.abs(shiftX)
                const shiftYAbs = Math.abs(shiftY)

                if (e.touches !== undefined && e.touches.length > 1) {
                    this.onEnd(e)
                }

                if (!isY && !isX) {
                    const willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs
                    const willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs
                    const willBeSlidedX =
                        willBeX && (this.onPropMoveX !== undefined || this.onPropMove !== undefined)
                    const willBeSlidedY =
                        willBeY && (this.onPropMoveY !== undefined || this.onPropMove !== undefined)

                    this.gesture.isY = isY
                    this.gesture.isX = isX
                    this.gesture.isSlideX = willBeSlidedX
                    this.gesture.isSlideY = willBeSlidedY
                    this.gesture.isSlide = willBeSlidedX || willBeSlidedY
                }

                if (this.gesture.isSlide) {
                    this.gesture.shiftX = shiftX
                    this.gesture.shiftY = shiftY
                    this.gesture.shiftXAbs = shiftXAbs
                    this.gesture.shiftYAbs = shiftYAbs

                    const outputEvents = {
                        ...this.gesture,
                        originalEvent: e,
                    }

                    if (this.onPropMove !== undefined) {
                        this.onPropMove(outputEvents)
                    }

                    if (this.gesture.isSlideX && this.onPropMoveX !== undefined) {
                        this.onPropMoveX(outputEvents)
                    }

                    if (this.gesture.isSlideY && this.onPropMoveY !== undefined) {
                        this.onPropMoveY(outputEvents)
                    }
                }
            }
        },

        onEnd(e: any & VCUITouchEvent) {
            const { isPressed, isSlideX, isSlideY, isSlide } = this.gesture

            if (isPressed) {
                const outputEvents = {
                    ...this.gesture,
                    originalEvent: e,
                }

                if (isSlide && this.onPropEnd) {
                    this.onPropEnd(outputEvents)
                }

                if (isSlideX && this.onPropEndX) {
                    this.onPropEnd(outputEvents)
                }

                if (isSlideY && this.onPropEndY) {
                    this.onPropEnd(outputEvents)
                }
            }

            const target = e.target as HTMLElement

            this.cancelClick = target.tagName === 'A' && isSlide

            // TODO Clear desture & make types

            if (!touchEnabled) {
                this.unsubscribe(this.document)
            }
        },

        subscribe(element: HTMLElement) {
            const listenerParams = { capture: this.useCapture, passive: false }

            element.addEventListener(supportedEvents[1], this.onMove, listenerParams)
            element.addEventListener(supportedEvents[2], this.onEnd, listenerParams)
            element.addEventListener(supportedEvents[3], this.onEnd, listenerParams)
        },

        unsubscribe(element: HTMLElement) {
            const listenerParams = { capture: this.useCapture, passive: false }

            element.removeEventListener(supportedEvents[1], this.onMove, listenerParams)
            element.removeEventListener(supportedEvents[2], this.onEnd, listenerParams)
            element.removeEventListener(supportedEvents[3], this.onEnd, listenerParams)
        },

        getRootRef() {
            if (
                this.$listeners.rootRef !== undefined &&
                typeof this.$listeners.rootRef === 'function'
            ) {
                vueListenersAdapter(this.$listeners.rootRef)(this.$refs.rootRef)
            }
        },
    },
    mounted() {
        if (canUseDOM) {
            this.containerRef.addEventListener(supportedEvents[0], this.onStart, {
                capture: this.useCapture,
                passive: false,
            })
            if (touchEnabled) {
                this.subscribe(this.containerRef)
            }
        }

        this.getRootRef()
    },
    destroyed() {
        this.containerRef.removeEventListener(supportedEvents[0], this.onStart)
        if (touchEnabled) {
            this.unsubscribe(this.containerRef)
        }
    },
    render(h: any) {
        let { click } = this.$listeners
        if (click === undefined) {
            click = () => undefined
        }

        const tag = this.component

        return (
            <tag class={this.classNames} onClick={click} ref="rootRef">
                {this.$slots.default}
            </tag>
        )
    },
})
