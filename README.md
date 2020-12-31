# vc_ui

## Install
```
yarn add @fireworksx/vc_ui

```

```
import VC from '@fireworksx/vc_ui'
import '@fireworksx/vc_ui/dist/vc.css'
import '@fireworksx/vc_ui/dist/core.css'
import '@fireworksx/vc_ui/dist/ios.css'
import '@fireworksx/vc_ui/dist/android.css'

Vue.use(VC, {
    platform: 'ios', // optional, default auto detect
})
```

## Using
Naming from https://vkcom.github.io/VKUI/
Choose component and add ```vc``` prefix

### Example
```
<vc-root activeView="home"></vc-root>

// Slots
<vc-panel-header>
  <vc-panel-header-button slot="left">Go back</vc-panel-header-button>
  About page
</vc-panel-header>
```
