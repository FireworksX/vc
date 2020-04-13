import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Root.sass'
import '@/styles/bright_light.sass'

export default Vue.extend({
    name: 'vc-Root',
    props: {
        activeView: { type: String, required: true },
    },
    data() {
        return {
            views: [],
        }
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Root')
        },
    },
    methods: {
        getViewId(node: VNode): string | undefined {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs.name
            }
            return undefined
        },
    },
    render(h: any) {
        const views = this.$slots.default
        return (
            <div class={this.classNames}>
                {views !== undefined &&
                    views.filter(view => this.getViewId(view) === this.activeView)}
            </div>
        )
    },
})
