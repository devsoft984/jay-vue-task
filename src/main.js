import Vue from 'vue'
import Vuex from 'vuex'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';
import App from './App.vue';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {
    brand: []
  }
});
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
