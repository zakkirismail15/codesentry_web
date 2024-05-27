import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [],
  },
  getters: {},
  mutations: {
    getProjects(state, data) {
      state.projects = []
      state.projects = data
    },
    addProject(state, data) {
      state.projects = [...state.projects, data]
    },
    removeProject(state, data) {
      state.projects = state.projects.filter((project) => project.id !== data)
    },
  },
  actions: {},
  modules: {},
})
