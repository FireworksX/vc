import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-Div',
  computed: {
    classNames(): any {
      return getClassName('vc-Div')
    }
  },
  render(h: any) {
    return <div class={this.classNames}>{this.$slots.default}</div>
  }
})
