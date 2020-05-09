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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="archive_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M21.5 4A3.5 3.5 0 0125 7.5v2a1.5 1.5 0 01-1.5 1.5H23v9a4 4 0 01-4 4H9a4 4 0 01-4-4v-9h-.5A1.5 1.5 0 013 9.5v-2A3.5 3.5 0 016.5 4h15zm-.5 7H7v9a2 2 0 002 2h10a2 2 0 002-2v-9zm-4 2.5a1 1 0 010 2h-6a1 1 0 010-2zM21.5 6h-15A1.5 1.5 0 005 7.5V9h18V7.5A1.5 1.5 0 0021.5 6z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})