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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="document_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M5 5.5v16A3.5 3.5 0 008.5 25h12a3.5 3.5 0 003.5-3.5V10.246a2 2 0 00-.489-1.31L18.098 2.69A2 2 0 0016.587 2H8.5A3.5 3.5 0 005 5.5zm11.597-.903l4.794 4.794a.35.35 0 01-.253.597l-4.645-.064a.5.5 0 01-.493-.5V4.845a.35.35 0 01.597-.248z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})