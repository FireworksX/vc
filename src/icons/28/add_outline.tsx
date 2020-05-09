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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M14 4a1 1 0 011 1v8h8a1 1 0 010 2h-8v8a1 1 0 01-2 0v-8H5a1 1 0 010-2h8V5a1 1 0 011-1z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
            </IconWrapper>
        )
    },
})