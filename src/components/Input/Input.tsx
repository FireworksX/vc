import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import FormField from '@/components/FormField/FormField'
import { InputAlighTypes } from './helpers'

export default Vue.extend({
    name: 'vc-Input',
    components: {
        'vc-form-field': FormField,
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
    },
    data: () => ({
        height: 0,
        localValue: null,
    }),
    computed: {
        classNames(): string {
            return getClassName('vc-Input')
        },
    },
    render(h: any) {
        const { align, value, type } = this.$props
        const { style, status, top, bottom, autofocus, placeholder, disabled }: any = this.$attrs

        return (
            <vc-form-field
                class={[this.classNames, align ? `vc-Input--${align}` : '']}
                style={style}
                status={status}
                top={top}
                bottom={bottom}
            >
                <input
                    class="vc-Input__el"
                    value={value}
                    type={type}
                    oninput={this.$emit('input', this.localValue)}
                    disabled={disabled || false}
                    autofocus={autofocus}
                    placeholder={placeholder || ''}
                />
            </vc-form-field>
        )
    },
})
