import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      people: [],
      selectedContact: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {}
})

export default store
