import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-Switch',
  props: {
    value: { type: Boolean, required: true }
  },
  computed: {
    classNames(): any {
      return getClassName('vc-Switch')
    }
  },
  methods: {
    changeValue() {
      const newValue = !this.value
      this.$emit('input', newValue)
    }
  },
  render(h: any) {
    return (
      <label class={this.classNames}>
        <input type='checkbox' checked={this.value} onChange={this.changeValue} class='vc-Switch__self' />
        <span class='vc-Switch__pseudo' />
      </label>
    )
  }
})
