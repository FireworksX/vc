import Vue from 'vue'
import App from './App.vue'
import VC from './index-build'
import '../dist/vc.css'

Vue.config.productionTip = false

Vue.use(VC, { platform: 'ios' })

new Vue({
    render: h => h(App),
    mounted() {
        VC.lockDomZoom()
    },
}).$mount('#app')
