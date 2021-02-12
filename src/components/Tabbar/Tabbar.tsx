import Vue from 'vue'
import getClassName from '@/helpers/getClassName'
import classNames from '@/lib/classNames'

interface Props {
  src: string
  size: number
  mode: string
}

interface Computed {
  classNames: string
}

interface Methods {
  calcItemsMode(): string
}

export default Vue.extend<any, Methods, Computed, Props>({
  name: 'vc-Tabbar',
  computed: {
    classNames(): string {
      return classNames(getClassName('vc-Tabbar'), `vc-Tabbar--l-${this.calcItemsMode()}`, 'vc-Tabbar--shadow')
    }
  },
  methods: {
    calcItemsMode(): string {
      if (this.$slots.default !== undefined) {
        return this.$slots.default.length > 2 ? 'vertical' : 'horizontal'
      }
      return 'horizontal'
    }
  },
  render(h: any) {
    return <div class={this.classNames}>{this.$slots.default}</div>
  }
})
