import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Textarea.sass'
import FromField from '@/components/FormField/FromField'

export default Vue.extend({
    name: 'vc-Textarea',
    components: {
        'vc-form-field': FromField,
    },
    props: {
        className: {
            required: false,
            type: String,
        },
        grow: {
            required: false,
            type: Boolean,
            default: true,
        },
        onResize: {
            required: false,
            type: Function,
        },
        value: {
            required: true,
            type: String || null,
        },
        placeholder: {
            required: false,
            type: String,
        },
        disabled: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        height: 0,
        localValue: null,
    }),
    mounted() {
        this.resize()
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Textarea')
        },
        textareaNode(): any {
            return this.$refs.vctextarea
        },
    },
    methods: {
        resize() {
            const el = this.textareaNode
            if (el) {
                const { offsetHeight, scrollHeight } = el
                const style = window.getComputedStyle(el)
                const paddingTop = parseInt(style.paddingTop, 10)
                const paddingBottom = parseInt(style.paddingBottom, 10)
                let diff = paddingTop + paddingBottom
                if (scrollHeight + diff <= offsetHeight) {
                    diff = 0
                }
                this.height = el.scrollHeight - diff
                if (this.onResize) {
                    this.onResize(el)
                }
            }
        },
        emitValue(e: any) {
            this.localValue = e.target.value
            this.$emit('input', this.localValue)
            if (this.grow) {
                this.resize()
            }
        },
    },
    render(h: any) {
        const { placeholder, disabled } = this.$props
        const { style, status, top, bottom }: any = this.$attrs
        const height = this.height || 66

        return (
            <vc-form-field
                class={[this.classNames]}
                style={style}
                status={status}
                top={top}
                bottom={bottom}
            >
                <textarea
                    placeholder={placeholder}
                    disabled={disabled}
                    ref="vctextarea"
                    class="vc-Textarea__el"
                    value={this.value}
                    oninput={this.emitValue}
                    style={{ height: `${height}px` }}
                />
            </vc-form-field>
        )
    },
})
