<template>
    <div :class="classNames">
        <slot></slot>
    </div>
</template>

<script>
import getClassName from '@/helpers/getClassName'

export default {
    name: 'vc-View',
    computed: {
        classNames() {
            return getClassName('vc-View')
        },
    },
    data() {
        return {
            count: 0,
        }
    },
}
</script>

<style lang="sass">

.vc-View
  background: #f7f7f7
  min-height: 100vh
</style>
