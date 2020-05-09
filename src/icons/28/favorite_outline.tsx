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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="favorite_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M14 19.178l5.69 3.476a.205.205 0 00.306-.223l-1.547-6.485 5.064-4.338a.205.205 0 00-.117-.36l-6.646-.533-2.56-6.156a.205.205 0 00-.38 0l-2.56 6.156-6.646.533a.205.205 0 00-.117.36l5.064 4.338-1.547 6.485a.205.205 0 00.306.223L14 19.178zm0 2.344L9.352 24.36a2.205 2.205 0 01-3.294-2.393l1.264-5.297-4.136-3.543a2.205 2.205 0 011.258-3.873l5.429-.435 2.091-5.028a2.205 2.205 0 014.072 0l2.091 5.028 5.429.435a2.205 2.205 0 011.258 3.873l-4.136 3.543 1.264 5.297a2.205 2.205 0 01-3.294 2.393L14 21.522z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})