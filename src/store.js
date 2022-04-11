import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logAdmin:false,
    logUser:false,
  },
  mutations: {
    logOutAdmin(state) {
      state.logAdmin=false;
    },
    logOutUser(state){
      state.logUser=false;
    },
    logInAdmin(state){
      state.logAdmin=true;
    },
    logInUser(state){
      state.logUser=true;
    }
 
  },

});