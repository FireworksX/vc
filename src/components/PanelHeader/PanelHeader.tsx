import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Separator from '@/components/Separator'
import { canUseDOM } from '@/lib/dom'

export default Vue.extend({
    name: 'vc-PanelHeader',
    components: {
        'vc-Separator': Separator,
    },
    props: {
        separator: { type: Boolean, default: true },
        layout: { type: String, default: 'default' }, // default, fixed, auto
    },
    watch: {
        layout(value) {
            if (value === 'auto') {
                this.subscribeAutoLayout()
            }
        },
    },
    computed: {
        classNames(): any {
            return [
                getClassName('vc-PanelHeader'),
                {
                    'vc-PanelHeader_fixed': this.layout === 'fixed' || this.layout === 'auto',
                    'vc-PanelHeader_hidden': this.isHidden,
                },
            ]
        },
        defaultSlot(): any {
            if (this.$slots.default !== undefined) {
                if (this.$slots.default.length > 0) {
                    return this.$slots.default[0]
                }
                return undefined
            }
            return undefined
        },
    },
    data() {
        return {
            isHidden: false,
            saveYOffset: 0,
        }
    },
    methods: {
        subscribeAutoLayout() {
            if (canUseDOM) {
                document.addEventListener('scroll', () => this.doAutoDetect(window.pageYOffset))
            }
        },

        doAutoDetect(scrollYOffset: number) {
            this.isHidden = scrollYOffset > this.saveYOffset
            this.saveYOffset = scrollYOffset
        },
    },
    mounted() {
        if (this.layout === 'auto') {
            this.subscribeAutoLayout()
        }
    },
    render(h: any) {
        const { left, addon, right } = this.$slots

        return (
            <div class={this.classNames}>
                <div class="vc-PanelHeader__in">
                    <div class="vc-PanelHeader__left">
                        <div class="vc-PanelHeader__left-in">{left}</div>
                        <div class="vc-PanelHeader__left-addon">{addon}</div>
                    </div>
                    <div class="vc-PanelHeader__content">{this.$slots.default}</div>
                    <div class="vc-PanelHeader__right">{right}</div>
                </div>
                {this.separator && (
                    <div class="vc-PanelHeader__separator">
                        <vc-separator />
                    </div>
                )}
            </div>
        )
    },
})
