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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="advertising_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z"></path><path d="M13.952 20.477a3 3 0 01-5.908 1.042l-.458-2.598A5.5 5.5 0 018.5 8h7.917l3.972-2.528A3 3 0 0125 8.002v10.996a3 3 0 01-4.611 2.53L16.417 19h-2.725l.26 1.477zm-3.939.694a1 1 0 001.97-.347l-.322-1.825h-2.03l.382 2.172zM21.463 7.16L17 10v7l4.463 2.841A1 1 0 0023 18.998V8.002a1 1 0 00-1.537-.843zM15 9.999L8.5 10a3.5 3.5 0 000 7H15v-7z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})