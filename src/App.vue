<template>
    <div id="app">
        <vc-root :active-view="activeView">
            <vc-view id="main-view" :active-panel="activePanel">
                <vc-panel id="panel1">
                    <div>panel-1</div>
                </vc-panel>
                <vc-panel id="panel2">
                    <div>panel-2</div>
                </vc-panel>
            </vc-view>
        </vc-root>
    </div>
</template>

<script>
import Root from '@/components/Root/Root.vue'
import View from '@/components/View/View.vue'
import Panel from '@/components/Panel/Panel.vue'

export default {
    name: 'App',
    components: {
        'vc-panel': Panel,
        'vc-view': View,
        'vc-root': Root,
    },
    data() {
        return {
            activeView: 'main-view',
            activePanel: 'panel1',
        }
    },
    mounted() {
        setTimeout(() => {
            this.activePanel = 'panel2'
        }, 5000)
    },
}
</script>
