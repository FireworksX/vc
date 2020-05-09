import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

export default Vue.extend({
    name: 'icon-24-dismiss',
    components: {
        IconWrapper,
    },
    render(h: any) {
        return (
            <icon-wrapper size={24}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="dismiss_24">
                    <g fill="currentColor" fill-rule="nonzero">
                        <circle opacity=".12" cx="12" cy="12" r="12"></circle>
                        <path d="M12 10.727l3.464-3.463a.9.9 0 111.272 1.272L13.273 12l3.463 3.464a.9.9 0 11-1.272 1.272L12 13.273l-3.464 3.463a.9.9 0 11-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 011.272-1.272L12 10.727z"></path>
                    </g>
                </svg>
            </icon-wrapper>
        )
    },
})
