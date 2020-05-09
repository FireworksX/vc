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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="attachments_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M23 21.95V9.487c0-1.56-.162-2.126-.467-2.696a3.18 3.18 0 00-1.324-1.324C20.64 5.162 20.073 5 18.513 5H7.05A2.5 2.5 0 019.5 3H21a4 4 0 014 4v12.5a2.5 2.5 0 01-2 2.45zM18.5 7h-14A2.5 2.5 0 002 9.5v14A2.5 2.5 0 004.5 26h14a2.5 2.5 0 002.5-2.5v-14A2.5 2.5 0 0018.5 7zM8 17.5l2.5 3.01L14 16l3.897 5.196a.502.502 0 01-.402.804H5.527a.502.502 0 01-.396-.811L8 17.5z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})