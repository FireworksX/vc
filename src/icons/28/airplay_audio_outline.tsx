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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="airplay_audio_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M12.5 15.375a2.5 2.5 0 013 0L21 19.5a2.5 2.5 0 01-1.5 4.5h-11A2.5 2.5 0 017 19.5zm1.8 1.6a.5.5 0 00-.6 0L8.2 21.1a.5.5 0 00.3.9h11a.5.5 0 00.3-.9zM13.8 3c5.412 0 9.8 4.388 9.8 9.8 0 1.387-.29 2.736-.841 3.978a1 1 0 01-1.828-.813c.44-.987.669-2.059.669-3.165a7.8 7.8 0 10-14.838 3.368 1 1 0 01-1.803.864A9.765 9.765 0 014 12.8C4 7.388 8.388 3 13.8 3zm0 4a5.8 5.8 0 015.723 6.75l-.076.377a1 1 0 11-1.947-.456l.01-.044a3.8 3.8 0 10-7.442-.106l.068.29.01.033a1 1 0 11-1.924.549l-.038-.14A5.8 5.8 0 0113.8 7z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})