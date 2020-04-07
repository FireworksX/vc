<template>
    <div :class="classNames">
        <slot></slot>
    </div>
</template>

<script>
import getClassName from '@/helpers/getClassName'

export default {
    name: 'vc-Panel',
    computed: {
        classNames() {
            return getClassName('vc-Panel')
        },
    },
}
</script>
