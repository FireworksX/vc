<template>
    <div :class="classNames">
        <template v-for="(panel, index) in panels">
            <render v-if="panel.id === activePanel" :key="index" :vnode="panel.node" />
        </template>
    </div>
</template>

<script>
import getClassName from '@/helpers/getClassName'

export default {
    name: 'vc-View',
    props: {
        activePanel: { type: String, required: true },
    },
    computed: {
        classNames() {
            return getClassName('vc-View')
        },
    },
    data() {
        return {
            panels: [],
        }
    },
    created() {
        this.panels = this.$slots.default.map(el => {
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

.vc-View
  background: #f7f7f7
  min-height: 100vh
</style>
