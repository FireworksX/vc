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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cancel_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M6.293 6.293a1 1 0 011.414 0L14 12.585l6.293-6.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414L15.415 14l6.292 6.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0L14 15.415l-6.293 6.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414L12.585 14 6.293 7.707a1 1 0 01-.083-1.32z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})