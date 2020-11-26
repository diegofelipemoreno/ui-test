import './main.scss';

import App from './App.vue';
import Vue from 'vue';

import router from './router';
import { store } from './store/store';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
