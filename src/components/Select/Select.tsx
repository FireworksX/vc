import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Select.sass'
import FromField from '@/components/FormField/FromField'
import dropdown from '@/icons/24/dropdown'
import { InputAlighTypes } from './helpers'

export default Vue.extend({
    name: 'vc-Select',
    components: {
        'vc-form-field': FromField,
        'vc-icon-dropdown': dropdown,
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
        defaultTitle: {
            required: false,
            type: String,
            default: 'Выбор',
        },
    },
    data: () => ({
        notSelected: false,
        localValue: null,
        title: '',
    }),
    computed: {
        classNames(): string {
            return getClassName('vc-Select')
        },
    },
    methods: {
        emitValue(e: any) {
            this.$emit('input', e.target.value)
            this.getTitle(e.target)
        },
        getTitle(target: any) {
            const index = target.selectedIndex
            this.title = target[index].text
        },
    },
    render(h: any) {
        const { align, value, className, defaultTitle } = this.$props
        const { style, status, top, bottom, autofocus, placeholder, disabled }: any = this.$attrs
        const { default: children } = this.$slots

        return (
            <vc-form-field
                tag="label"
                class={[
                    this.classNames,
                    !value ? 'vc-Select--not-selected' : '',
                    `Select--align-${align}`,
                    className,
                ]}
                style={style}
                status={status}
                top={top}
                bottom={bottom}
            >
                <select
                    class="vc-Select__el"
                    onChange={this.emitValue}
                    value={value}
                    disabled={disabled}
                >
                    {placeholder && <option value="">{placeholder}</option>}
                    {children}
                </select>
                <div class="vc-Select__container">
                    <div class="vc-Select__title">{this.title || defaultTitle}</div>
                    <vc-icon-dropdown></vc-icon-dropdown>
                </div>
            </vc-form-field>
        )
    },
})
