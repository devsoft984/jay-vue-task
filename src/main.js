import Vue from 'vue'
import router from './router/router';
import axios from 'axios';
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';
import App from './App.vue';

import {store} from './store/store'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
