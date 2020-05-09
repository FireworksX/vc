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
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="delete_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z"></path><path d="M14 1.5c2.376 0 3.925 1.234 4.422 3.5H24.5a1 1 0 010 2h-1.105l-1.612 15.314A3 3 0 0118.799 25H9.201a3 3 0 01-2.984-2.686L4.605 7H3.5a1 1 0 110-2h6.078c.497-2.266 2.046-3.5 4.422-3.5zM21.383 7H6.616l1.59 15.105a1 1 0 00.995.895h9.598a1 1 0 00.995-.895L21.383 7zM14 9a1 1 0 011 1v10a1 1 0 01-2 0V10a1 1 0 011-1zm4.05.001a1 1 0 01.949 1.049l-.5 10a1 1 0 11-1.998-.1l.5-10a1 1 0 011.049-.949zm-8.1 0a1 1 0 011.049.95l.5 10a1 1 0 11-1.998.099l-.5-10A1 1 0 019.951 9zM14 3.5c-1.267 0-2 .454-2.352 1.5h4.704C16 3.954 15.267 3.5 14 3.5z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})