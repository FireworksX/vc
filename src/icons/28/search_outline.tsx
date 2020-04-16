import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

export default Vue.extend({
    name: 'icon-28-search_outline',
    render(h: any) {
        return (
            <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="search_outline_28">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h28v28H0z"></path>
                        <path
                            d="M13 4.5a8.5 8.5 0 016.676 13.762l4.531 4.53a1 1 0 01-1.414 1.415l-4.53-4.531A8.5 8.5 0 1113 4.5zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
                            fill="currentColor"
                            fill-rule="nonzero"
                        ></path>
                    </g>
                </svg>
            </IconWrapper>
        )
    },
})
