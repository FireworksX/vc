import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

export default Vue.extend({
    name: 'icon-16-spinner',
    components: {
        IconWrapper,
    },
    render(h: any) {
        return (
            <icon-wrapper size={16}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="search_outline_16">
                    <g fill="none" fill-rule="evenodd" opacity=".92">
                        <path opacity=".1" d="M0 0h16v16H0z"></path>
                        <path
                            d="M9.823 10.884a5.5 5.5 0 111.06-1.06l3.896 3.9a.75.75 0 01-1.061 1.06l-3.895-3.9zM6.5 10.5a4 4 0 100-8 4 4 0 000 8z"
                            fill="currentColor"
                            fill-rule="nonzero"
                        ></path>
                    </g>
                </svg>
            </icon-wrapper>
        )
    },
})
