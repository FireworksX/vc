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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="chain_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M12.59 16.83c-.39.39-1.03.39-1.42 0a5.003 5.003 0 010-7.07l5.24-5.24a5.003 5.003 0 017.07 0 5.003 5.003 0 010 7.07l-1.436 1.436a.999.999 0 01-1.414-1.41l1.43-1.436a2.982 2.982 0 000-4.24 2.982 2.982 0 00-4.24 0l-5.23 5.23a2.982 2.982 0 000 4.24c.41.39.41 1.03 0 1.42zm2.82-5.66c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 010 7.07l-5.24 5.24a5.003 5.003 0 01-7.07 0 5.003 5.003 0 010-7.07l1.431-1.431a1 1 0 011.414 0h.001c.39.392.39 1.025 0 1.415L5.94 17.82a2.982 2.982 0 000 4.24 2.982 2.982 0 004.24 0l5.23-5.23a2.982 2.982 0 000-4.24.973.973 0 010-1.42z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})