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
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="camera_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M11.392 5h5.216c.759 0 1.204.22 1.64.733l.79.977c.4.494 1.214.79 1.962.79h.5c2 0 3.5 1.5 3.5 4V19c0 2-2 4-4.5 4h-13C5 23 3 21 3 19v-7.5c0-2.5 1.5-4 3.5-4H7c.748 0 1.563-.296 1.963-.79l.79-.977c.435-.512.88-.733 1.639-.733zM8.65 14.75A5.352 5.352 0 0014 20.1a5.352 5.352 0 005.35-5.35A5.352 5.352 0 0014 9.4a5.352 5.352 0 00-5.35 5.35zm1.6 0a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" fill="currentColor"></path></g></svg>            </IconWrapper>
        )
    },
})