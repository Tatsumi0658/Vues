import { createApp } from 'vue'
/* import Vue from 'vue' */
import App from './App.vue'
import router from './router'
/*import axios from 'axios'
import vuex from 'vuex'*/
import { store } from './store'
/*import store from './store'*/
/* import axios from 'axios'
import VueAxios from 'vue-axios' */

/* Vue.config.productionTip = false

Vue.use(VueAxios, axios) */

/* new Vue({
  router,
  render: h=>h(App)
}).mount('#app')
*/
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
