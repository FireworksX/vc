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
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="favorite_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M14 19.625l-5.808 3.548a.75.75 0 01-1.12-.814l1.578-6.62-5.169-4.429a.75.75 0 01.428-1.317l6.785-.544 2.614-6.284a.75.75 0 011.384 0l2.614 6.284 6.785.544a.75.75 0 01.428 1.317l-5.17 4.428 1.58 6.62a.75.75 0 01-1.12.815L14 19.625z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})