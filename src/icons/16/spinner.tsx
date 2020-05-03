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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="spinner_16">
                    <path
                        d="M8 16a1 1 0 110-2 6 6 0 10-5.7-4.12 1 1 0 11-1.9.626A8 8 0 118 16z"
                        fill="currentColor"
                        fill-rule="nonzero"
                    ></path>
                </svg>
            </icon-wrapper>
        )
    },
})
