import Vue, { CreateElement, VNode } from 'vue'
import PopoutWrapper from '@/components/PopoutWrapper/PopoutWrapper'
import getClassName from '@/helpers/getClassName'
import waitTransitionFinish from '@/helpers/waitTransitionFinish'

interface PropAction {
  title: string
  action?(): void
  autoclose?: boolean
  mode: 'cancel' | 'destructive' | 'default'
}

interface Props {
  actions?: PropAction[]
  actionsLayout?: 'vertical' | 'horizontal'
}

export default Vue.extend<any, any, any, Props>({
  name: 'vc-Alert',
  components: { PopoutWrapper },
  props: {
    actions: { type: Array, default: () => [] },
    actionsLayout: { default: 'vertical' }
  },
  computed: {
    classNames(): any[] {
      return [
        getClassName('vc-Alert'),
        {
          'vc-Alert--closing': this.closing,
          'vc-Alert--v': this.actionsLayout === 'vertical',
          'vc-Alert--h': this.actionsLayout === 'horizontal'
        }
      ]
    },
    nativeOnClose(): Function {
      console.log(this.$listeners.onClose)
      if (!Array.isArray(this.$listeners.onClose)) {
        return this.$listeners.onClose
      }
      return this.$listeners.onClose[0]
    }
  },
  data() {
    return {
      closing: false
    }
  },
  methods: {
    getModeByNode(node: VNode): string {
      if (node !== undefined && node.componentOptions !== undefined && node.componentOptions.propsData !== undefined) {
        const nodeProps: any = node.componentOptions.propsData
        return nodeProps.mode
      }

      return 'default'
    },

    getOnCloseFn() {
      if (!Array.isArray(this.$listeners.close)) {
        return this.$listeners.close
      }
      if (this.$listeners.close.length > 0) {
        return this.$listeners.close[0]
      }
      return () => undefined
    },

    onClose() {
      this.closing = true

      waitTransitionFinish(() => {
        this.closing = false
        this.getOnCloseFn()()
      })
    },
    onClickItem(clickHandler: Function, autoclose = false) {
      if (autoclose) {
        this.closing = true
        waitTransitionFinish(() => {
          this.getOnCloseFn()()

          if (clickHandler !== undefined) {
            clickHandler()
          }
        })
      } else if (clickHandler !== undefined) {
        clickHandler()
      }
    },
    getActionClass(action: PropAction) {
      return ['vc-Alert__btn', `vc-Alert__btn--${action.mode}`]
    }
  },
  render(h: CreateElement): VNode {
    return (
      <popout-wrapper onClick={this.onClose} align-x='center' closing={this.closing}>
        <div class={this.classNames}>
          <div class='vc-Alert__content'>{this.$slots.default}</div>
          <div class='vc-Alert__footer'>
            {this.actions.map((action: PropAction, index: number) => {
              return (
                <div
                  key={`alert-action-${index}`}
                  class={this.getActionClass(action)}
                  onClick={() => this.onClickItem(action.action, action.autoclose)}
                >
                  {action.title}
                </div>
              )
            })}
          </div>
        </div>
      </popout-wrapper>
    )
  }
})
