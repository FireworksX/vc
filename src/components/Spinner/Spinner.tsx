import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Spinner16 from '../../icons/16/spinner'
import Spinner24 from '../../icons/24/spinner'
import Spinner32 from '../../icons/32/spinner'
import Spinner44 from '../../icons/44/spinner'
import './Spinner.sass'

export default Vue.extend<any, any, any, { size: string }>({
    name: 'vc-Spinner',
    props: {
        size: { type: String, default: 'regular' },
    },
    computed: {
        classNames(): any {
            return getClassName('vc-Spinner')
        },
    },
    render(h: any) {
        let spinnerComponent = <Spinner24 />

        if (this.size === 'small') {
            spinnerComponent = <Spinner16 />
        }

        if (this.size === 'medium') {
            spinnerComponent = <Spinner32 />
        }

        if (this.size === 'large') {
            spinnerComponent = <Spinner44 />
        }

        return (
            <div class={this.classNames}>
                <div class="vc-Spinner__self">{spinnerComponent}</div>
            </div>
        )
    },
})
