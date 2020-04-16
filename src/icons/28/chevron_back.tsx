import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

export default Vue.extend({
    name: 'icon-28-chevron-back',
    render(h: any) {
        return (
            <IconWrapper name="chevron_back_28">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 28" id="chevron_back_28">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h20v28H0z"></path>
                        <path
                            d="M4.56 12.94L13 4.5a1.414 1.414 0 0 1 2 2L7.5 14l7.5 7.5a1.414 1.414 0 0 1-2 2l-8.44-8.44a1.5 1.5 0 0 1 0-2.12z"
                            fill="currentColor"
                        ></path>
                    </g>
                </svg>
            </IconWrapper>
        )
    },
})
