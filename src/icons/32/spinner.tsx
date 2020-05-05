import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

export default Vue.extend({
    name: 'icon-24-spinner',
    components: {
        IconWrapper,
    },
    render(h: any) {
        return (
            <icon-wrapper size={32}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32">
                    <path
                        d="M16 32a1.5 1.5 0 010-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 11.986 21.54 15.97 15.97 0 010 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"
                        fill="currentColor"
                        fill-rule="nonzero"
                    ></path>
                </svg>
            </icon-wrapper>
        )
    },
})
