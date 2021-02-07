import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import './ModalCard.sass'
import classNames from '@/lib/classNames'
import Button from '@/components/Button'
import { OS, platform } from '@/lib/platform'
import PanelHeaderButton from '@/components/PanelHeaderButton'
// @ts-ignore
import Icon24Dismiss from '@fireworksx/vc-icons/dist/24/dismiss'

export default Vue.extend({
    name: 'vc-ModalCard',
    components: {
        'vc-button': Button,
        'vc-panel-headerButton': PanelHeaderButton,
        Icon24Dismiss,
    },
    props: {
        actions: { type: Array, default: () => [] },
        actionsLayout: { type: String, default: 'vertical' },
        persistent: { type: Boolean, default: false },
    },
    computed: {
        classNames(): any {
            return getClassName('vc-ModalCard')
        },
    },
    render(h: any) {
        const { icon, header, caption } = this.$slots

        let onClose: any = () => undefined

        if (this.$listeners.close && !this.persistent) {
            if (Array.isArray(this.$listeners.close)) {
                ;[onClose] = this.$listeners.close
            } else {
                onClose = this.$listeners.close
            }
        }

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
                        {platform() === OS.IOS && !this.persistent && (
                            <vc-panel-header-button class="vc-ModalCard__dismiss" onClick={onClose}>
                                <icon-24-dismiss />
                            </vc-panel-header-button>
                        )}
                    </div>
                </div>
            </div>
        )
    },
})
