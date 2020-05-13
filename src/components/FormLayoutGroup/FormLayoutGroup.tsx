import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-FormLayoutGroup',
    computed: {
        classNames(): string {
            return getClassName('vc-FormLayoutGroup')
        },
    },
    render(h: any) {
        const { default: children } = this.$slots
        return <div class={this.classNames}>{children}</div>
    },
})
