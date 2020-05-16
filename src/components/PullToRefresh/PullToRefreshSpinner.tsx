import Vue from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-PullToRefreshSpinner',
    props: {
        on: { type: Boolean, default: true },
        size: { type: Number, default: 24 },
        strokeWidth: { type: Number, default: 2.5 },
        progress: { default: 0 },
    },
    watch: {
        progress(val) {
            this.updateComponent()
        },
    },
    computed: {
        classNames(): any {
            return [
                getClassName('vc-PullToRefresh__spinner'),
                { 'vc-PullToRefresh__spinner--on': this.on },
            ]
        },
    },
    data() {
        return {
            radius: 0,
            dasharray: 0,
            circleCenter: 0,
            dashoffset: 0,
        }
    },
    methods: {
        calcStrokeDashOffset(value: number, radius: number) {
            const progress = value / 100
            return 2 * Math.PI * radius * (1 - progress)
        },

        updateComponent() {
            this.radius = 0.5 * this.size - 0.5 * this.strokeWidth
            this.dasharray = 2 * Math.PI * this.radius
            this.circleCenter = 0.5 * this.size
            this.dashoffset = this.calcStrokeDashOffset(this.on ? 80 : this.progress, this.radius)
        },
    },
    render(h: any) {
        return (
            <div class={this.classNames}>
                <svg
                    class="vc-PullToRefresh__spinner-self"
                    style={{
                        width: this.size,
                        height: this.size,
                    }}
                    viewBox={`0 0 ${this.size} ${this.size}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        style={{
                            width: this.size,
                            height: this.size,
                            transformOrigin: `${this.circleCenter}px ${this.circleCenter}px`,
                        }}
                    >
                        <circle
                            class="vc-PullToRefresh__spinner-path"
                            fill="none"
                            strokeDasharray={this.dasharray}
                            strokeDashoffset={this.dashoffset}
                            strokeWidth={this.strokeWidth}
                            strokeLinecap="round"
                            cx={this.circleCenter}
                            cy={this.circleCenter}
                            r={this.radius}
                        />
                    </g>
                </svg>
            </div>
        )
    },
})
