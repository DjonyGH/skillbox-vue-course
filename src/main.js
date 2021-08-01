import Vue from 'vue'
import App from './App.vue'

//homework_3.2
import { message_1, message_2 } from './homework_3.2/file1'
import { func } from './homework_3.2/file2'

func(message_1)
func(message_2)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
