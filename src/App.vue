<template>
    <div id="app">
        <vc-root :active-view="activeView">
            <vc-view name="main-view" :active-panel="activePanel">
                <vc-panel name="panel1">
                    <vc-panel-header>
                        <vc-panel-header-content>
                            <span slot="status">был в сети сегодня, в 18:46</span>
                            Влад Анесов
                        </vc-panel-header-content>
                    </vc-panel-header>
                </vc-panel>
            </vc-view>
        </vc-root>
    </div>
</template>

<script>
import Root from '@/components/Root/Root'
import View from '@/components/View/View'
import Panel from '@/components/Panel/Panel'
import PanelHeader from '@/components/PanelHeader/PanelHeader'
// import PanelHeaderButton from '@/components/PanelHeaderButton/PanelHeaderButton'
import PanelHeaderContent from '@/components/PanelHeaderContent/PanelHeaderContent'

export default {
    name: 'App',
    components: {
        'vc-panel-header': PanelHeader,
        // 'vc-panel-header-button': PanelHeaderButton,
        'vc-panel-header-content': PanelHeaderContent,
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
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
