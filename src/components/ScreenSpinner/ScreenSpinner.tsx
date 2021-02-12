import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import PopoutWrapper from '@/components/PopoutWrapper'
import Spinner from '@/components/Spinner'

export default Vue.extend({
  name: 'vc-ScreenSpinner',
  components: {
    PopoutWrapper,
    Spinner
  },
  computed: {
    classNames(): any {
      return getClassName('vc-ScreenSpinner')
    }
  },
  render(h: any) {
    return (
      <div class={this.classNames}>
        <popout-wrapper>
          <div class='vc-ScreenSpinner__container'>
            <spinner size='large' />
          </div>
        </popout-wrapper>
      </div>
    )
  }
})
