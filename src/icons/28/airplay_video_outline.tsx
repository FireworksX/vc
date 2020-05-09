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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="airplay_video_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M12.5 15.375a2.5 2.5 0 013 0L21 19.5a2.5 2.5 0 01-1.5 4.5h-11A2.5 2.5 0 017 19.5zm1.8 1.6a.5.5 0 00-.6 0L8.2 21.1a.5.5 0 00.3.9h11a.5.5 0 00.3-.9zM20 4a5 5 0 014.995 4.783L25 9v6c0 1.235-.45 2.403-1.252 3.31a1 1 0 01-1.499-1.325c.433-.49.695-1.104.743-1.764L23 15V9a3 3 0 00-2.824-2.995L20 6H8a3 3 0 00-2.995 2.824L5 9v6c0 .742.269 1.44.75 1.984a1 1 0 01-1.5 1.324 4.982 4.982 0 01-1.243-3.045L3 15V9a5 5 0 014.783-4.995L8 4h12z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})