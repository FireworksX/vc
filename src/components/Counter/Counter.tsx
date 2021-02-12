import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { CounterSize, CounterModes } from '@/components/Counter/helpers'

export default Vue.extend({
  name: 'vc-Counter',
  props: {
    size: {
      type: String as () => CounterSize,
      default: 'm'
    },
    mode: {
      type: String as () => CounterModes,
      default: 'secondary'
    }
  },
  computed: {
    classNames(): string {
      return getClassName('vc-Counter')
    }
  },
  render(h: any) {
    const { size, mode } = this.$props
    const { default: children } = this.$slots
    return (
      <div class={[this.classNames, `vc-Counter--${mode}`, `vc-Counter--s-${size}`]}>
        <div class='vc-Counter__in'>{children}</div>
      </div>
    )
  }
})
