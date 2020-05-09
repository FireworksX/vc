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

export default Vue.extend<Data, any, Computed, Props>({
    name: 'icon-28-message-outline',
    components: {
        IconWrapper,
    },
    render(h: any) {
        return (
            <icon-wrapper>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    id="add_circle_outline_28"
                >
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h28v28H0z"></path>
                        <path
                            d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4zm0 4a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H9a1 1 0 010-2h4V9a1 1 0 011-1z"
                            fill="currentColor"
                            fill-rule="nonzero"
                        ></path>
                    </g>
                </svg>
            </icon-wrapper>
        )
    },
})
