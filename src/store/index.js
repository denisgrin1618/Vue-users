import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },

  // getters: {

  //   users: (state, getters) => {
  //       if (state.users.length == 0) {
  //         this.commit('SET_USERS');
  //       }
  //       return state.users;
  //   },
  // },

  mutations: {
    SET_USERS(state) {
      fetch('https://random-data-api.com/api/users/random_user?size=20')
          .then( (response) => {
            response.json().then(function (data) {
              state.users = data;
              console.log('data', data)
            })
          });
    },

    DELETE_USER(state, id){
      state.users = state.users.filter(user => user.id != id);
    }

  },
  actions: {

    SET_USERS(context) {
      context.commit('SET_USERS');
    },

  },
  modules: {
  }
})
