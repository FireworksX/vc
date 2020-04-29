<template>
    <div id="app">
        <vc-root :active-view="activeView">
            <vc-view name="main-view" :active-panel="activePanel">
                <vc-panel name="1">
                    <vc-panel-header>Главная</vc-panel-header>
                    <button></button>
                </vc-panel>
                <vc-panel name="2">
                    <vc-panel-header>Города</vc-panel-header>
                </vc-panel>
            </vc-view>
        </vc-root>
    </div>
</template>

<script>
import IconMessage from '@/icons/28/message_outline'
import IconFeed from '@/icons/28/newsfeed_outline'
import IconSearch from '@/icons/28/search_outline'

export default {
    name: 'App',
    // components: {
    //     'vc-icon-message': IconMessage,
    //     'vc-icon-feed': IconFeed,
    //     'vc-icon-search': IconSearch,
    // },
    data() {
        return {
            activeView: 'main-view',
            activePanel: '1',
            activeStory: 'feed',
            pop: null,
            alertActions: [
                {
                    title: 'Добавить',
                    action: this.selectFromAlert,
                },
                {
                    title: 'Отмена',
                    mode: 'cancel',
                    autoclose: true,
                },
            ],
        }
    },
    methods: {
        changeStory(story) {
            this.activeStory = story
        },
        closeActiveSheet() {
            this.pop = null
        },
        selectActionSheet(index) {
            alert(`select: ${index}`)
        },
        selectFromAlert() {
            this.pop = 1
        },
    },
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
