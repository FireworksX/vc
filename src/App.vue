<template>
    <div id="app">
        <vc-epic :active-story="activeStory">
            <vc-tabbar slot="tabbar">
                <vc-tabbar-item
                    :selected="activeStory === '/home'"
                    text="Главная"
                    @click="changeStory('/home')"
                >
                    <home-outline-28 />
                </vc-tabbar-item>
                <vc-tabbar-item
                    text="Мужчинам"
                    :selected="activeStory === '/men'"
                    @click="changeStory('/men')"
                >
                    <ghost-outline-28 />
                </vc-tabbar-item>
                <vc-tabbar-item text="Прочее" :selected="activeStory === '/other'">
                    <menu-outline-28 />
                </vc-tabbar-item>
            </vc-tabbar>
            <vc-view name="home" active-panel="1">
                <vc-alert
                    v-if="popout === 'clear'"
                    slot="popout"
                    :actions="clearAlertActions"
                    @close="popout = undefined"
                    ><h2>Подтвердите действие</h2>
                    <p>
                        Вы уверены, что хотите очистить корзину?
                    </p></vc-alert
                >
                <vc-modal-root slot="modal" :active-modal="activeModal">
                    <vc-modal-card
                        name="sendMoney"
                        :actions="modalCardActions"
                        @close="activeModal = null"
                    >
                        <template slot="header"
                            >Отправляйте деньги друзьям, используя банковскую карту</template
                        >
                        <template slot="caption">
                            <vc-user-stack layout="vertical" size="m" :photos="photos"
                                >Иван и ещё 2 ваших друга подписаны</vc-user-stack
                            >
                        </template>
                        <money-transfer-56 slot="icon" />
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
                    <vc-modal-page name="searchCity" @close="closeModal">
                        <vc-modal-page-header slot="header">Фильтрация</vc-modal-page-header>
                        <vc-div
                            ><vc-button size="xl" mode="secondary" @click="activeModal = 'country'"
                                >Выбор страны</vc-button
                            ></vc-div
                        >
                        <vc-div
                            ><vc-button
                                size="xl"
                                mode="secondary"
                                @click="activeModal = 'profileInfo'"
                                >Информация о пользователе</vc-button
                            ></vc-div
                        >
                        <vc-form-layout>
                            <vc-select top="Страна" placeholder="Выбор страны"></vc-select>
                            <vc-select top="Город" placeholder="Выбор города"></vc-select>
                            <vc-form-layout-group top="Пол">
                                <vc-radio>Любой</vc-radio>
                                <vc-radio>Мужской</vc-radio>
                                <vc-radio>Женский</vc-radio>
                            </vc-form-layout-group>
                        </vc-form-layout>
                        <vc-form-layout-group top="Дополнительно">
                            <vc-checkbox>С фотографией</vc-checkbox>
                            <vc-checkbox>Сейчас на сайте</vc-checkbox>
                        </vc-form-layout-group>
                    </vc-modal-page>
                    <vc-modal-page name="country" @close="closeModal">
                        <vc-modal-page-header slot="header">Выбор страны</vc-modal-page-header>
                        <vc-list>
                            <vc-div>
                                <vc-info-row>
                                    <template slot="header">Дата рождения</template>
                                    20 января 1997
                                </vc-info-row>
                            </vc-div>
                            <vc-div>
                                <vc-info-row>
                                    <template slot="header">Родной город</template>
                                    Лодейное Поле
                                </vc-info-row>
                            </vc-div>
                            <vc-div>
                                <vc-info-row>
                                    <template slot="header">Место работы</template>
                                    mod:
                                </vc-info-row>
                            </vc-div>
                        </vc-list>
                    </vc-modal-page>
                    <vc-modal-page name="profileInfo" @close="closeModal">
                        <vc-modal-page-header slot="header"
                            >Информация о пользователе</vc-modal-page-header
                        >
                        <vc-list>
                            <vc-div>
                                <vc-info-row>
                                    <template slot="header">Дата рождения</template>
                                    20 января 1997
                                </vc-info-row>
                            </vc-div>
                            <vc-div>
                                <vc-info-row>
                                    <template slot="header">Родной город</template>
                                    Лодейное Поле
                                </vc-info-row>
                            </vc-div>
                            <vc-div>
                                <vc-info-row>
                                    <template slot="header">Место работы</template>
                                    mod:
                                </vc-info-row>
                            </vc-div>
                        </vc-list>
                    </vc-modal-page>
                </vc-modal-root>
                <vc-panel name="1">
                    <vc-panel-header layout="auto">
                        Lamode
                        <vc-panel-header-button slot="right" @click="activeModal = 'subscribe'">
                            <market-28 />
                        </vc-panel-header-button>
                    </vc-panel-header>
                    <vc-div>
                        <vc-button size="xl" @click="snack = 1">
                            Добавить товар в избранное</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" @click="popout = 'clear'"> Алерт</vc-button>
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
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>
                    <vc-div>
                        <vc-button size="xl" mode="secondary" @click="activeModal = 'searchCity'"
                            >Поиск брендов</vc-button
                        >
                    </vc-div>

                    <vc-group>
                        <vc-header slot="header">Меню</vc-header>
                        <vc-cell expandable indicator="10" @click="activeModal = 'profileInfo'">
                            <attachments-28 slot="before" />
                            Сообщения</vc-cell
                        >
                    </vc-group>

                    <vc-link @click="activeModal = 'sendMoney'">Подробнее</vc-link>

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
                <vc-panel name="2">
                    <vc-panel-header>Список сотрудников</vc-panel-header>
                    <vc-fixed-layout vertical="top">
                        <vc-div>
                            <vc-button size="xl">Перейти в корзину</vc-button>
                        </vc-div>
                    </vc-fixed-layout>
                </vc-panel>
            </vc-view>
        </vc-epic>
    </div>
