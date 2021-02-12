import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import classNames from '@/lib/classNames'

export default Vue.extend({
  name: 'vc-Placeholder',
  props: {
    stretched: {
      required: false,
      type: Boolean
    },
    className: {
      required: false,
      type: String
    }
  },
  computed: {
    classNames(): string {
      return getClassName('vc-Placeholder')
    }
  },
  render(h: any) {
    const { stretched, className } = this.$props
    const { icon, header, default: children, action } = this.$slots
    return (
      <div class={[this.classNames, `${stretched ? 'vc-Placeholder--stretched' : ''}`, className]}>
        <div class='vc-Placeholder__in'>
          {icon && <div class='vc-Placeholder__icon'>{icon}</div>}
          {header && <div class='vc-Placeholder__header'>{header}</div>}
          {children && <div class='vc-Placeholder__text'>{children}</div>}
          {action && <div class='vc-Placeholder__action'>{action}</div>}
        </div>
      </div>
    )
  }
})
