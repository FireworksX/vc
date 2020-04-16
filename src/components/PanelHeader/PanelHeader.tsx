import Vue, { VNode } from 'vue'
import './PanelHeader.sass'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-PanelHeader',
    props: {
        separator: { type: Boolean, default: true },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-PanelHeader')
        },
        leftSlot() {
            if (this.$slots.left !== undefined) {
                return this.$slots.left[0]
            }
            return undefined
        },
        rightSlot() {
            if (this.$slots.right !== undefined) {
                return this.$slots.right[0]
            }
            return undefined
        },
        addonSlot() {
            if (this.$slots.addon !== undefined) {
                return this.$slots.addon[0]
            }
            return undefined
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
        return (
            <div class={this.classNames}>
                <div class="vc-PanelHeader__in">
                    <div class="vc-PanelHeader__left">
                        <div class="vc-PanelHeader__left-in">{this.leftSlot}</div>
                        <div class="vc-PanelHeader__left-addon">{this.addonSlot}</div>
                    </div>
                    <div class="vc-PanelHeader__content">{this.$slots.default}</div>
                    <div class="vc-PanelHeader__right">{this.rightSlot}</div>
                </div>
                {this.separator && <div class="vc-PanelHeader__separator"></div>}
            </div>
        )
    },
})
