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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_uturn_right_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z"></path><path d="M15.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414l3.293-3.294L12.5 10a5.5 5.5 0 000 11H17a1 1 0 010 2h-4.5a7.5 7.5 0 010-15l6.084-.001-3.291-3.292a1 1 0 01-.083-1.32z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})