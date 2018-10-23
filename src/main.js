import Vue from 'vue'
import { Button, Steps, message, notification } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

Vue.component(Steps.name, Steps)
Vue.component(Steps.Step.name, Steps.Step)
Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.prototype.$message = message
Vue.prototype.$notification = notification

new Vue({
  render: h => h(App)
}).$mount('#app')
