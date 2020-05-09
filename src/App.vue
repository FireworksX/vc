<template>
    <div id="app">
        <vc-root :active-view="activeView">
            <vc-view name="main-view" active-panel="1">
                <vc-modal-root slot="modal" :active-modal="activeModal">
                    <vc-modal-card
                        name="sendMoney"
                        :actions="modalCardActions"
                        @close="activeModal = null"
                    >
                        <template slot="header"
                            >Отправляйте деньги друзьям, используя банковскую карту</template
                        >
                        <template slot="caption"
                            >Номер карты получателя не нужен — он сам решит, куда зачислить
                            средства.</template
                        >
                        <icon-money-transfer slot="icon" />
                    </vc-modal-card>
                    <vc-modal-card
                        name="passMoney"
                        :actions="modalCardActions"
                        @close="activeModal = null"
                    >
                        <template slot="header"
                            >Отправляйте деньги друзьям, используя банковскую карту</template
                        >
                        <icon-money-transfer slot="icon" />
                    </vc-modal-card>
                    <vc-modal-page name="searchCity">
                        <vc-modal-page-header slot="header">Фильтрация</vc-modal-page-header>
                        <vc-div>
                            <vc-button mode="secondary">Выбор страны</vc-button>
                        </vc-div>
                        <vc-div>
                            <vc-button mode="secondary">Информация о пользователе</vc-button>
                        </vc-div>
                    </vc-modal-page>
                </vc-modal-root>
                <vc-panel name="1">
                    <vc-panel-header>Главная</vc-panel-header>
                    <vc-div>
                        <vc-button size="xl" @click="snack = 1">
                            <icon-add-circle slot="before" />
                            Добавить товар в избранное</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'sendMoney'"
                            >Перевести деньги</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
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
        <div class="sq"></div>
    </div>
</template>

<script>
import IconMessage from '@/icons/28/message_outline'
import IconFeed from '@/icons/28/newsfeed_outline'
import IconSearch from '@/icons/28/search_outline'
import IconMoneyTransfer from '@/icons/56/money_transfer'
import IconAddCircle from '@/icons/28/add_circle_outline'
// import AboutPage from '@/AboutPage'

export default {
    name: 'App',
    components: {
        // 'vc-icon-message': IconMessage,
        // 'vc-icon-feed': IconFeed,
        // 'vc-icon-search': IconSearch,
        IconAddCircle,
        IconMoneyTransfer,
    },
    data() {
        return {
            activeView: 'main-view',
            activePanel: '1',
            activeModal: null,
            snack: null,
            snackAction: {
                title: 'Убрать',
                action: () => {
                    console.log('Убрали из избранного')
                },
            },
            modalCardActions: [
                {
                    title: 'Попробовать',
                    mode: 'primary',
                    action: () => {
                        this.activeModal = 'passMoney'
                        return undefined
                    },
                },
            ],
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
    mounted() {
        setTimeout(() => {
            const sq = document.querySelector('.sq')
            sq.style.transform = `translateY(20%)`
        }, 5000)
    },
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

.sq {
    width: 100px;
    height: 100px;
    background: #000;
    transition: transform 1s;
}
</style>
