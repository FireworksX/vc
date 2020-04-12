<template>
    <div :class="classNames">
        <template v-for="(view, index) in views">
            <render v-if="view.id === activeView" :key="index" :vnode="view.node" />
        </template>
    </div>
</template>

<script>
import getClassName from '@/helpers/getClassName'

export default {
    name: 'vc-Root',
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

.vc-Root
  min-height: 100vh
  width: 100%
</style>
