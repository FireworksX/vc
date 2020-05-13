import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Separator from '@/components/Separator'

export default Vue.extend({
    name: 'vc-PanelHeader',
    components: {
        'vc-Separator': Separator,
    },
    props: {
        separator: { type: Boolean, default: true },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-PanelHeader')
        },
        defaultSlot(): any {
            if (this.$slots.default !== undefined) {
                if (this.$slots.default.length > 0) {
                    return this.$slots.default[0]
                }
                return undefined
            }
            return undefined
        },
    },
    methods: {
        getPanelId(node: VNode) {
            return undefined
        },
    },
    render(h: any) {
        const { left, addon, right } = this.$slots

        return (
            <div class={this.classNames}>
                <div class="vc-PanelHeader__in">
                    <div class="vc-PanelHeader__left">
                        <div class="vc-PanelHeader__left-in">{left}</div>
                        <div class="vc-PanelHeader__left-addon">{addon}</div>
                    </div>
                    <div class="vc-PanelHeader__content">{this.$slots.default}</div>
                    <div class="vc-PanelHeader__right">{right}</div>
                </div>
                {this.separator && (
                    <div class="vc-PanelHeader__separator">
                        <vc-separator />
                    </div>
                )}
            </div>
        )
    },
})
