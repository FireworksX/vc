import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'

interface Props {
    activeStory: string
}

interface Data {
    isVisible: boolean
}

interface Computed {
    classNames: string
}

interface Methods {
    getViewId(node: VNode): string | undefined
}

export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'vc-Epic',
    props: {
        activeStory: { type: String, required: true },
    },
    computed: {
        classNames(): string {
            return getClassName('vc-Epic')
        },
    },
    methods: {
        getViewId(node: VNode): string | undefined {
            if (node.data !== undefined && node.data.attrs !== undefined) {
                return node.data.attrs.name
            }
            return undefined
        },
    },
    render(h: any) {
        const views = this.$slots.default
        return (
            <div class={this.classNames}>
                {views !== undefined &&
                    views.find(view => this.getViewId(view) === this.activeStory)}
                {this.$slots.tabbar}
            </div>
        )
    },
})
