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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="delete_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M9.985 25h8.03A2.985 2.985 0 0021 22.015V8H7v14.015A2.985 2.985 0 009.985 25zM9.56 4.5c.218-.862.999-1.5 1.929-1.5h5.02c.93 0 1.711.638 1.93 1.5h2.31c.69 0 1.25.56 1.25 1.25v.96c0 .16-.13.29-.29.29H6.29A.29.29 0 016 6.71v-.96c0-.69.56-1.25 1.25-1.25h2.31z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})