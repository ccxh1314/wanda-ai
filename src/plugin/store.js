import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import axtions from '../store/actions';
import mutations from '../store/mutations';
import getters from '../store/getters';
import state from '../store/state';

let store = new Vuex.Store({
    axtions,
    mutations,
    getters,
    state
})

export default store;