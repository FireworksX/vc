import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-List',
  computed: {
    classNames(): string {
      return getClassName('vc-List')
    }
  },
  render(h: any) {
    const children = this.$slots.default
    return <vc-div class={[getClassName('vc-Footer')]}>{children}</vc-div>
  }
})
