import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Link.sass'

export default Vue.extend({
    name: 'vc-Link',
    props: {
        Component: {
            required: false,
            type: String,
            default: 'a',
        },
        className: {
            required: false,
            type: String,
        },
        getRootRef: {
            required: false,
            type: String,
        },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Link')
        },
    },
    render(h: any) {
        const { Component, className, restProps, getRootRef } = this.$props
        const attrs = this.$attrs
        const { default: textSlot } = this.$slots

        return h(
            Component,
            {
                attrs: {
                    class: `${getClassName('vc-Link')} ${className}`,
                    ref: getRootRef,
                    ...attrs,
                },
            },
            textSlot
        )
    },
})
