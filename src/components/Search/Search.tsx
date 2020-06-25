import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import FormField from '@/components/FormField/FormField'
// import searchOutline from '@/icons/16/search_outline'
// import clear from '@/icons/16/clear'

// @ts-ignore
import search from '@fireworksx/vc-icons/dist/16/search'
// @ts-ignore
import clear from '@fireworksx/vc-icons/dist/16/clear'

export default Vue.extend({
    name: 'vc-Search',
    components: {
        'vc-form-field': FormField,
        'vc-icon-search': search,
        'vc-icon-clear': clear,
    },
    props: {
        className: {
            required: false,
            type: String,
        },
        value: {
            required: true,
        },
    },
    data: () => ({
        height: 0,
        localValue: null,
        focused: false,
    }),
    methods: {
        onFocus(e: any) {
            this.focused = true
            const { focus }: any = this.$listeners
        },

        onBlur(e: any) {
            this.focused = false
            const { blur }: any = this.$listeners
        },

        onInput(e: any) {
            this.$emit('input', e.target.value)
        },

        onCancel() {
            this.$emit('input', null)
        },

        onIconClick(e: any) {
            const { iconClick }: any = this.$listeners
        },
        onIconCancelClick(e: any) {
            e.originalEvent.preventDefault()
            this.inputRef.focus()
            this.onCancel()
        },
    },
    computed: {
        classNames(): any {
            return [
                getClassName('vc-Search'),
                {
                    'vc-Search--focused': this.focused,
                    'vc-Search--has-value': !!this.value,
                    'vc-Search--has-after': !!this.$slots.after,
                    'vc-Search--has-icon': !!this.$slots.icon,
                },
            ]
        },
        inputRef(): any {
            return this.$refs.searchinput
        },
    },
    render(h: any) {
        const { className } = this.$props
        const { placeholder }: any = this.$attrs
        const { focus, blur, change, iconClick } = this.$listeners
        // TODO platform === IOS &&
        // TODO icons
        return (
            <div class={this.classNames}>
                <div class="vc-Search__in">
                    <div class="vc-Search__width" />
                    <div class="vc-Search__control">
                        <input
                            type="text"
                            class="vc-Search__input"
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            onInput={this.onInput}
                            value={this.value}
                            ref="searchinput"
                        />
                        {this.$slots.after && (
                            <div class="vc-Search__after-width">{this.$slots.after}</div>
                        )}

                        <div class="vc-Search__placeholder">
                            <div class="vc-Search__placeholder-in">
                                <vc-icon-search size={16} />
                                <div class="vc-Search__placeholder-text">
                                    {this.value ? '' : placeholder || 'Поиск'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vc-Search__after" onclick={this.onCancel}>
                        <div class="vc-Search__icons">
                            {this.$slots.icon && (
                                <div onclick={iconClick} class="vc-Search__icon">
                                    {this.$slots.icon}
                                </div>
                            )}
                            {!!this.value && (
                                <div onclick={this.onIconCancelClick} class="vc-Search__icon">
                                    <vc-icon-clear size={16} />
                                </div>
                            )}
                        </div>
                        {this.$slots.after && (
                            <div class="vc-Search__after-in">{this.$slots.after}</div>
                        )}
                    </div>
                </div>
            </div>
        )
    },
})
