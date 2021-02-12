import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { FormStatusModes } from './helpers'

export default Vue.extend({
  name: 'vc-FormStatus',
  props: {
    mode: {
      type: String as () => FormStatusModes,
      default: 'default'
    },
    header: {
      type: String
    },
    className: {
      type: String
    }
  },
  data() {
    return {
      views: [],
      viewStore: [],
      isBack: false
    }
  },
  computed: {
    classNames(): Array<string> {
      return [getClassName('vc-FormStatus'), this.className]
    }
  },
  render(h: any) {
    const { default: children } = this.$slots
    const { mode, header } = this.$props

    return (
      <div class={[this.classNames, mode ? `vc-FormStatus--${mode}` : '']}>
        {header && <div class='vc-FormStatus__header'>{header}</div>}
        {children && <div class='vc-FormStatus__content'>{children}</div>}
      </div>
    )
  }
})
