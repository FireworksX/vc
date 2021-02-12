import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-InfoRow',
  props: {
    header: { type: String }
  },
  computed: {
    classNames(): any {
      return getClassName('vc-InfoRow')
    }
  },
  render(h: any) {
    return (
      <div class={this.classNames}>
        {this.header && <div class='vc-InfoRow__header'>{this.header}</div>}
        <div class='vc-InfoRow__content'>{this.$slots.default}</div>
      </div>
    )
  }
})
