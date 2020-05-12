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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="backspace_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M9 5c-.69 0-1.23.35-1.59.88L2 14l5.41 8.11c.36.53.9.89 1.59.89h13.985A3.015 3.015 0 0026 19.985V8.015A3.015 3.015 0 0022.985 5H9zm9.885 13.295L16 15.41l-2.885 2.885a.997.997 0 01-1.41-1.41L14.59 14l-2.885-2.885a.997.997 0 111.41-1.41L16 12.59l2.885-2.885a.997.997 0 011.41 1.41L17.41 14l2.885 2.885a.997.997 0 01-1.41 1.41z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})
