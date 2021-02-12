import Vue from 'vue'
import getClassName from '@/helpers/getClassName'

export default Vue.extend({
  name: 'vc-PanelHeaderContent',
  props: {
    status: { type: String }
  },
  computed: {
    classNames(): string {
      return getClassName('vc-PanelHeaderContent')
    }
  },
  render(h: any) {
    const { before, aside } = this.$slots

    return (
      <div class={this.classNames}>
        {before && <div class='vc-PanelHeaderContent__before'>{before}</div>}
        <div class='vc-PanelHeaderContent__in'>
          {this.status && <div class='vc-PanelHeaderContent__status'>{this.status}</div>}
          <div class='vc-PanelHeaderContent__children'>
            <span class='vc-PanelHeaderContent__children-in'>{this.$slots.default}</span>
            {aside && <div class='vc-PanelHeaderContent__aside'>{aside}</div>}
          </div>
          <div class='vc-PanelHeaderContent__width'></div>
        </div>
      </div>
    )
  }
})
