import Vue, { CreateElement, VNode } from 'vue'
import { validateIconSizes } from '@/helpers/validateSizes'

interface Data {
    isVisible: boolean
}

interface Computed {
    classNames: string[]
    styles: {
        [key: string]: string
    }
}

export default Vue.extend<Data, any, Computed, any>({
    name: 'vc-IconWrapper',
    props: {
        size: { type: Number, default: 28, validator: size => validateIconSizes(size) },
        name: { type: String, default: 'vc-DefaultIcon' },
    },
    computed: {
        classNames() {
            return [
                'vc-Icon',
                `vc-Icon--${this.size}`,
                `vc-Icon--${this.name}`,
                `vc-Icon--${this.name}_${this.size}`,
            ]
        },
        styles() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
            }
        },
    },
    render(h: CreateElement): VNode {
        return (
            <div style={this.styles} class={this.classNames}>
                <svg style={this.styles}>{this.$slots.default}</svg>
            </div>
        )
    },
})
