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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_up_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M14 5h.02c.023 0 .046.002.07.004L14 5c.053 0 .104.004.155.011l.036.007c.254.046.475.184.62.377l7.896 7.898a1 1 0 01-1.32 1.497l-.094-.083L15 8.414V23.05c0 .525-.448.95-1 .95-.513 0-.936-.367-.993-.84L13 23.05V8.414l-6.293 6.293a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 7.895-7.898c.146-.193.367-.331.621-.378l.037-.005A.7.7 0 0114 5z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})