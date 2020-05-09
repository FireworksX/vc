import Vue from 'vue'
import App from './App.vue'
import VC from './index-build'
import VCIcons from './index-icons'

Vue.config.productionTip = false

Vue.use(VC)
Vue.use(VCIcons)

new Vue({
    render: h => h(App),
    mounted() {
        VC.lockDomZoom()
    },
}).$mount('#app')
