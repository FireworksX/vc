import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
// @ts-ignore
import Spinner16 from '@fireworksx/vc-icons/dist/16/spinner'
// @ts-ignore
import Spinner24 from '@fireworksx/vc-icons/dist/24/spinner'
// @ts-ignore
import Spinner32 from '@fireworksx/vc-icons/dist/32/spinner'
// @ts-ignore
import Spinner44 from '@fireworksx/vc-icons/dist/44/spinner'

export default Vue.extend<any, any, any, { size: string }>({
  name: 'vc-Spinner',
  props: {
    size: { type: String, default: 'regular' }
  },
  computed: {
    classNames(): any {
      return getClassName('vc-Spinner')
    }
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
        <div class='vc-Spinner__self'>{spinnerComponent}</div>
      </div>
    )
  }
})
