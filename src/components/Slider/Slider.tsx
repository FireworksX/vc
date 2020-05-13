import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Touch from '@/components/Touch'
import { canUseDOM } from '@/lib/dom'

export function precisionRound(number: number, precision: number) {
    const factor = 10 ** precision
    return Math.round(number * factor) / factor
}

export default Vue.extend({
    name: 'vc-Slider',
    components: {
        Touch,
    },
    props: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 0 },
        value: { type: Number, default: 0, required: true },
    },
    computed: {
        classNames(): any {
            return getClassName('vc-Slider')
        },
        containerRef(): any {
            return this.$refs.containerRef
        },
    },
    data() {
        return {
            startX: 0,
            percentPosition: 0,
            containerLeft: 0,
            containerWidth: 0,
        }
    },
    methods: {
        calculateThumbClass(): any {
            return [
                'vc-Slider__thumb',
                'vc-Slider__thumb--end',
                {
                    'vc-Slider__thumb--active': true, // this.state.active,
                },
            ]
        },

        onStart(e: any) {
            const absolutePosition = this.validateAbsolute(e.startX - this.containerLeft)
            const percentPosition = this.absoluteToPercent(absolutePosition)

            this.onChangeValue(this.percentToValue(percentPosition))
            this.startX = absolutePosition
        },

        onMoveX(e: any) {
            const absolutePosition = this.validateAbsolute(this.startX + (e.shiftX || 0))
            const percentPosition = this.absoluteToPercent(absolutePosition)

            this.onChangeValue(percentPosition)

            e.originalEvent.preventDefault()
        },

        onResize(cb?: VoidFunction & any) {
            this.containerLeft = this.containerRef.offsetLeft
            this.containerWidth = this.containerRef.offsetWidth

            if (cb !== undefined) {
                cb()
            }
        },

        validateAbsolute(absolute: number) {
            let result = Math.max(0, Math.min(absolute, this.containerWidth))

            if (this.step > 0) {
                const stepCount = (this.max - this.min) / this.step
                const absStep = this.containerWidth / stepCount

                result = Math.round(result / absStep) * absStep
            }

            return result
        },

        validatePercent(percent: number) {
            return Math.max(0, Math.min(percent, 100))
        },

        absoluteToPercent(absolute: number) {
            return (absolute * 100) / this.containerWidth
        },

        percentToValue(percent: number) {
            const result = (percent * (this.max - this.min)) / 100 + this.min
            if (this.step > 1) {
                const stepFloatPath = `${this.step}`.split('.')[1] || ''
                return precisionRound(result, stepFloatPath.length)
            }
            return result
        },

        valueToPercent(value: number) {
            return ((value - this.min) * 100) / (this.max - this.min)
        },

        onChangeValue(value: number) {
            this.$emit('input', value)
        },
    },
    mounted() {
        if (canUseDOM) {
            window.addEventListener('resize', this.onResize)

            this.onResize(() => {
                this.percentPosition = this.validatePercent(this.valueToPercent(this.value))
            })
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize)
    },
    render(h: any) {
        return (
            <div class={this.classNames} ref="containerRef">
                <touch class="vc-Slider__in" onStart={this.onStart} onMoveX={this.onMoveX}>
                    <div class="vc-Slider__dragger" style={`width: ${this.value}%`}>
                        <span class={this.calculateThumbClass()} />
                    </div>
                </touch>
            </div>
        )
    },
})
