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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cancel_circle_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z"></path><path d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4zM9.793 9.793a1 1 0 011.414 0L14 12.585l2.793-2.792a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L15.415 14l2.792 2.793a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L14 15.415l-2.793 2.792a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414L12.585 14l-2.792-2.793a1 1 0 01-.083-1.32z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})