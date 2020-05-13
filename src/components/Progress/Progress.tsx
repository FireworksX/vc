import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-Progress',
    props: {
        value: {
            required: true,
            type: Boolean,
        },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Progress')
        },
    },
    render(h: any) {
        const { value } = this.$props
        return (
            <div class={this.classNames}>
                <div class="vc-Progress__bg" />
                <div class="vc-Progress__in" style={{ width: `${value}%` }} />
            </div>
        )
    },
})
