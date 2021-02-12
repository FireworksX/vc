import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './Radio.sass'

export default Vue.extend({
  name: 'vc-Radio',
  props: {
    description: {
      required: false,
      type: String
    },
    value: {
      required: true
    },
    label: {
      type: String
    }
  },
  computed: {
    classNames(): string {
      return getClassName('vc-Radio')
    }
  },
  render(h: any) {
    const { default: children } = this.$slots
    const { description } = this.$props
    return (
      <label role='button' class={this.classNames}>
        <input
          type='radio'
          class='vc-Radio__input'
          checked={this.value === this.label}
          onChange={() => this.$emit('input', this.label)}
        />
        <div class='vc-Radio__container'>
          <div class='vc-Radio__icon' />
          <div class='vc-Radio__content'>
            {children}
            {description && <div class='vc-Radio__description'>{description}</div>}
          </div>
        </div>
      </label>
    )
  }
})
