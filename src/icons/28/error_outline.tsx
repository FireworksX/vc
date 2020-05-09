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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="error_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M3 14C3 7.928 7.928 3 14 3s11 4.928 11 11-4.928 11-11 11S3 20.072 3 14zm11-9.2c-5.078 0-9.2 4.122-9.2 9.2 0 5.078 4.122 9.2 9.2 9.2 5.078 0 9.2-4.122 9.2-9.2 0-5.078-4.122-9.2-9.2-9.2zm-1 9.7v-5a1 1 0 012 0v5a1 1 0 01-2 0zm-.25 3.75A1.25 1.25 0 1114 19.5c-.69 0-1.25-.56-1.25-1.25z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})