import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-CellButton',
  props: {
    mode: { type: String, default: 'primary' },
    align: { type: String, default: 'left' },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    classNames(): any {
      return [getClassName('vc-CellButton'), `vc-CellButton--lvl-${this.mode}`, `vc-CellButton--aln-${this.align}`]
    }
  },
  render(h: any) {
    let clickFn = this.$listeners.click

    if (clickFn === undefined) {
      clickFn = () => undefined
    }

    return (
      <button class={this.classNames} disabled={this.disabled} onClick={clickFn}>
        <div class='vc-CellButton__in'>
          {this.$slots.before && <div class='vc-CellButton__before'>{this.$slots.before}</div>}
          {this.$slots.default && <div class='vc-CellButton__content'>{this.$slots.default}</div>}
        </div>
      </button>
    )
  }
})
