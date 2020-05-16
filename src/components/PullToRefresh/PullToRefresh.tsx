import Vue from 'vue'
import getClassName from '@/helpers/getClassName'
import { OS, platform } from '@/lib/platform'
import { canUseDOM } from '@/lib/dom'
import Touch from '@/components/Touch'
import FixedLayout from '@/components/FixedLayout'
import PullToRefreshSpinner from './PullToRefreshSpinner'

const PARAMS = {
    start: platform() === OS.ANDROID ? -45 : -10,
    max: platform() === OS.ANDROID ? 80 : 50,
    maxY: platform() === OS.ANDROID ? 80 : 400,
    refreshing: platform() === OS.ANDROID ? 50 : 36,
    positionMultiplier: platform() === OS.ANDROID ? 1 : 0.21,
}

function cancelEvent(event: any) {
    let proxyEvent = event
    if (!proxyEvent) {
        return false
    }
    while (proxyEvent.originalEvent) {
        proxyEvent = event.originalEvent
    }
    if (proxyEvent.preventDefault) {
        proxyEvent.preventDefault()
    }
    if (proxyEvent.stopPropagation) {
        proxyEvent.stopPropagation()
    }
    return false
}

export default Vue.extend({
    name: 'vc-PullToRefresh',
    components: {
        Touch,
        FixedLayout,
        PullToRefreshSpinner,
    },
    props: {
        fetching: { type: Boolean, default: false },
    },
    watch: {
        fetching(newVal: boolean, oldVal: boolean) {
            if (oldVal && !newVal) {
                this.onRefreshingFinish()
            }
        },
    },
    computed: {
        classNames(): any {
            return [
                getClassName('vc-PullToRefresh'),
                {
                    'vc-PullToRefresh--watching': this.watching,
                    'vc-PullToRefresh--refreshing': this.refreshing,
                },
            ]
        },

        document(): any {
            return document
        },

        window(): any {
            return window
        },
    },
    data() {
        return {
            watching: false,
            refreshing: false,
            canRefresh: false,

            touchDown: false,
            refreshingFinished: false,

            touchY: 0,
            spinnerY: PARAMS.start,
            spinnerProgress: 0,
            contentShift: 0,
        }
    },
    methods: {
        onWindowTouchMove(e: any) {
            if (this.refreshing) {
                e.preventDefault()
                e.stopPropagation()
            }
        },

        runRefreshing() {
            if (!this.refreshing) {
                this.refreshing = true
            }

            this.$emit('refresh')
        },

        onRefreshingFinish() {
            this.$nextTick(() => {
                if (!this.touchDown) {
                    this.resetRefreshingState()
                }
            })

            this.refreshingFinished = true
        },

        resetRefreshingState() {
            this.watching = false
            this.canRefresh = false
            this.refreshing = false
            this.refreshingFinished = false
            this.spinnerY = PARAMS.start
            this.spinnerProgress = 0
            this.contentShift = 0
        },

        onTouchStart(e: any) {
            if (this.refreshing) {
                cancelEvent(e)
            }
            this.touchDown = true
        },

        onTouchMove(e: any) {
            const { isY, shiftY } = e
            const { start, max } = PARAMS
            const { pageYOffset } = this.window

            const { refreshing, watching, touchDown } = this

            if (watching && touchDown) {
                cancelEvent(e)

                const { positionMultiplier } = PARAMS

                const shift = Math.max(0, shiftY - this.touchY)

                const currentY = Math.max(
                    start,
                    Math.min(PARAMS.maxY, start + shift * positionMultiplier)
                )
                const progress = currentY > -10 ? Math.abs((currentY + 10) / max) * 80 : 0

                this.spinnerY = currentY
                this.spinnerProgress = Math.min(80, Math.max(0, progress))
                this.canRefresh = progress > 80
                this.contentShift = (currentY + 10) * 2.3

                if (progress > 85 && !refreshing && platform() === OS.IOS) {
                    this.runRefreshing()
                }
            } else if (isY && pageYOffset === 0 && shiftY > 0 && !refreshing && touchDown) {
                cancelEvent(e)

                this.watching = true
                this.touchY = shiftY
                this.spinnerY = start
                this.spinnerProgress = 0
            }
        },

        onTouchEnd(e: any) {
            const { refreshing, canRefresh, refreshingFinished } = this

            this.$nextTick(() => {
                if (canRefresh && !refreshing) {
                    this.runRefreshing()
                } else if (refreshing && refreshingFinished) {
                    this.resetRefreshingState()
                } else {
                    this.spinnerY = refreshing ? PARAMS.refreshing : PARAMS.start
                    this.spinnerProgress = 0
                    this.contentShift = 0
                }
            })

            this.watching = false
            this.touchDown = false
        },
    },
    mounted() {
        if (canUseDOM) {
            this.document.addEventListener('touchmove', this.onWindowTouchMove, {
                cancelable: true,
                passive: true,
            })
        }
    },
    destroyed() {
        if (canUseDOM) {
            this.document.removeEventListener('touchmove', this.onWindowTouchMove, {
                cancelable: true,
                passive: false,
            })
        }
    },
    render(h: any) {
        const spinnerTransform = `translate3d(0, ${this.spinnerY}px, 0)`
        let contentTransform = ''

        if (platform() === OS.IOS && this.refreshing && !this.touchDown) {
            contentTransform = 'translate3d(0, 100px, 0)'
        } else if (platform() === OS.IOS && this.contentShift) {
            contentTransform = `translate3d(0, ${this.contentShift}px, 0)`
        }

        return (
            <touch
                onStart={this.onTouchStart}
                onMove={this.onTouchMove}
                onEnd={this.onTouchEnd}
                class={this.classNames}
            >
                <fixed-layout vertical="" class="vc-PullToRefresh__controls">
                    <pull-to-refresh-spinner
                        style={{
                            transform: spinnerTransform,
                            WebkitTransform: spinnerTransform,
                            opacity: this.watching || this.refreshing || this.canRefresh ? 1 : 0,
                        }}
                        on={this.refreshing}
                        progress={this.refreshing ? 0 : this.spinnerProgress}
                    />
                </fixed-layout>
                <div
                    class="vc-PullToRefresh__content"
                    ref="contentRef"
                    style={{
                        transform: contentTransform,
                        WebkitTransform: contentTransform,
                    }}
                >
                    {this.$slots.default}
                </div>
            </touch>
        )
    },
})
