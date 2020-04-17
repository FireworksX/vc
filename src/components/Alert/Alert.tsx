import Vue, { CreateElement, VNode } from 'vue'
import PopoutWrapper from '@/components/PopoutWrapper/PopoutWrapper'
import getClassName from '@/helpers/getClassName'
import './Alert.sass'
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
        actionsLayout: { default: 'vertical' },
    },
    computed: {
        classNames(): any[] {
            return [
                getClassName('vc-Alert'),
                {
                    'vc-Alert--closing': this.closing,
                    'vc-Alert--v': this.actionsLayout === 'vertical',
                    'vc-Alert--h': this.actionsLayout === 'horizontal',
                },
            ]
        },
        nativeOnClose(): Function {
            if (!Array.isArray(this.$listeners.onClose)) {
                return this.$listeners.onClose
            }
            return this.$listeners.onClose[0]
        },
    },
    data() {
        return {
            closing: false,
        }
    },
    methods: {
        getModeByNode(node: VNode): string {
            if (
                node !== undefined &&
                node.componentOptions !== undefined &&
                node.componentOptions.propsData !== undefined
            ) {
                const nodeProps: any = node.componentOptions.propsData
                return nodeProps.mode
            }

            return 'default'
        },
        onClose() {
            this.closing = true

            waitTransitionFinish(() => {
                this.closing = false

                this.nativeOnClose()
            })
        },
        onClickItem(clickHandler: Function, autoclose = false) {
            if (autoclose) {
                this.closing = true
                waitTransitionFinish(() => {
                    this.nativeOnClose()

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
        },
    },
    render(h: CreateElement): VNode {
        return (
            <popout-wrapper onClick={this.onClose} align-x="center" closing={this.closing}>
                <div class={this.classNames}>
                    <div class="vc-Alert__content">{this.$slots.default}</div>
                    <div class="vc-Alert__footer">
                        {this.actions.map((action: PropAction, index: number) => {
                            return (
                                <div
                                    key={`alert-action-${index}`}
                                    class={this.getActionClass(action)}
                                >
                                    {action.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </popout-wrapper>
        )
    },
})
