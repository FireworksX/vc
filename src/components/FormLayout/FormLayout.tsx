import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './FormLayout.sass'

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
    data: () => ({}),
    computed: {
        classNames(): string {
            return getClassName('vc-FormLayout')
        },
    },
    methods: {},
    render(h: any) {
        const { tag } = this.$props
        const { default: children }: any = this.$slots
        return (
            <tag class={[this.classNames]}>
                <div class="vc-FormLayout__container">
                    {children.map((field: any, i: number) => {
                        const { top, bottom } = field.data.attrs
                        const { status } = field.componentOptions.propsData
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
