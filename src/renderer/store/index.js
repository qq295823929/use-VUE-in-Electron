import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state";
import actions from "./actions";
import mutations from "./mutation";
import getters from "./getters";

// import { createSharedMutations} from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex);
export default new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
    getters,
    // plugins: [
    //     createPersistedState(),
    //     createSharedMutations()
    // ],
    strict: process.env.NODE_ENV !== 'production'
})
