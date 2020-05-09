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
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="edit_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z"></path><path d="M22.121 4.289l1.586 1.585a3 3 0 010 4.243L21 12.824 10.146 23.678a4.5 4.5 0 01-3.181 1.318H5.05A2.05 2.05 0 013 22.946V21.03a4.5 4.5 0 011.318-3.182L15.172 6.996l2.707-2.707a3 3 0 014.242 0zM16.5 8.496L5.732 19.264A2.5 2.5 0 005 21.03v1.915c0 .027.022.05.05.05h1.915a2.5 2.5 0 001.767-.732L19.5 11.496l-3-3zm2.793-2.793L18 6.996l3 3 1.293-1.293a1 1 0 000-1.414l-1.586-1.586a1 1 0 00-1.414 0z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})