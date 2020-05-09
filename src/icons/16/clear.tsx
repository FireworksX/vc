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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="clear_16">
                    <path
                        d="M6.729 8.002L4.263 10.47a.9.9 0 101.273 1.273L8 9.275l2.465 2.468a.9.9 0 101.272-1.273L9.273 8.002l2.465-2.469a.9.9 0 10-1.272-1.273L8 6.728 5.536 4.26a.9.9 0 00-1.273 1.273l2.466 2.469zM8 16A8 8 0 118 0a8 8 0 010 16z"
                        fill="currentColor"
                        fill-rule="evenodd"
                    ></path>
                </svg>
            </icon-wrapper>
        )
    },
})
