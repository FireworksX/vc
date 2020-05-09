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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="bomb_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M20.98 7.065a1 1 0 01.077 1.327l-.078.087-1.215 1.217c3.197 3.928 2.966 9.716-.693 13.375-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.674-3.674 9.496-3.892 13.424-.653l1.212-1.211a1 1 0 011.414 0zm-3.323 3.278A8 8 0 106.343 21.657a8 8 0 0011.314-11.314zm2.289-8.727l.038.11.5 1.752a1 1 0 01-1.886.659l-.038-.11-.5-1.753a1 1 0 011.886-.658zm6.998 7.482c-.173.484-.694.758-1.202.651l-.116-.031-1.816-.603c-.541-.18-.829-.75-.643-1.271.174-.485.695-.76 1.202-.652l.117.032 1.815.602c.542.18.83.75.643 1.272zm-1.565-6.56a1 1 0 01.078 1.327l-.078.087-1.6 1.6a1 1 0 01-1.492-1.327l.078-.087 1.6-1.6a1 1 0 011.414 0z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})