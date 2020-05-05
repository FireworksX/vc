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
import Link from './components/Link/Link'
import List from './components/List/List'
import Div from './components/Div'
import Footer from './components/Footer/Footer'
import Radio from './components/Radio/Radio'
import Placeholder from './components/Placeholder/Placeholder'
import Header from './components/Header/Header'
import Textarea from './components/Textarea/Textarea'
import FormLayout from './components/FormLayout/FormLayout'

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
    Footer,
    Div,
    Radio,
    Placeholder,
    Header,
    Textarea,
    FormLayout,
}

export function install(Vue: any, options = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(`Vc${key}`, components[key])
    })
}

export default {
    install,
}
