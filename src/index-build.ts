import Root from './components/Root'
import View from './components/View'
import Epic from './components/Epic'
import Panel from './components/Panel'
import Tabbar from './components/Tabbar'
import TabbarItem from './components/TabbarItem'
import Avatar from './components/Avatar'
import PanelHeader from './components/PanelHeader'
import PanelHeaderButton from './components/PanelHeaderButton'
import PanelHeaderContent from './components/PanelHeaderContent'
import ActionSheet from './components/ActionSheet'
import ActionSheetItem from './components/ActionSheetItem'
import Alert from './components/Alert'
import Button from './components/Button'
import Separator from './components/Separator'
import Link from './components/Link'
import List from './components/List'
import Div from './components/Div'

const components: any = {
    Root,
    View,
    Panel,
    Tabbar,
    TabbarItem,
    Avatar,
    Epic,
    PanelHeader,
    PanelHeaderButton,
    PanelHeaderContent,
    ActionSheet,
    ActionSheetItem,
    Alert,
    Button,
    Separator,
    Link,
    List,
    Div,
}

export function install(Vue: any, options = {}) {
    Object.keys(components).forEach(key => {
        Vue.component(`Vc${key}`, components[key])
    })
}

export default {
    install,
}
