<template>
    <div id="app">
        <vc-epic :active-story="activeStory">
            <vc-tabbar slot="tabbar">
                <vc-tabbar-item
                    text="Новости"
                    :selected="activeStory === 'feed'"
                    @click="changeStory('feed')"
                >
                    <vc-icon-feed />
                </vc-tabbar-item>
                <vc-tabbar-item
                    text="Сообщения"
                    label="3"
                    :selected="activeStory === 'dialog'"
                    @click="changeStory('dialog')"
                >
                    <vc-icon-message />
                </vc-tabbar-item>
                <vc-tabbar-item
                    text="Поиск"
                    :selected="activeStory === 'search'"
                    @click="changeStory('search')"
                >
                    <vc-icon-search />
                </vc-tabbar-item>
            </vc-tabbar>
            <vc-view name="feed" active-panel="panel1">
                <template v-if="pop === 1" slot="popout">
                    <vc-action-sheet @onClose="closeActiveSheet">
                        <vc-action-sheet-item autoclose>
                            <vc-icon-feed slot="before" />
                            По дням
                        </vc-action-sheet-item>
                        <vc-action-sheet-item :autoclose="true" @click="selectActionSheet(2)"
                            >По неделям</vc-action-sheet-item
                        >
                        <vc-action-sheet-item mode="destructive" @click="selectActionSheet(0)"
                            >По месяцам</vc-action-sheet-item
                        >
                        <vc-action-sheet-item mode="cancel">Отменить</vc-action-sheet-item>
                    </vc-action-sheet>
                </template>
                <template v-if="pop === 2" slot="popout">
                    <vc-alert
                        actions-layout="horizontal"
                        :actions="alertActions"
                        @onClose="pop = null"
                    >
                        <h2>Подтвердите действие</h2>
                        <p>Добавить пользователю право на модерацию контента.</p>
                    </vc-alert>
                </template>
                <vc-panel name="panel1">
                    <vc-panel-header>Новости</vc-panel-header>
                    <button @click="pop = 2">SowPop</button>
                </vc-panel>
            </vc-view>
            <vc-view name="dialog" active-panel="panel2">
                <vc-panel name="panel2">
                    <vc-panel-header>Сообщения</vc-panel-header>
                </vc-panel>
            </vc-view>
            <vc-view name="search" active-panel="panel3">
                <vc-panel name="panel3">
                    <vc-panel-header>Поиск</vc-panel-header>
                </vc-panel>
            </vc-view>
        </vc-epic>
    </div>
</template>

<script>
import IconMessage from '@/icons/28/message_outline'
import IconFeed from '@/icons/28/newsfeed_outline'
import IconSearch from '@/icons/28/search_outline'

export default {
    name: 'App',
    components: {
        'vc-icon-message': IconMessage,
        'vc-icon-feed': IconFeed,
        'vc-icon-search': IconSearch,
    },
    data() {
        return {
            activeView: 'main-view',
            activePanel: 'panel1',
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
