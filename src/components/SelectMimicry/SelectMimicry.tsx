import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import FromField from '@/components/FormField/FromField'
// @ts-ignore
import Icon24Dropdown from '@fireworksx/vc-icons/dist/24/dropdown'
import { InputAlighTypes } from './helpers'

export default Vue.extend({
    name: 'vc-Select',
    components: {
        'vc-form-field': FromField,
        'vc-icon-dropdown': Icon24Dropdown,
    },
    props: {
        className: {
            required: false,
            type: String,
        },
        value: {
            required: true,
        },
        align: {
            required: false,
            type: String as () => InputAlighTypes,
            default: 'left',
        },
        type: {
            required: false,
            type: String,
            default: 'text',
        },
        multiline: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
    data: () => ({}),
    computed: {
        classNames(): string {
            return getClassName('vc-Select')
        },
    },
    render(h: any) {
        const { align, value, className, multiline } = this.$props
        const { style, status, top, bottom, placeholder, disabled }: any = this.$attrs
        const { click } = this.$listeners

        return (
            <vc-form-field
                tag="label"
                class={[
                    this.classNames,
                    'vc-Select--mimicry',
                    !value ? 'vc-Select--not-selected' : '',
                    `vc-Select--align-${align}`,
                    disabled ? 'vc-Select--disabled' : '',
                    multiline ? 'vc-Select--multiline' : '',
                    className,
                ]}
                style={style}
                status={status}
                top={top}
                bottom={bottom}
            >
                <div class="vc-Select__container" onClick={click}>
                    <div class="vc-Select__title">{value || placeholder}</div>
                    <vc-icon-dropdown></vc-icon-dropdown>
                </div>
            </vc-form-field>
        )
    },
})
