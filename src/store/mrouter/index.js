import Vue from 'vue';
import Vuex from 'vuex';
import state from "./store";
import actions  from "./actions";
import mutations from "./mutation";
import getters from "./getters";
Vue.use(Vuex);
const addr = new Vuex.Store({
    state,
    actions ,
    mutations,
    getters
});
export  default addr;