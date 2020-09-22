import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todolist: [],
  },
  mutations: {
    addTodo(state, payload) {
      state.todolist.push(payload);
    },
  },
  actions: {
    UPDATE_TODO({commit}, payload) {
      commit('addTodo', payload);
    }
  },
  getters: {
    GET_TODO: state => state.todolist
  },
  modules: {}
});
