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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_right_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z"></path><path d="M22.707 13.293l-7-7a1 1 0 00-1.497 1.32l.083.094L19.586 13H6a1 1 0 00-.993.883L5 14a1 1 0 00.883.993L6 15h13.586l-5.293 5.293a1 1 0 00-.083 1.32l.083.094a1 1 0 001.32.083l.094-.083 7-7 .097-.112.071-.11.054-.114.035-.105.025-.118.007-.059.004-.108-.004-.07-.016-.112-.03-.111-.044-.111-.052-.098-.067-.096a1.006 1.006 0 00-.08-.09l-7-7 7 7z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})