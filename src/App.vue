<template>
    <div id="app">
        <vc-root :active-view="activeView">
            <vc-view name="main-view" active-panel="1">
                <vc-panel name="1">
                    <vc-panel-header>Главная</vc-panel-header>
                    <vc-div>
                        <vc-button size="xl" @click="snack = 1"
                            >Добавить товар в избранное</vc-button
                        >
                    </vc-div>
                    <vc-snackbar
                        v-if="snack === 1"
                        :duration="3000"
                        :action="snackAction"
                        @close="snack = undefined"
                    >
                        <vc-avatar
                            slot="before"
                            :size="72"
                            src="https://a.lmcdn.ru/img236x341/M/A/MA178EMJBEV6_11023040_1_v1.jpg"
                        />
                        Товар "Marks & Spencer - Комплект" добавлен в избанное
                    </vc-snackbar>
                </vc-panel>
            </vc-view>
        </vc-root>
    </div>
</template>

<script>
import IconMessage from '@/icons/28/message_outline'
import IconFeed from '@/icons/28/newsfeed_outline'
import IconSearch from '@/icons/28/search_outline'
import IconMoneyTransfer from '@/icons/56/money_transfer'
// import AboutPage from '@/AboutPage'

export default {
    name: 'App',
    components: {
        // 'vc-icon-message': IconMessage,
        // 'vc-icon-feed': IconFeed,
        // 'vc-icon-search': IconSearch,
        // IconMoneyTransfer,
    },
    data() {
        return {
            activeView: 'main-view',
            activePanel: '1',
            snack: null,
            snackAction: {
                title: 'Убрать',
                action: () => {
                    console.log('Убрали из избранного')
                },
            },
            slideValue: 0,
            buttonStyle: {
                position: 'absolute',
                left: `50px`,
                top: `50px`,
            },
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
        startDrag(data) {
            console.log(data.shiftYAbs, data.shiftXAbs)
            this.buttonStyle.top = `${data.shiftYAbs}px`
            this.buttonStyle.left = `${data.shiftXAbs}px`
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
