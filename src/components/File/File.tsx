import Vue, { VNode } from 'vue'
import getClassName from '@/helpers/getClassName'
import Button from '@/components/Button/Button'
import { ButtonModes, ButtonSizes } from './helpers'

export default Vue.extend({
  name: 'vc-File',
  components: { 'vc-button': Button },
  props: {
    mode: {
      required: false,
      type: String as () => ButtonModes,
      default: 'primary'
    },
    size: {
      required: false,
      type: String as () => ButtonSizes,
      default: 'm'
    },
    stretched: {
      required: false,
      type: Boolean
    },
    href: {
      required: false,
      type: String
    },
    align: {
      required: false,
      type: String,
      default: 'center'
    },
    className: {
      required: false,
      type: String
    },
    originalEvent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames(): string {
      return getClassName('vc-File')
    }
  },
  methods: {
    emitVal(e: any) {
      if (!this.originalEvent) {
        this.$emit('input', e.target.files[0])
      } else this.$emit('input', e)
    }
  },
  render(h: any) {
    const { size, mode, align, className, stretched } = this.$props
    const { default: children, before, after } = this.$slots
    let { click } = this.$listeners

    if (click === undefined) {
      click = () => undefined
    }

    return (
      <vc-button
        role='button'
        class={[this.classNames]}
        size={size}
        mode={mode}
        align={align}
        stretched={stretched}
        tag='label'
        onClick={click}
      >
        {before && <template slot='before'>{before}</template>}
        <input class='vc-File__input' type='file' oninput={this.emitVal} />
        {children}
        {after && <template slot='after'>{after}</template>}
      </vc-button>
    )
  }
})
