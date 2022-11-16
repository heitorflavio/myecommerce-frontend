import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base_url: 'http://localhost:8001/api/',
    login: false,
    Total: 0,
  },
  getters: {
    getBaseUrl: state => {
      return state.base_url;
    }
  },
  mutations: {
    setLogin: (state, payload) => {
      state.login = payload;
    },
    setCartTotal: (state, payload) => {
      state.Total = payload;
    },
    

  },
  actions: {
    setLogin: (context, payload) => {
      context.commit('setLogin', payload);
    },
    setCartTotal: (context, payload) => {
      context.commit('setCartTotal', payload);
    }
  },
  modules: {

    
  },

})
