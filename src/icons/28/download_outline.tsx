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
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="download_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M21 22a1 1 0 110 2H7a1 1 0 010-2h14zM14 2a1 1 0 011 1v13.585l5.293-5.292a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L13 16.585V3a1 1 0 011-1z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})