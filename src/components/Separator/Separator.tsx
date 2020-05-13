import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-Link',
    props: {
        wide: {
            required: false,
            type: Boolean,
        },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Button')
        },
    },
    render(h: any) {
        const { wide } = this.$props
        return (
            <div class={[getClassName('vc-Separator'), { 'vc-Separator--wide': wide }]}>
                <div class="vc-Separator__in"></div>
            </div>
        )
    },
})
