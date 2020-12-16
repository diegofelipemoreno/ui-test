import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import { CONSTANTS } from '../utils/constants';
import mutations from './mutations';
import {requestService} from '../services/requestService';
import {LocalStorageService} from '../services/localStorageService';
import router from '../router/index';

Vue.use(Vuex);

const requestJsonData = requestService.getJson();

export const localStorageCardVotes = new LocalStorageService(requestJsonData);

export const store = new Vuex.Store({
  state: localStorageCardVotes.getState(CONSTANTS.MODEL_KEY),
  router,
  getters,
  actions,
  mutations
});