</template>

<script>
import VueRouter from 'vue-router'
import './styles/space_gray.sass'
import HomeOutline28 from '@fireworksx/vc-icons/dist/28/home_outline'
import GhostOutline28 from '@fireworksx/vc-icons/dist/28/ghost_outline'
import MenuOutline28 from '@fireworksx/vc-icons/dist/28/menu_outline'
import Market28 from '@fireworksx/vc-icons/dist/28/market_outline'
import Attachments28 from '@fireworksx/vc-icons/dist/28/attachments'
import MoneyTransfer56 from '@fireworksx/vc-icons/dist/56/money_transfer_outline'

const router = new VueRouter({
    mode: 'history',
    routes: [{ path: '/home' }, { path: '/men' }],
})

export default {
    name: 'App',
    router,
    components: {
        HomeOutline28,
        GhostOutline28,
        MenuOutline28,
        MoneyTransfer56,
        Market28,
        Attachments28,
    },
    data() {
        return {
            activeStory: 'home',
            activeView: 'main-view',
            activePanel: '1',
            popout: undefined,
            activeModal: null,
            clearAlertActions: [
                {
                    title: 'Очистить',
                    autoclose: true,
                    mode: 'destructive',
                },
                {
                    title: 'Отмена',
                    autoclose: true,
                    mode: 'cancel',
                },
            ],
            photos: [
                'https://sun9-60.userapi.com/c855124/v855124003/167f36/TzgXYX1Izqk.jpg?ava=1',
                'https://sun9-34.userapi.com/c857132/v857132690/49628/r4wBoWw0mJI.jpg?ava=1',
                'https://sun9-49.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1',
            ],
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
            switchChecked: false,
            workers: [
                {
                    name: 'Влад Анесов',
                    avatar:
                        'https://sun9-44.userapi.com/c858128/v858128761/67fe1/nAnraWnpHK8.jpg?ava=1',
                },
                {
                    name: 'Влад Анесов',
                    avatar:
                        'https://sun9-44.userapi.com/c858128/v858128761/67fe1/nAnraWnpHK8.jpg?ava=1',
                },
                {
                    name: 'Влад Анесов',
                    avatar:
                        'https://sun9-44.userapi.com/c858128/v858128761/67fe1/nAnraWnpHK8.jpg?ava=1',
                },
                {
                    name: 'Влад Анесов',
                    avatar:
                        'https://sun9-44.userapi.com/c858128/v858128761/67fe1/nAnraWnpHK8.jpg?ava=1',
                },
            ],
        }
    },
    methods: {
        closeModal() {
            this.activeModal = null
        },
        changeStory(story) {
            console.log(this.$route)
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

.sq {
    width: 100px;
    height: 100px;
    background: #000;
    transition: transform 1s;
}
</style>
