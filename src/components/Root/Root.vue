<template>
    <div :class="classNames">
        <template v-for="(view, index) in views">
            <transition name="fade" :key="index">
                <render v-if="view.id === activeView" :vnode="view.node" />
            </transition>
        </template>
    </div>
</template>

<script>
import getClassName from '../../helpers/getClassName'

export default {
    name: 'vc-Root',
    components: {
        Render: {
            functional: true,
            render: (h, ctx) => {
                return ctx.props.vnode
            },
        },
    },
    props: {
        activeView: { type: String, required: true },
    },
    data() {
        return {
            views: [],
        }
    },
    computed: {
        classNames() {
            return getClassName('vc-Root')
        },
    },
    created() {
        this.views = this.$slots.default.map(el => {
            const {
                data: { attrs },
            } = el
            return {
                id: attrs.id,
                node: el,
            }
        })
    },
}
</script>

<style lang="sass">

body
  margin: 0
  padding: 0

.fade-enter-active, .fade-leave-active
  transition: .5s

.fade-enter
  transform: translateY(100%)

.fade-enter-to
  transform: translateY(0)

.fade-leave
  transform: translateY(0)

.fade-leave-to
  transform: translateY(100%)

.vc-Root
  min-height: 100vh
  width: 100%
</style>
