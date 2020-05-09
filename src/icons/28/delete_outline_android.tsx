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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="delete_outline_android_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M22 10v10.5a4.5 4.5 0 01-4.5 4.5h-7A4.5 4.5 0 016 20.5V10h-.71A1.29 1.29 0 014 8.71V7.25A2.75 2.75 0 016.75 4.5h1.651A3.001 3.001 0 0111 3h6c1.097 0 2.075.593 2.599 1.5h1.651A2.75 2.75 0 0124 7.25v1.46A1.29 1.29 0 0122.71 10H22zm-1-2h1v-.75a.75.75 0 00-.75-.75h-2.313a1 1 0 01-.968-.75A1 1 0 0017 5h-6a1 1 0 00-.969.75 1 1 0 01-.968.75H6.75a.75.75 0 00-.75.75V8h15zM8 10v10.5a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5V10H8z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})