import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Link.sass'

export default Vue.extend({
    name: 'vc-Link',
    props: {
        Component: {
            type: String,
            default: 'a',
        },
        className: {
            type: String,
        },
        getRootRef: {
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

        let onClick: any = () => undefined

        if (this.$listeners.click) {
            if (Array.isArray(this.$listeners.click)) {
                ;[onClick] = this.$listeners.click
            } else {
                onClick = this.$listeners.click
            }
        }

        return (
            <Component
                ref={getRootRef}
                class={[getClassName('vc-Link'), className || '']}
                onClick={onClick}
            >
                {textSlot}
            </Component>
        )
    },
})
