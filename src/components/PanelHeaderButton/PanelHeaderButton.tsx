import Vue from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-PanelHeaderButton',
  computed: {
    classNames(): string {
      return getClassName('vc-PanelHeaderButton')
    }
  },
  render(h: any) {
    const clickCb =
      this.$listeners.click ||
      function() {
        return undefined
      }
    return (
      <button class={this.classNames} onClick={clickCb}>
        {this.$slots.default}
      </button>
    )
  }
})
