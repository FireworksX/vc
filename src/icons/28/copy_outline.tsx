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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="copy_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M17 2c1.306 0 2.418.835 2.83 2h-9.702c-1.783 0-2.43.186-3.082.534a3.635 3.635 0 00-1.512 1.512C5.186 6.698 5 7.345 5 9.128v10.701A3.001 3.001 0 013 17V8a6 6 0 016-6zm4 4a3 3 0 013 3v13a3 3 0 01-3 3H10a3 3 0 01-3-3V9a3 3 0 013-3zm0 2H10a1 1 0 00-1 1v13a1 1 0 001 1h11a1 1 0 001-1V9a1 1 0 00-1-1z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})