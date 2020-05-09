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
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="chevron_right_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M11 7.5l6.5 6.5-6.5 6.5" stroke="#8BC1FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M16.086 14l-5.793 5.793a1 1 0 001.414 1.414l6.5-6.5a1 1 0 000-1.414l-6.5-6.5a1 1 0 00-1.414 1.414L16.086 14z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})