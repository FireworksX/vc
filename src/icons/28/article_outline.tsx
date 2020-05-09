import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

interface Props {
    size: number
    name: string
}

interface Data {
    isVisible: boolean
}

interface Computed {
    classNames: string[]
    styles: {
        [key: string]: string
    }
}

interface Methods {}

export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'icon-28-message-outline',
    render(h: any) {
        return (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="article_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 012.3 2.3c.583 1.091.786 2.14.786 4.324v7.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 01-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 01-2.3-2.3C3.203 20.823 3 19.774 3 17.59v-7.18c0-2.183.203-3.233.786-4.324a5.543 5.543 0 012.3-2.3C7.177 3.203 8.226 3 10.41 3h7.18zm0 2h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.408.76-.55 1.499-.55 3.38v7.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.76.408 1.499.55 3.38.55h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 001.48-1.48c.408-.76.55-1.499.55-3.38v-7.18c0-1.881-.142-2.62-.55-3.38a3.543 3.543 0 00-1.48-1.48c-.76-.408-1.499-.55-3.38-.55zM13 17.5a1 1 0 010 2H9a1 1 0 010-2zm6-4.5a1 1 0 010 2H9a1 1 0 010-2zm0-4.5a1 1 0 010 2H9a1 1 0 010-2z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})