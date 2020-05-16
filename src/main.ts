import Vue from 'vue'
import App from './App.vue'
import VC from './index-build'
import '../dist/vc.css'
import '../dist/core.css'
import '../dist/ios.css'
import '../dist/android.css'

Vue.config.productionTip = false

Vue.use(VC, {
    platform: 'ios',
})

new Vue({
    render: h => h(App),
    mounted() {
        VC.lockDomZoom()
    },
}).$mount('#app')
