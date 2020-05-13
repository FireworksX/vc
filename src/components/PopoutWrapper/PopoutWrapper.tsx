import Vue, { CreateElement, VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-PopoutWrapper',
    props: {
        alignX: { type: String, default: 'center' },
        alignY: { type: String, default: 'center' },
        closing: { type: Boolean, default: false },
    },
    computed: {
        classNames(): any[] {
            return [
                getClassName('vc-PopoutWrapper'),
                `vc-PopoutWrapper--h-${this.alignX}`,
                `vc-PopoutWrapper--v-${this.alignY}`,
                {
                    'vc-PopoutWrapper--closing': this.closing,
                },
            ]
        },
    },
    data: () => ({
        isOpen: false,
    }),
    render(h: CreateElement): VNode {
        const onClick =
            this.$listeners.click ||
            function() {
                return undefined
            }

        return (
            <div class={this.classNames}>
                <div class="vc-PopoutWrapper__mask"></div>
                <div class="vc-PopoutWrapper__container">
                    <div class="vc-PopoutWrapper__clickable" onClick={onClick}></div>
                    <div class="vc-PopoutWrapper__in">{this.$slots.default}</div>
                </div>
            </div>
        )
    },
})
