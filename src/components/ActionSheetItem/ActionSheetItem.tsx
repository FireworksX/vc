import Vue, { CreateElement, VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-ActionSheetItem',
  props: {
    mode: { type: String, default: 'default' },
    isLast: { type: Boolean, default: false },
    autoclose: { type: Boolean, default: false }
  },
  computed: {
    classNames(): any[] {
      return [
        getClassName('vc-ActionSheetItem'),
        `vc-ActionSheetItem--${this.mode}`,
        {
          'vc-ActionSheetItem--last': this.isLast
        }
      ]
    },
    nativeOnClose(): Function {
      if (!Array.isArray(this.$listeners.click) && this.$listeners.click !== undefined) {
        return this.$listeners.click
      }
      return () => undefined
    }
  },
  render(h: CreateElement): VNode {
    return (
      <div class={this.classNames} onClick={this.nativeOnClose}>
        {this.$slots.before !== undefined && <div class='vc-ActionSheetItem__before'>{this.$slots.before}</div>}
        <div class='vc-ActionSheetItem__container'>
          <div class='vc-ActionSheetItem__content'>
            <div class='vc-ActionSheetItem__children'>{this.$slots.default}</div>
          </div>
        </div>
      </div>
    )
  }
})
