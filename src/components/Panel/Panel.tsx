import Vue from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-Panel',
  computed: {
    classNames(): string {
      return getClassName('vc-Panel')
    }
  },
  render(h: any) {
    return (
      <div class={this.classNames}>
        <div class='vc-Panel__in'>{this.$slots.default}</div>
      </div>
    )
  }
})
