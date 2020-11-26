import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import {localStorageService} from '../services/localStorageService';
import router from '../router/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: localStorageService.getState(),
  router,
  getters,
  actions,
  mutations
});