import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './List.sass'

export default Vue.extend({
    name: 'vc-List',
    computed: {
        classNames(): string {
            return getClassName('vc-List')
        },
    },
    render(h: any) {
        const { default: children } = this.$slots
        const attrs = this.$attrs
        return h(
            'div',
            {
                attrs: {
                    class: `${getClassName('vc-List')}`,
                    ...attrs,
                },
            },
            children
        )
    },
})
