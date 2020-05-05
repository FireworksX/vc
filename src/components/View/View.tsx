import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './View.sass'
import waitTransitionFinish from '@/helpers/waitTransitionFinish'

interface Data {
    visiblePanels: string[]
}

export default Vue.extend<Data, any, any, any>({
    name: 'vc-PanelHeaderButton',
    props: {
        activePanel: { type: String, required: true },
    },
    computed: {
        classNames(): any[] {
            return [
                getClassName('vc-View'),
                {
                    'vc-View--animated': this.animated,
                },
            ]
        },
    },
    watch: {
        activePanel(newVal, oldVal) {
            this.visiblePanels = [newVal, oldVal]
            this.animated = true
            this.proxyActivePanel = undefined
            this.nextPanel = newVal
            this.prevPanel = oldVal

            waitTransitionFinish(() => {
                this.proxyActivePanel = newVal
                this.visiblePanels = [newVal]
                this.animated = false
                this.prevPanel = undefined
                this.nextPanel = undefined
            })
        },
    },
    data() {
        return {
            prevPanel: undefined,
            nextPanel: undefined,
            proxyActivePanel: undefined,
            visiblePanels: [this.activePanel],
            animated: false,
        }
    },
    methods: {
        getPanelId(node: VNode): string | undefined {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs.name
            }
            return undefined
        },
        getPanelClassNames(panel: VNode): any[] {
            const panelId = this.getPanelId(panel)
            return [
                'vc-View__panel',
                {
                    'vc-View__panel--active': panelId === this.proxyActivePanel,
                    'vc-View__panel--prev': panelId === this.prevPanel,
                    'vc-View__panel--next': panelId === this.nextPanel,
                },
            ]
        },
    },
    render(h: any) {
        let panels = []

        if (this.$slots.default !== undefined) {
            panels = this.$slots.default.filter((panel: any) => {
                return this.visiblePanels.includes(this.getPanelId(panel))
            })
        }

        const hasPopout = this.$slots.popout !== undefined
        return (
            <div class={this.classNames}>
                <div class="vc-View__panels">
                    {panels !== undefined &&
                        panels.map((panel: any) => (
                            <div class={this.getPanelClassNames(panel)}>{panel}</div>
                        ))}
                </div>

                {hasPopout && <div class="vc-View__popout">{this.$slots.popout}</div>}
            </div>
        )
    },
})
