import Vue from 'vue'
import getClassName from '@/helpers/getClassName'

interface Props {
    label: string
    text: string
    selected: boolean
}

interface Computed {
    classNames: string
}

interface Methods {
    checkHasLabel(): boolean
}

export default Vue.extend<any, Methods, Computed, Props>({
    name: 'vc-TabbarItem',
    props: {
        label: { type: String, default: '' },
        text: { type: String, default: '' },
        selected: { type: Boolean, default: false },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-TabbarItem')
        },
    },
    methods: {
        checkHasLabel(): boolean {
            return this.label !== undefined && this.label.length > 0
        },
    },
    render(h: any) {
        const onClick =
            this.$listeners.click ||
            function() {
                return undefined
            }
        return (
            <div
                class={[this.classNames, { 'vc-TabbarItem--selected': this.selected }]}
                onClick={onClick}
            >
                <div class="vc-TabbarItem__in">
                    <div class="vc-TabbarItem__icon">
                        {this.$slots.default}
                        {this.checkHasLabel() && (
                            <div class="vc-TabbarItem__label">{this.label}</div>
                        )}
                    </div>
                    {this.text && <div class="vc-TabbarItem__text">{this.text}</div>}
                </div>
            </div>
        )
    },
})
