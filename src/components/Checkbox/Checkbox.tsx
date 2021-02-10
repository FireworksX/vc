import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import VcIcon24CheckBoxOn from '@fireworksx/vc-icons/dist/24/check_box_on.vue'
import VcIcon24CheckBoxOff from '@fireworksx/vc-icons/dist/24/check_box_off.vue'

export default Vue.extend({
    name: 'vc-Checkbox',
    props: {
        value: { type: Boolean, required: true },
    },
    components: {
        'vc-icon-checkbox-on': VcIcon24CheckBoxOn,
        'vc-icon-checkbox-off': VcIcon24CheckBoxOff,
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
                    checked={this.value}
                />
                <div class="vc-Checkbox__container">
                    <div class="vc-Checkbox__icon vc-Checkbox__icon--on">
                        <vc-icon-checkbox-on />
                    </div>
                    <div class="vc-Checkbox__icon vc-Checkbox__icon--off">
                        <vc-icon-checkbox-off />
                    </div>
                    <div class="vc-Checkbox__content">{this.$slots.default}</div>
                </div>
            </label>
        )
    },
})
