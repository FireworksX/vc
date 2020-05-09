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
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="document_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z"></path><path d="M15.205 2.122c.406.093.772.245 1.124.466.356.222.63.456 1.192 1.02l4.872 4.87c.563.564.797.837 1.02 1.193.22.352.372.718.465 1.124.094.409.122.767.122 1.564v6.872c0 1.98-.185 2.94-.72 3.939a5.089 5.089 0 01-2.11 2.11c-.999.535-1.959.72-3.939.72H10.77c-1.98 0-2.94-.185-3.939-.72a5.089 5.089 0 01-2.11-2.11C4.184 22.17 4 21.21 4 19.23V8.066c0-1.285.232-2.324.72-3.236a5.089 5.089 0 012.11-2.11C7.742 2.231 8.781 2 10.066 2h3.575c.797 0 1.155.028 1.564.122zm-1.379 1.879L10.066 4c-.972 0-1.688.16-2.292.483a3.09 3.09 0 00-1.291 1.29C6.16 6.379 6 7.095 6 8.067v11.165c0 1.678.125 2.327.483 2.995.299.56.732.992 1.29 1.291.67.358 1.318.483 2.996.483h6.462c1.678 0 2.327-.125 2.995-.483a3.09 3.09 0 001.291-1.29c.358-.67.483-1.318.483-2.996V12.36c0-.137 0-.256-.002-.36L16.5 12A2.5 2.5 0 0114 9.5l.001-5.498-.175-.001zm2.281 1.02L16 4.915V9.5a.5.5 0 00.41.492l.09.008 4.587.002-.108-.11-4.872-4.87z" fill="currentColor" fill-rule="nonzero"></path></g></svg>            </IconWrapper>
        )
    },
})