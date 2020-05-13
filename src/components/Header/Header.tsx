import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { HeaderModes } from './helpers'

export default Vue.extend({
    name: 'vc-Header',
    props: {
        className: {
            required: false,
            type: String,
        },
        mode: {
            type: String as () => HeaderModes,
            default: 'primary',
        },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Header')
        },
    },
    render(h: any) {
        const { className, mode } = this.$props
        const { subtitle, indicator, default: children, aside } = this.$slots
        return (
            <div
                class={[
                    this.classNames,
                    `vc-Header--mode-${mode}`,
                    className || '',
                    typeof indicator === 'string' || typeof indicator === 'number'
                        ? 'vc-Header--pi'
                        : '',
                ]}
            >
                <div class="vc-Header__in">
                    <div class="vc-Header__content">
                        {children}
                        {subtitle && <div class="vc-Header__subtitle">{subtitle}</div>}
                    </div>
                    {indicator && <div class="vc-Header__indicator">{indicator}</div>}
                    {aside && <div class="vc-Header__aside">{aside}</div>}
                </div>
            </div>
        )
    },
})
