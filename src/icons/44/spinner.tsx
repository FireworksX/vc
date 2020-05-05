import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

export default Vue.extend({
    name: 'icon-24-spinner',
    components: {
        IconWrapper,
    },
    render(h: any) {
        return (
            <icon-wrapper size={44}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44">
                    <path
                        d="M22 44a1.5 1.5 0 010-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 11-2.825 1.01A21.964 21.964 0 010 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22z"
                        fill="currentColor"
                        fill-rule="nonzero"
                    ></path>
                </svg>
            </icon-wrapper>
        )
    },
})
