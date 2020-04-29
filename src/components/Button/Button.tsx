import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Button.sass'
import { ButtonModes, ButtonSizes } from './helpers'
import '@/styles/bright_light.sass'
import '@/styles/conts.sass'

export default Vue.extend({
    name: 'vc-Button',
    props: {
        mode: {
            required: false,
            type: String as () => ButtonModes,
            default: 'primary',
        },
        size: {
            required: false,
            type: String as () => ButtonSizes,
            default: 'm',
        },
        stretched: {
            required: false,
            type: Boolean,
        },
        href: {
            required: false,
            type: String,
        },
        align: {
            required: false,
            type: String,
            default: 'center',
        },
        className: {
            required: false,
            type: String,
        },
        // TODO "getRootRef" after "Tapable" component
    },
    data() {
        return {
            views: [],
            viewStore: [],
            isBack: false,
        }
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Button')
        },
    },
    methods: {
        getViewId(node: VNode): string | undefined {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs.name
            }
            return undefined
        },
    },
    render(h: any) {
        const { default: children, before, after } = this.$slots
        const { size, mode, align, className, stretched } = this.$props
        const { click } = this.$listeners
        return (
            <div
                class={[
                    this.classNames,
                    className,
                    'vc-Button__wrapper',
                    `vc-Button--sz-${size}`,
                    `vc-Button--lvl-${mode}`,
                    `vc-Button--aln-${align}`,
                    stretched ? 'vc-Button--str' : '',
                ]}
                onclick={click}
            >
                <div class="vc-Button__in">
                    {before && <div class="vc-Button__before">{before}</div>}
                    {children && <div class="vc-Button__content">{children}</div>}
                    {after && <div class="vc-Button__after">{after}</div>}
                </div>
            </div>
        )
    },
})
