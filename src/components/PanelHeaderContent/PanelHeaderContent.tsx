import Vue from 'vue'
import './PanelHeaderContent.sass'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
    name: 'vc-PanelHeaderContent',
    computed: {
        classNames(): string {
            return getClassName('vc-PanelHeaderContent')
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
        beforeSlot(): any {
            if (this.$slots.before !== undefined) {
                if (this.$slots.before.length > 0) {
                    return this.$slots.before[0]
                }
                return undefined
            }
            return undefined
        },
        statusSlot(): any {
            if (this.$slots.status !== undefined) {
                if (this.$slots.status.length > 0) {
                    return this.$slots.status[0]
                }
                return undefined
            }
            return undefined
        },
        asideSlot(): any {
            if (this.$slots.aside !== undefined) {
                if (this.$slots.aside.length > 0) {
                    return this.$slots.aside[0]
                }
                return undefined
            }
            return undefined
        },
    },
    render(h: any) {
        return (
            <div class={this.classNames}>
                {this.beforeSlot && (
                    <div class="vc-PanelHeaderContent__before">{this.beforeSlot}</div>
                )}
                <div class="vc-PanelHeaderContent__in">
                    {this.statusSlot && (
                        <div class="vc-PanelHeaderContent__status">{this.statusSlot}</div>
                    )}
                    <div class="vc-PanelHeaderContent__children">
                        <span class="vc-PanelHeaderContent__children-in">{this.defaultSlot}</span>
                        {this.asideSlot && (
                            <div class="vc-PanelHeaderContent__aside">{this.asideSlot}</div>
                        )}
                    </div>
                    <div class="vc-PanelHeaderContent__width"></div>
                </div>
            </div>
        )
    },
})
