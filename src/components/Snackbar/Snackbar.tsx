import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Touch from '@/components/Touch'
import FixedLayout from '@/components/FixedLayout'
import vueListenersAdapter from '@/helpers/vueListenersAdapter'
import { canUseDOM } from '@/lib/dom'
import transitionEvents from '@/lib/transitionEvents'
import { rubber } from '@/lib/touch'

interface SnackbarAction {
    action?: () => void
    title?: string
}

interface SnackbarProps {
    layout?: 'vertical' | 'horizontal'
    action?: SnackbarAction
}

export default Vue.extend({
    name: 'vc-Snackbar',
    components: {
        Touch,
        FixedLayout,
    },
    props: {
        layout: { type: String, default: 'vertical' },
        action: { type: Object }, // SnackbarAction,
        duration: { type: Number },
    },
    data() {
        return {
            closing: false,
            touched: false,
            closeTimeout: undefined,
            innerEl: undefined,
            shiftXPercent: 0,
            shiftXCurrent: 0,
            touchStartTime: new Date(),
            animationFrame: 0,
        }
    },
    computed: {
        classNames(): any {
            return [
                getClassName('vc-Snackbar'),
                `vc-Snackbar--l-${this.layout}`,
                {
                    'vc-Snackbar--closing': this.closing,
                    'vc-Snackbar--touched': this.touched,
                },
            ]
        },
        nativeOnClose(): any {
            return vueListenersAdapter(this.$listeners.close)
        },

        window(): any {
            return window
        },
    },
    methods: {
        onActionClick() {
            this.close()
            if (this.action.action !== undefined && typeof this.action.action === 'function') {
                this.action.action()
            }
        },

        clearCloseTimeout() {
            if (canUseDOM) {
                window.clearTimeout(this.closeTimeout)
            }
        },

        close() {
            this.closing = true
            this.waitTransitionFinish(this.innerEl, () => {
                this.nativeOnClose()
            })
        },

        setCloseTimeout() {
            if (canUseDOM && this.duration !== undefined) {
                const timer: any = window.setTimeout(this.close, this.duration)
                this.closeTimeout = timer
            }
        },

        getInnerRef(ref: any) {
            this.innerEl = ref
        },

        waitTransitionFinish(element: HTMLElement & any, handler: Function) {
            const eventName = transitionEvents.transitionEndEventName

            if (element !== undefined) {
                element.removeEventListener(eventName, handler)
                element.addEventListener(eventName, handler)
            }
        },

        onStart() {
            this.clearCloseTimeout()
        },

        onMoveX(e: any) {
            const { shiftX, startT, originalEvent } = e
            originalEvent.preventDefault()

            this.touched = true

            this.shiftXPercent = (shiftX / this.window.innerWidth) * 100
            // TODO make android flag
            this.shiftXCurrent = rubber(this.shiftXPercent, 72, 1.2, false)
            this.touchStartTime = startT

            this.setBodyTransformation(this.shiftXCurrent)
        },

        onEnd() {
            let callback = () => undefined

            if (this.touched) {
                let shiftXReal = this.shiftXCurrent
                const expectTranslateX =
                    (shiftXReal / (Date.now() - this.touchStartTime.getTime())) *
                    240 *
                    0.6 *
                    (this.shiftXPercent < 0 ? -1 : 1)
                shiftXReal += expectTranslateX

                if (shiftXReal >= 50) {
                    this.clearCloseTimeout()
                    this.waitTransitionFinish(this.$refs.bodyEl, () => {
                        this.nativeOnClose()
                    })
                    this.setBodyTransformation(120)
                } else {
                    callback = () => {
                        this.setCloseTimeout()
                        this.setBodyTransformation(0)
                        return undefined
                    }
                }
            } else {
                this.setCloseTimeout()
            }

            this.touched = false
            callback()
        },

        setBodyTransformation(percent: number) {
            cancelAnimationFrame(this.animationFrame)

            this.animationFrame = requestAnimationFrame(() => {
                if (this.$refs.bodyEl !== undefined) {
                    const el: any = this.$refs.bodyEl
                    el.style.transform = `translate3d(${percent}%, 0, 0)`
                }
            })
        },
    },
    mounted() {
        this.setCloseTimeout()
    },
    destroyed() {
        if (canUseDOM) {
            window.clearTimeout(this.closeTimeout)
        }
    },
    render(h: any) {
        const { before, after } = this.$slots

        return (
            <fixed-layout class={this.classNames} vertical="bottom">
                <touch
                    class="vc-Snackbar__in"
                    onRootRef={this.getInnerRef}
                    onStart={this.onStart}
                    onMoveX={this.onMoveX}
                    onEnd={this.onEnd}
                >
                    <div class="vc-Snackbar__body" ref="bodyEl">
                        {before && <div class="vc-Snackbar__before">{before}</div>}

                        <div class="vc-Snackbar__content">
                            <div class="vc-Snackbar__content-text">{this.$slots.default}</div>

                            {this.action && (
                                <button class="vc-Snackbar__action" onClick={this.onActionClick}>
                                    <div class="vc-Snackbar__action-self">{this.action.title}</div>
                                </button>
                            )}
                        </div>

                        {after && <div class="vc-Snackbar__after">{after}</div>}
                    </div>
                </touch>
            </fixed-layout>
        )
    },
})
