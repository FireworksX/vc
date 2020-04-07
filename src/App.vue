<template>
    <div id="app">
        <vc-root :active-view="activeView">
            <vc-view id="main-view">
                <div>Main View</div>
            </vc-view>
            <vc-view id="second-view">
                <h1>Second View</h1>
            </vc-view>
        </vc-root>
    </div>
</template>

<script>
import Root from '@/components/Root/Root.vue'
import View from '@/components/View/View.vue'

export default {
    name: 'App',
    components: {
        'vc-view': View,
        'vc-root': Root,
    },
    data() {
        return {
            activeView: 'main-view',
        }
    },
}
</script>
