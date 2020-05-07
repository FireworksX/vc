import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './ModalCard.sass'
import classNames from '@/lib/classNames'
import Button from '@/components/Button'

export default Vue.extend({
    name: 'vc-ModalCard',
    components: {
        'vc-button': Button,
    },
    props: {
        actions: { type: Array, default: () => [] },
        actionsLayout: { type: String, default: 'vertical' },
    },
    computed: {
        classNames(): any {
            return getClassName('vc-ModalCard')
        },
    },
    render(h: any) {
        const { icon, header, caption } = this.$slots
        return (
            <div class={this.classNames}>
                <div class="vc-ModalCard__in">
                    <div class="vc-ModalCard__container">
                        {icon && <div class="vc-ModalCard__icon">{icon}</div>}
                        {header && <div class="vc-ModalCard__title">{header}</div>}
                        {caption && <div class="vc-ModalCard__caption">{caption}</div>}

                        {this.$slots.default}

                        {this.actions.length > 0 && (
                            <div
                                class={classNames('vc-ModalCard__actions', {
                                    'vc-ModalCard__actions--v': this.actionsLayout === 'vertical',
                                })}
                            >
                                {this.actions.map(({ title, mode, action }: any, i: number) => (
                                    <vc-button size="xl" mode={mode} onClick={action}>
                                        {title}
                                    </vc-button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    },
})
