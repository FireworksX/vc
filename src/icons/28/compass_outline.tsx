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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="compass_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4zm4.949 6.316l-2 6a1 1 0 01-.633.633l-6 2a1 1 0 01-1.265-1.265l2-6a1 1 0 01.633-.633l6-2a1 1 0 011.265 1.265zm-2.53 1.265l-3.628 1.21-1.21 3.628 3.628-1.21 1.21-3.628z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})