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
                    <vc-separator style="margin: 20px 0;"></vc-separator>
                    <vc-form-layout>
                        <vc-textarea
                            v-model="inputs.textarea"
                            :placeholder="'test textfield'"
                            @input="test()"
                            top="top text"
                            bottom="bottom text"
                            status="error"
                            :grow="false"
                        >
                        </vc-textarea>
                        <vc-input
                            top="Текстовое поле"
                            v-model="inputs.input"
                            align="center"
                            status="valid"
                        ></vc-input>
                        <vc-select default-title="Выберите пол" v-model="inputs.select">
                            <option value="m">Мужской</option>
                            <option value="f">Женский</option>
                            <option value="i">Изоморф</option>
                        </vc-select>
                        <vc-select-mimicry
                            value=""
                            placeholder="mimicry"
                            @click="test()"
                        ></vc-select-mimicry>
                    </vc-form-layout>
                    <vc-separator style="margin: 20px 0;"></vc-separator>
                    <vc-header mode="secondary">
                        Новые события
                        <span slot="indicator">20</span>
                        <vc-link slot="aside">Показать все </vc-link>
                    </vc-header>
                    <vc-separator style="margin: 20px 0;"></vc-separator>
                    <vc-link :href="'#qwe'" target="_blank">Link</vc-link>
                    <vc-separator style="margin: 20px 0;"></vc-separator>
                    <vc-list class="qwe">
                        <vc-button size="l" mode="primary" stretched @click="test()">
                            <span>LIST BTN 1</span>
                            <vc-icon-message slot="before" />
                        </vc-button>
                        <vc-button
                            size="l"
                            mode="primary"
                            stretched
                            @click="test()"
                            style="margin-top: 10px;"
                        >
                            <span>LIST BTN 2</span>
                            <vc-icon-message slot="before" />
                        </vc-button>
                    </vc-list>
                    <vc-footer>2 кнопки (ето футер)</vc-footer>
                    <vc-separator style="margin: 20px 0;"></vc-separator>
                    <vc-radio label="1" description="Описание 1 радио кнопки" v-model="inputs.radio"
                        >Radio 1</vc-radio
                    >
                    <vc-radio label="2" description="Описание 2 радио кнопки" v-model="inputs.radio"
                        >Radio 2</vc-radio
                    >
                    <vc-separator style="margin: 20px 0;"></vc-separator>
                    <vc-placeholder>
                        <icon-wrapper :size="60" slot="icon">
                            <vc-icon-feed />
                        </icon-wrapper>
                        <span slot="header">Новостей пока нет</span>
                        Чтобы увидеть новости, нужно сначала их создать
                        <vc-button @click="() => {}" slot="action">Ничего не сделать</vc-button>
                    </vc-placeholder>
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
            inputs: {
                radio: '1',
                textarea: '',
                input: null,
                select: null,
                selectMimicry: null,
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
        test() {
            console.log('this.inputs.textarea')
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
