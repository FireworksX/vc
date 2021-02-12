import Vue from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-HorizontalScroll',
  computed: {
    classNames(): string {
      return getClassName('vc-HorizontalScroll')
    }
  },
  render(h: any) {
    return (
      <div class={this.classNames}>
        <div class='vc-HorizontalScroll__in'>{this.$slots.default}</div>
      </div>
    )
  }
})
