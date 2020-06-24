import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import usePlatform from '@/hooks/usePlatform'
import { OS } from '@/lib/platform'
// @ts-ignore
import Icon24Chevron from '@fireworksx/vc-icons/dist/24/chevron'

export default Vue.extend({
    name: 'vc-Cell',
    props: {
        description: { type: String },
        indicator: { type: String },
        expandable: { type: Boolean, default: false },
        multiline: { type: Boolean, default: false },
    },
    components: {
        Icon24Chevron,
    },
    computed: {
        classNames(): any {
            return [
                getClassName('vc-Cell'),
                {
                    'vc-Cell--exp': this.expandable,
                    'vc-Cell--mult': this.multiline,
                },
            ]
        },
    },
    render(h: any) {
        const { before, after } = this.$slots
        const platform = usePlatform()
        const hasAfter = after || (this.expandable && platform === OS.IOS)

        let onClick: any = () => undefined

        if (this.$listeners.click) {
            if (Array.isArray(this.$listeners.click)) {
                ;[onClick] = this.$listeners.click
            } else {
                onClick = this.$listeners.click
            }
        }

        return (
            <div role="button" class={this.classNames} onClick={onClick}>
                {before}
                <div class="vc-Cell__main">
                    <div class="vc-Cell__children">{this.$slots.default}</div>
                    {this.description && <div class="vc-Cell__description">{this.description}</div>}
                </div>
                {this.indicator && <div class="vc-Cell__indicator">{this.indicator}</div>}
                {hasAfter && (
                    <div class="vc-Cell__after">
                        {after}
                        {this.expandable && platform === OS.IOS && <icon-24-chevron />}
                    </div>
                )}
            </div>
        )
    },
})
