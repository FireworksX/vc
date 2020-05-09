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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="download_cloud_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M14 11.125c.446 0 .814.334.868.765l.007.11v11.071l2.565-2.243a.875.875 0 011.206 1.262l-.086.082-4 3.5-.032.026a.868.868 0 01-.045.032l.077-.058a.88.88 0 01-.844.156 1.158 1.158 0 01-.143-.064.888.888 0 01-.133-.092l.077.058a.868.868 0 01-.045-.032l-.032-.026-4-3.5-.086-.082a.875.875 0 011.206-1.262l2.565 2.243V12c0-.483.392-.875.875-.875zM16.083 3a6.417 6.417 0 016.413 6.187l.004.213.066.036a4.75 4.75 0 012.429 3.93l.005.217c0 2.468-1.886 4.508-4.354 4.731l-.22.015L18 18.33a1 1 0 01-.117-1.993L18 16.33h2.38a2.75 2.75 0 00.762-5.348 1 1 0 01-.67-1.06 4.417 4.417 0 00-7.833-3.269 1 1 0 01-1.21.278 2.75 2.75 0 00-3.892 2.933 1 1 0 01-.667 1.113 2.751 2.751 0 00.712 5.351l.167.005 2.25-.001a1 1 0 01.118 1.993l-.116.007-2.251.001a4.75 4.75 0 01-2.301-8.906l.051-.028.005-.2a4.75 4.75 0 014.528-4.527l.217-.005c.357 0 .708.04 1.05.116l.272.071.034-.033a6.395 6.395 0 014.21-1.815L16.083 3z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})