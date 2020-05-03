import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './InfoRow.sass'

export default Vue.extend({
    name: 'vc-InfoRow',
    computed: {
        classNames(): any {
            return getClassName('vc-InfoRow')
        },
    },
    render(h: any) {
        return (
            <div class={this.classNames}>
                <div class="vc-InfoRow__header">{this.$slots.header}</div>
                <div class="vc-InfoRow__content">{this.$slots.default}</div>
            </div>
        )
    },
})
