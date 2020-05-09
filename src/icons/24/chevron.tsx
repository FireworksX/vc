import Vue from 'vue'
import IconWrapper from '../icon-wrapper'

export default Vue.extend({
    name: 'icon-24-chevron',
    components: {
        IconWrapper,
    },
    render(h: any) {
        return (
            <icon-wrapper size={24} name="chevron">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h16v24H0z"></path>
                        <path
                            d="M4.706 7.706a1 1 0 010-1.412l.088-.088a.997.997 0 011.414.002l5.084 5.084a.998.998 0 010 1.416l-5.084 5.084a1.002 1.002 0 01-1.414.002l-.088-.088a.995.995 0 010-1.412L9 12 4.706 7.706z"
                            fill="currentColor"
                        ></path>
                    </g>
                </svg>
            </icon-wrapper>
        )
    },
})
