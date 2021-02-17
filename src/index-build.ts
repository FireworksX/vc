import Select from '@/components/Select/Select'
import Input from '@/components/Input/Input'
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
import CellButton from './components/CellButton'
import InfoRow from './components/InfoRow'
import Switch from './components/Switch'
import Spinner from './components/Spinner'
import ScreenSpinner from './components/ScreenSpinner'
import Checkbox from './components/Checkbox'
import Group from './components/Group'
import ModalCard from './components/ModalCard'
import Touch from './components/Touch'
import Slider from './components/Slider'
import FixedLayout from './components/FixedLayout'
import Snackbar from './components/Snackbar'
import Footer from './components/Footer/Footer'
import Radio from './components/Radio/Radio'
import Placeholder from './components/Placeholder/Placeholder'
import Header from './components/Header/Header'
import ModalRoot from './components/ModalRoot'
import Textarea from './components/Textarea/Textarea'
import FormLayout from './components/FormLayout/FormLayout'
import ModalPage from './components/ModalPage/ModalPage'
import ModalPageHeader from './components/ModalPageHeader/ModalPageHeader'
import Cell from './components/Cell'
import HorizontalScroll from './components/HorizontalScroll'
import Search from './components/Search/Search'
import Counter from './components/Counter/Counter'
import FormStatus from './components/FormStatus/FormStatus'
import Progress from './components/Progress/Progress'
import FormLayoutGroup from './components/FormLayoutGroup/FormLayoutGroup'
import File from './components/File/File'

import './styles/bright_light.sass'
import './styles/conts.sass'

import { VueConstructor } from "vue";
import { canUseDOM, lockDomZoom } from './lib/dom'
import SelectMimicry from './components/SelectMimicry/SelectMimicry'
import { setTheme } from './lib/styles'
import UserStack from '@/components/UserStack/UserStack'
import PullToRefresh from '@/components/PullToRefresh/PullToRefresh'
import { OS, setForcePlatform } from '@/lib/platform'

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
  CellButton,
  InfoRow,
  Switch,
  Spinner,
  ScreenSpinner,
  Checkbox,
  Group,
  ModalCard,
  Touch,
  Slider,
  FixedLayout,
  Snackbar,
  Textarea,
  FormLayout,
  Input,
  Select,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  Cell,
  HorizontalScroll,
  UserStack,
  SelectMimicry,
  Search,
  Counter,
  FormStatus,
  Progress,
  FormLayoutGroup,
  File,
  PullToRefresh
}

export interface PluginOptions {
    platform?: OS
    components?: Record<string, VueConstructor>
}

export function install(Vue: any, options: PluginOptions = {}) {
    const partialComponents = options.components || []
    const partialComponentsKeys = Object.keys(partialComponents)
    if (options !== undefined) {
        if (options.platform !== undefined) {
            setForcePlatform(options.platform)
        }
    }
    if (partialComponentsKeys.length) {
        partialComponentsKeys.forEach(key => {
            Vue.component(`Vc${key}`, components[key])
        })
    } else {
        Object.keys(components).forEach(key => {
            Vue.component(`Vc${key}`, components[key])
        })
    }
    Vue.prototype.$setTheme = setTheme
}

export default {
  install,
  lockDomZoom,
  canUseDOM,
  setTheme
}

export {
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
  CellButton,
  InfoRow,
  Switch,
  Spinner,
  ScreenSpinner,
  Checkbox,
  Group,
  ModalCard,
  Touch,
  Slider,
  FixedLayout,
  Snackbar,
  Textarea,
  FormLayout,
  Input,
  Select,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  Cell,
  HorizontalScroll,
  UserStack,
  SelectMimicry,
  Search,
  Counter,
  FormStatus,
  Progress,
  FormLayoutGroup,
  File,
  PullToRefresh,
}
