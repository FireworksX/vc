import Vue from 'vue'
import App from './App.vue'
import RenderVNode from './components/RenderVNodeComponent.vue'

Vue.config.productionTip = false

Vue.component('render', RenderVNode)

new Vue({
    render: h => h(App),
}).$mount('#app')
