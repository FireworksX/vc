import Vue from 'vue'
import getClassName from '@/helpers/getClassName'
import classNames from '@/lib/classNames'

interface Props {
  src: string
  size: number
  mode: string
}

interface Data {
  isVisible: boolean
}

interface Computed {
  classNames: string
  styleNames: {
    [key: string]: string
  }
}

export default Vue.extend<Data, any, Computed, Props>({
  name: 'vc-Avatar',
  props: {
    src: { type: String },
    size: {
      type: Number,
      default: 36,
      validator(size) {
        return [80, 72, 64, 56, 48, 44, 40, 36, 32, 28, 24].indexOf(size) !== -1
      }
    },
    mode: {
      type: String,
      default: 'default',
      validator(mode) {
        return ['default', 'image', 'app'].indexOf(mode) !== -1
      }
    }
  },
  computed: {
    classNames(): string {
      return classNames(getClassName('vc-Avatar'), `vc-Avatar--mode-${this.mode}`, `vc-Avatar--sz-${this.size}`)
    },
    styleNames() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  },
  render(h: any) {
    return (
      <div class={this.classNames} style={this.styleNames}>
        <div class='vc-Avatar__in'>
          <img src={this.src} class='vc-Avatar__img' />
        </div>
      </div>
    )
  }
})
