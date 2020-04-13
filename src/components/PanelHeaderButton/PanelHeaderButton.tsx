import Vue from 'vue'
import './PanelHeaderButton.sass'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-PanelHeaderButton',
    computed: {
        classNames(): string {
            return getClassName('vc-PanelHeaderButton')
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
    render(h: any) {
        return <button class={this.classNames}>{this.defaultSlot}</button>
    },
})
