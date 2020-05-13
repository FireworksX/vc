import Vue from 'vue'
import App from './App.vue'
import VC from './index-build'

Vue.config.productionTip = false

Vue.use(VC)

new Vue({
    render: h => h(App),
    mounted() {
        VC.lockDomZoom()
    },
}).$mount('#app')
