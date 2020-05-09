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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="block_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M20.329 21.743L6.257 7.67A9.959 9.959 0 004 14c0 5.523 4.477 10 10 10a9.959 9.959 0 006.329-2.257zm1.414-1.414A9.959 9.959 0 0024 14c0-5.523-4.477-10-10-10a9.959 9.959 0 00-6.329 2.257L21.743 20.33zM14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})