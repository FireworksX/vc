import Spinner16 from './icons/16/spinner'

import Market28 from './icons/28/market'

import MoneyTransfer56 from './icons/56/money_transfer'
import MentionOutline56 from './icons/56/mention_outline'

const icons: any = {
    16: {
        Spinner: Spinner16,
    },
    28: {
        Market: Market28,
    },
    56: {
        MoneyTransfer: MoneyTransfer56,
        MentionOutline: MentionOutline56,
    },
}

export function install(Vue: any, options = {}) {
    Object.keys(icons).forEach((size: any) => {
        Object.keys(icons[size]).forEach((name: string) => {
            const compName = `VcIcon${size}${name}`
            Vue.component(compName, icons[size][name])
        })
    })
}

export default {
    install,
}
