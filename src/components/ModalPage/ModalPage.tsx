import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-ModalPage',
    props: {
        settlingHeight: { type: Number, default: 75 },
        persistent: { type: Boolean, default: false },
    },
    computed: {
        classNames(): any {
            return getClassName('vc-ModalPage')
        },
    },
    render(h: any) {
        const { header } = this.$slots
        return (
            <div class={this.classNames}>
                <div class="vc-ModalPage__in-wrap">
                    <div class="vc-ModalPage__in-caret"></div>
                    <div class="vc-ModalPage__in">
                        <div class="vc-ModalPage__header">{header}</div>
                        <div class="vc-ModalPage__content">
                            <div class="vc-ModalPage__content-in">{this.$slots.default}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
})
