import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-FormLayout',
    props: {
        tag: {
            required: false,
            type: String,
            default: 'form',
        },
        className: {
            required: false,
            type: String,
        },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-FormLayout')
        },
    },
    methods: {
        getStatusByNode(node: VNode) {
            if (node.componentOptions && node.componentOptions.propsData) {
                const props: any = node.componentOptions.propsData
                return props.status || 'default'
            }
            return 'default'
        },
    },
    render(h: any) {
        const { tag } = this.$props
        const { default: children }: any = this.$slots
        return (
            <tag class={this.classNames}>
                <div class="vc-FormLayout__container">
                    {children.map((field: any, i: number) => {
                        let top
                        let bottom
                        const status = this.getStatusByNode(field)
                        if (field.data && field.data.attrs) {
                            top = field.data.attrs.top
                            bottom = field.data.attrs.bottom
                        }
                        return (
                            <div
                                class={[
                                    'vc-FormLayout__row',
                                    `${status ? `vc-FormLayout__row--s-${status}` : ''} `,
                                ]}
                                key={field.key || `row-${i}`}
                            >
                                {top && <div class="vc-FormLayout__row-top">{top}</div>}
                                {field}
                                {bottom && <div class="vc-FormLayout__row-bottom">{bottom}</div>}
                            </div>
                        )
                    })}
                </div>
            </tag>
        )
    },
})
