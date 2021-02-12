import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-FixedLayout',
  props: {
    filled: { type: Boolean, default: false },
    vertical: { type: String, default: 'bottom' }
  },
  computed: {
    classNames(): any {
      return [
        getClassName('vc-FixedLayout'),
        {
          'vc-FixedLayout--filled': this.filled
        },
        `vc-FixedLayout--${this.vertical}`
      ]
    }
  },
  render(h: any) {
    return (
      <div class={this.classNames}>
        <div class='vc-FixedLayout__in'>{this.$slots.default}</div>
      </div>
    )
  }
})
