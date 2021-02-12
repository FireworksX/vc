import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import waitTransitionFinish from '@/helpers/waitTransitionFinish'
import { canUseDOM } from '@/lib/dom'

interface Data {
  visibleViews: string[]
}

interface TransitionHistoryObject {
  name: string
  scrollPos: number
}

export default Vue.extend<Data, any, any, any>({
  name: 'vc-Root',
  props: {
    activeView: { type: String, required: true }
  },
  watch: {
    activeView(newVal, oldVal) {
      const foundInHistoryIndex: number = this.transitionsHistory.findIndex(
        (i: TransitionHistoryObject) => i.name === newVal
      )
      if (foundInHistoryIndex !== -1) {
        this.isBack = true
        this.transitionsHistory = this.transitionsHistory.slice(0, foundInHistoryIndex + 1)
      } else {
        this.transitionsHistory[this.transitionsHistory.length - 1].scrollPos = canUseDOM ? window.pageYOffset : 0
        this.transitionsHistory.push({
          name: newVal,
          scrollPos: 0
        })
        this.isBack = false
      }
      this.visibleViews = [newVal, oldVal]
      this.transition = true
      this.proxyActiveView = undefined
      this.nextView = newVal
      this.prevView = oldVal

      waitTransitionFinish(() => {
        const foundHistoryItem = this.transitionsHistory.find((i: any) => i.name === newVal)
        if (canUseDOM) {
          window.scrollTo({ top: this.isBack ? 0 : 0 })
        }
        this.proxyActiveView = newVal
        this.visibleViews = [newVal]
        this.transition = false
        this.isBack = undefined
        this.prevView = undefined
        this.nextView = undefined
        const changedCallback = this.getViewByName(newVal).componentOptions.listeners?.opened
        if (changedCallback) {
          changedCallback()
        }
      })
    }
  },
  data() {
    return {
      views: [],
      viewStore: [],
      isBack: undefined,
      visibleViews: [this.activeView],
      transition: false,
      firstView: this.activeView,
      proxyActiveView: undefined,
      prevView: undefined,
      nextView: undefined,
      transitionsHistory: []
    }
  },
  created() {
    this.transitionsHistory.push({ name: this.activeView, scrollPos: 0 })
  },
  computed: {
    classNames(): any[] {
      return [getClassName('vc-Root'), { 'vc-Root--transition': this.transition }]
    }
  },
  methods: {
    getViewByName(name: string): any {
      return this.$slots.default.find((node: VNode) => node.data?.attrs?.name === name)
    },
    getViewId(node: VNode): string | undefined {
      if (node.data !== undefined && node.data.attrs !== undefined) {
        return node.data.attrs.name
      }
      return undefined
    },
    calcViewClass(view: VNode) {
      return [
        `vc-Root__view`,
        {
          'vc-Root__view--hide-back': this.getViewId(view) === this.prevView && this.isBack,
          'vc-Root__view--hide-forward': this.getViewId(view) === this.prevView && !this.isBack,
          'vc-Root__view--show-back': this.getViewId(view) === this.nextView && this.isBack,
          'vc-Root__view--show-forward': this.getViewId(view) === this.nextView && !this.isBack,
          'vc-Root__view--active': this.getViewId(view) === this.proxyActiveView
        }
      ]
    }
  },
  render(h: any) {
    let views: VNode[] = []

    if (this.$slots.default !== undefined) {
      views = this.$slots.default.filter((node: VNode) => {
        const nodeId = this.getViewId(node)
        if (nodeId !== undefined) {
          return this.visibleViews.includes(nodeId)
        }
        return false
      })
    }

    return (
      <div class={this.classNames}>
        {views !== undefined &&
          views.map((view: any) => {
            return (
              <div key={this.getViewId(view)} class={this.calcViewClass(view)} ref='rootview'>
                {view}
              </div>
            )
          })}
      </div>
    )
  }
})
