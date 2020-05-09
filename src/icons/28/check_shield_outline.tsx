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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="check_shield_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M13.484 1.502c.35-.05.682-.05 1.032 0 .345.05.633.127 1.296.348l6.82 2.273A2 2 0 0124 6.021V15.3c0 4.794-2.878 8.467-8.458 10.942l-.368.16a3 3 0 01-2.348 0C7.007 23.93 4 20.202 4 15.3V6.02a2 2 0 011.368-1.897l7.008-2.335c.533-.174.797-.242 1.108-.286zm.75 1.98a1.58 1.58 0 00-.467 0c-.2.029-.389.08-.947.265L6 6.021V15.3c0 4.016 2.471 7.078 7.609 9.262.25.106.532.106.775.003l.354-.154C19.641 22.236 22 19.226 22 15.3V6.02l-6.977-2.324a5.973 5.973 0 00-.668-.193zm5.173 7.01a1 1 0 01.083 1.32l-.083.095-6 6a1 1 0 01-1.32.083l-.094-.083-3.25-3.25a1 1 0 011.32-1.497l.094.083 2.543 2.542 5.293-5.292a1 1 0 011.414 0z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})