import Vue, { CreateElement, VNode } from 'vue'
import PopoutWrapper from '@/components/PopoutWrapper/PopoutWrapper'
import getClassName from '@/helpers/getClassName'
import waitTransitionFinish from '@/helpers/waitTransitionFinish'

export default Vue.extend({
    name: 'vc-ActionSheet',
    components: { PopoutWrapper },
    computed: {
        classNames(): any[] {
            return [
                getClassName('vc-ActionSheet'),
                {
                    'vc-ActionSheet--closing': this.closing,
                },
            ]
        },
        nativeOnClose(): Function {
            if (!Array.isArray(this.$listeners.close)) {
                return this.$listeners.close
            }
            return this.$listeners.close[0]
        },
    },
    data() {
        return {
            closing: false,
            itemClicked: false,
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
        isItemLast(index: number): boolean {
            const childrenArray = this.$slots.default || []
            const lastElement = childrenArray[childrenArray.length - 1]

            if (index === childrenArray.length - 1) {
                return true
            }
            return !!(
                index === childrenArray.length - 2 && this.getModeByNode(lastElement) === 'cancel'
            )
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
        /**
         * @description Если в шаблоне Vue передать props autoclose не в формате
         * :autoclose="true", а просто флагом, то в VNode будет лежать
         * autoclose с пустой строкой
         * @param param
         */
        detectLineParam(param: any): boolean {
            const paramType = typeof param
            if (paramType === 'boolean') {
                return param
            }
            if (paramType === 'string') {
                return param.length === 0
            }
            return false
        },
    },
    render(h: CreateElement): VNode {
        const defaultSlots = this.$slots.default || []
        const parsedNodes = defaultSlots.map((node: VNode, index: number) => {
            const newNode = { ...node }
            if (newNode.componentOptions !== undefined) {
                const props: any = { ...newNode.componentOptions.propsData }
                newNode.componentOptions.propsData = {
                    ...props,
                    isLast: this.isItemLast(index),
                    autoclose: this.detectLineParam(props.autoclose),
                }

                const listeners: any = { ...newNode.componentOptions.listeners }
                newNode.componentOptions.listeners = {
                    ...listeners,
                    click: () => {
                        this.onClickItem(listeners.click, this.detectLineParam(props.autoclose))
                    },
                }
            }
            return newNode
        })

        return (
            <popout-wrapper onClick={this.onClose} align-y="bottom" closing={this.closing}>
                <div class={this.classNames}>{parsedNodes}</div>
            </popout-wrapper>
        )
    },
})
