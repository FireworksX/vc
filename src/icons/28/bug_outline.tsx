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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="bug_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M20.301 3.043a1 1 0 01-.05 1.413l-1.327 1.238a8.04 8.04 0 012.008 2.31L21 8h3a1 1 0 01.117 1.993L24 10h-2.252c.164.639.252 1.31.252 2v2h4a1 1 0 01.993.883L27 15a1 1 0 01-.883.993L26 16h-4v2c0 .69-.088 1.361-.252 2H24a1 1 0 01.117 1.993L24 22h-3l-.07-.002A7.995 7.995 0 0114 26a7.997 7.997 0 01-6.932-4.004L7 22H4a1 1 0 01-.117-1.993L4 20h2.252A8.014 8.014 0 016 18v-2H2a1 1 0 01-.993-.883L1 15a1 1 0 01.883-.993L2 14h4v-2c0-.69.088-1.361.252-2H4a1 1 0 01-.117-1.993L4 8h3l.069.002a8.035 8.035 0 012.016-2.315l-1.32-1.231a1 1 0 011.267-1.543l.097.08 1.755 1.636A7.976 7.976 0 0114 4c1.11 0 2.167.226 3.128.635l1.76-1.642a1 1 0 011.413.05zM14 6a6 6 0 00-6 6v6a6 6 0 1012 0v-6a6 6 0 00-6-6zm1 11a1 1 0 010 2h-2a1 1 0 010-2h2zm-2-6h2a1 1 0 01.117 1.993L15 13h-2a1 1 0 01-.117-1.993L13 11h2-2z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})