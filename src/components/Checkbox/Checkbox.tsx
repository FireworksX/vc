import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Checkbox.sass'

export default Vue.extend({
    name: 'vc-Checkbox',
    props: {
        value: { type: Boolean, required: true },
    },
    computed: {
        classNames(): any {
            return getClassName('vc-Checkbox')
        },
    },
    methods: {
        onChange() {
            const newValue = !this.value
            this.$emit('input', newValue)
        },
    },
    render(h: any) {
        return (
            <label class={this.classNames}>
                <input
                    value={this.value}
                    type="checkbox"
                    class="vc-Checkbox__input"
                    onChange={this.onChange}
                />
                <div class="vc-Checkbox__container">
                    <div class="vc-Checkbox__icon"></div>
                    <div class="vc-Checkbox__content">{this.$slots.default}</div>
                </div>
            </label>
        )
    },
})
