import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-List',
    computed: {
        classNames(): string {
            return getClassName('vc-List')
        },
    },
    render(h: any) {
        const items = this.$slots.default
        return <div class={[getClassName('vc-List')]}>{items}</div>
    },
})
