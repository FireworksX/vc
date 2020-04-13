import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './View.sass'

export default Vue.extend({
    name: 'vc-PanelHeaderButton',
    props: {
        activePanel: { type: String, required: true },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-View')
        },
    },
    methods: {
        getPanelId(node: VNode): string | undefined {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs.name
            }
            return undefined
        },
    },
    render(h: any) {
        const panels = this.$slots.default
        return (
            <div class={this.classNames}>
                {panels !== undefined &&
                    panels.filter(panel => this.getPanelId(panel) === this.activePanel)}
            </div>
        )
    },
})
