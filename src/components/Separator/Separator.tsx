import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Separator.sass'
import '@/styles/bright_light.sass'
import '@/styles/conts.sass'

export default Vue.extend({
    name: 'vc-Button',
    props: {
        wide: {
            required: false,
            type: Boolean,
        },
    },
    data() {
        return {}
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Button')
        },
    },
    methods: {
        getViewId(node: VNode): string | undefined {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs.name
            }
            return undefined
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
