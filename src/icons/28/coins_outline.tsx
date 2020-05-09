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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="coins_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M23.995 19.178C23.831 22.31 19.351 24.5 14 24.5c-5.452 0-10-2.274-10-5.5V9l.005-.178C4.169 5.69 8.649 3.5 14 3.5c5.452 0 10 2.274 10 5.5v10zm-1.994-6.813C20.165 13.695 17.242 14.5 14 14.5c-3.242 0-6.164-.804-8-2.134V14c0 1.745 3.51 3.5 8 3.5s8-1.755 8-3.5zM14 5.5C9.51 5.5 6 7.255 6 9s3.51 3.5 8 3.5 8-1.755 8-3.5-3.51-3.5-8-3.5zm8.001 11.865C20.165 18.695 17.242 19.5 14 19.5c-3.242 0-6.164-.804-8-2.134V19l.005.116C6.157 20.822 9.611 22.5 14 22.5c4.49 0 8-1.755 8-3.5z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})