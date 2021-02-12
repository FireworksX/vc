import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { FormFieldStatuses } from './helpers'

export default Vue.extend({
  name: 'vc-FormField',
  props: {
    tag: {
      required: false,
      type: String,
      default: 'div'
    },
    className: {
      required: false,
      type: String
    },
    status: {
      required: false,
      type: String as () => FormFieldStatuses,
      default: 'default'
    },
    top: {
      required: false,
      type: String
    },
    bottom: {
      required: false,
      type: String
    }
  },
  data: () => ({}),
  computed: {
    classNames(): string {
      return getClassName('vc-FormField')
    }
  },
  methods: {},
  render(h: any) {
    const { tag, status } = this.$props
    const { default: children } = this.$slots
    return (
      <tag class={[this.classNames, status !== 'default' ? `vc-FormField--s-${status}` : '']}>
        {children}
        <div class='vc-FormField__border' />
      </tag>
    )
  }
})
