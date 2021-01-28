import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import waitTransitionFinish from '@/helpers/waitTransitionFinish'

interface Data {
    visibleViews: string[]
}

export default Vue.extend<Data, any, any, any>({
    name: 'vc-Root',
    props: {
        activeView: { type: String, required: true },
    },
    watch: {
        activeView(newVal, oldVal) {
            const foundInHistoryIndex = this.transitionsHistory.findIndex(
                (i: string) => i === newVal
            )
            if (foundInHistoryIndex !== -1) {
                this.isBack = true
                this.transitionsHistory = this.transitionsHistory.slice(0, foundInHistoryIndex + 1)
            } else {
                this.transitionsHistory.push(newVal)
                this.isBack = false
            }
            this.visibleViews = [newVal, oldVal]
            this.transition = true
            this.proxyActiveView = undefined
            this.nextView = newVal
            this.prevView = oldVal

            waitTransitionFinish(() => {
                this.proxyActiveView = newVal
                this.visibleViews = [newVal]
                this.transition = false
                this.isBack = undefined
                this.prevView = undefined
                this.nextView = undefined
            })
        },
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
            transitionsHistory: [],
        }
    },
    created() {
        this.transitionsHistory.push(this.activeView)
    },
    computed: {
        classNames(): any[] {
            return [getClassName('vc-Root'), { 'vc-Root--transition': this.transition }]
        },
    },
    methods: {
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
                    'vc-Root__view--hide-back':
                        this.getViewId(view) === this.prevView && this.isBack,
                    'vc-Root__view--hide-forward':
                        this.getViewId(view) === this.prevView && !this.isBack,
                    'vc-Root__view--show-back':
                        this.getViewId(view) === this.nextView && this.isBack,
                    'vc-Root__view--show-forward':
                        this.getViewId(view) === this.nextView && !this.isBack,
                    'vc-Root__view--active': this.getViewId(view) === this.proxyActiveView,
                },
            ]
        },
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
                            <div key={this.getViewId(view)} class={this.calcViewClass(view)}>
                                {view}
                            </div>
                        )
                    })}
            </div>
        )
    },
})
