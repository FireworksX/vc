import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import { canUseDOM } from '@/lib/dom'

export default Vue.extend({
  name: 'vc-ModalPageHeader',
  props: {
    noShadow: { type: Boolean, default: false }
  },
  computed: {
    classNames(): any {
      return [getClassName('vc-ModalPageHeader')]
    }
  },
  render(h: any) {
    const { left, right } = this.$slots
    const isPrimitive = typeof this.$slots.default === 'string' || typeof this.$slots.default === 'number'

    return (
      <div class={this.classNames}>
        <div class='vc-ModalPageHeader__in'>
          <div class='vc-ModalPageHeader__left'>{left}</div>

          <div class='vc-ModalPageHeader__content'>
            <div class='vc-ModalPageHeader__content-in'>
              {isPrimitive ? <span>{this.$slots.default}</span> : this.$slots.default}
            </div>
          </div>

          <div class='vc-ModalPageHeader__right'>{right}</div>
        </div>

        {!this.noShadow && <div class='vc-ModalPageHeader__shadow' />}
      </div>
    )
  }
})
