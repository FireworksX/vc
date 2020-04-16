import Vue from 'vue'
import getClassName from '@/helpers/getClassName'
import './Panel.sass'

export default Vue.extend({
    name: 'vc-Panel',
    computed: {
        classNames(): string {
            return getClassName('vc-Panel')
        },
    },
    render(h: any) {
        return <div class={this.classNames}>{this.$slots.default}</div>
    },
})
