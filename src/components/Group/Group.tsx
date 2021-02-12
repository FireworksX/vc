import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import classNames from '@/lib/classNames'
import Separator from '@/components/Separator'

export default Vue.extend({
  name: 'vc-Group',
  components: {
    Separator
  },
  props: {
    separator: { type: String, default: 'auto' }
  },
  computed: {
    classNames(): any {
      return getClassName('vc-Group')
    }
  },
  render(h: any) {
    return (
      <section class={this.classNames}>
        {this.$slots.header}
        {this.$slots.default && <div class='vc-Group__content'>{this.$slots.default}</div>}
        {this.$slots.description && <div class='vc-Group__description'>{this.$slots.description}</div>}
        {this.separator !== 'hide' && (
          <separator
            class={classNames('vc-Group__separator', {
              'vc-Group__separator--force': this.separator === 'show'
            })}
          />
        )}
      </section>
    )
  }
})
