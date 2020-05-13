import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { ButtonModes, ButtonSizes } from './helpers'

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
    render(h: any) {
        const { default: children, before, after } = this.$slots
        const { size, mode, align, className, stretched } = this.$props
        let { click } = this.$listeners

        if (click === undefined) {
            click = () => undefined
        }

        return (
            <button
                role="button"
                class={[
                    this.classNames,
                    className,
                    'vc-Button__wrapper',
                    `vc-Button--sz-${size}`,
                    `vc-Button--lvl-${mode}`,
                    `vc-Button--aln-${align}`,
                    stretched ? 'vc-Button--str' : '',
                ]}
                onClick={click}
            >
                <div class="vc-Button__in">
                    {before && <div class="vc-Button__before">{before}</div>}
                    {children && <div class="vc-Button__content">{children}</div>}
                    {after && <div class="vc-Button__after">{after}</div>}
                </div>
            </button>
        )
    },
})
