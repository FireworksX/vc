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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="check_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M17.924 3c1.958.02 2.955.232 3.988.784a5.543 5.543 0 012.3 2.3c.553 1.034.764 2.03.785 3.989v7.851c-.021 1.958-.232 2.955-.785 3.988a5.543 5.543 0 01-2.3 2.3c-1.033.553-2.03.764-3.988.785h-7.851c-1.959-.021-2.955-.232-3.988-.785a5.543 5.543 0 01-2.3-2.3c-.553-1.033-.764-2.03-.785-3.988v-7.851c.02-1.959.232-2.955.784-3.988a5.543 5.543 0 012.3-2.3c1.034-.553 2.03-.764 3.989-.785h7.851zm-.335 1.998h-7.181l-.557.005c-1.48.028-2.142.18-2.823.545-.64.343-1.137.84-1.48 1.48-.364.681-.517 1.343-.545 2.823l-.005.557v7.18l.005.558c.028 1.48.18 2.142.545 2.823.343.64.84 1.137 1.48 1.48.681.364 1.343.516 2.823.544l.557.005h7.18l.558-.005c1.48-.028 2.142-.18 2.823-.544a3.543 3.543 0 001.48-1.48c.364-.681.516-1.344.544-2.823l.005-.557v-7.181l-.005-.557c-.028-1.48-.18-2.142-.544-2.823a3.543 3.543 0 00-1.48-1.48c-.681-.364-1.344-.517-2.823-.545l-.557-.005zm.054 5.695a1 1 0 111.414 1.414l-5.6 5.6a1 1 0 01-1.414 0l-2.6-2.6a1 1 0 111.414-1.414l1.893 1.893z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})