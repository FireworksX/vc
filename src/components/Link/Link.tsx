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
        const { Component, className, getRootRef } = this.$props
        const { default: textSlot } = this.$slots

        return (
            <Component ref={getRootRef} class={[getClassName('vc-Link'), className || '']}>
                {textSlot}
            </Component>
        )
    },
})
