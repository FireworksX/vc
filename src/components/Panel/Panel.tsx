import Vue from 'vue'
import getClassName from '@/helpers/getClassName'
import './Panel.sass'

export default Vue.extend({
    name: 'vc-Panel',
    computed: {
        classNames(): string {
            return getClassName('vc-Panel')
        },
        defaultSlot() {
            return this.$slots.default
        },
    },
    render(h: any) {
        return <div class={this.classNames}>{this.defaultSlot}</div>
    },
})
