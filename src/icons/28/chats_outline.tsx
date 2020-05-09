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

export default Vue.extend<Data, any, Computed, Props>({
    name: 'icon-28-chats_outline',
    components: {
        IconWrapper,
    },
    render(h: any) {
        return (
            <icon-wrapper>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="chats_outline_28">
                    <g fill-rule="nonzero" fill="none">
                        <path d="M0 0h28v28H0z"></path>
                        <path
                            d="M23.706 9.662C25.171 11.114 26 12.998 26 15a7.25 7.25 0 01-.96 3.599c.101.603.393 1.519.876 2.716l.258.624.057.168.025.098a1.4 1.4 0 01-1.446 1.675c-1.908-.1-3.43-.566-4.54-1.424A9.99 9.99 0 0117 23a9.982 9.982 0 01-3.332-.566 1 1 0 01.667-1.885c.838.296 1.738.451 2.665.451a7.923 7.923 0 003.087-.615 1 1 0 011.1.218c.55.555 1.371.941 2.481 1.14l.284.047c-.574-1.456-.888-2.555-.943-3.343a1 1 0 01.153-.604A5.279 5.279 0 0024 15c0-1.454-.607-2.832-1.702-3.918a1 1 0 111.408-1.42zM11 3c4.943 0 9 3.55 9 8s-4.057 8-9 8a9.99 9.99 0 01-3.27-.544c-1.11.858-2.632 1.323-4.54 1.424a1.4 1.4 0 01-1.446-1.675l.025-.098.057-.168.133-.319c.516-1.244.84-2.209.972-2.864l.03-.157-.151-.279A7.229 7.229 0 012 11c0-4.45 4.057-8 9-8zm0 2c-3.893 0-7 2.718-7 6 0 1.007.29 1.976.838 2.843a1 1 0 01.153.604c-.05.732-.325 1.732-.824 3.036l-.119.307.284-.046c1.11-.2 1.932-.586 2.481-1.141a1 1 0 011.1-.218c.952.403 2 .615 3.087.615 3.893 0 7-2.718 7-6s-3.107-6-7-6z"
                            fill="currentColor"
                        ></path>
                    </g>
                </svg>{' '}
            </icon-wrapper>
        )
    },
})
