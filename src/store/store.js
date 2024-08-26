import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            selectedContact: {},
        }
    },
    mutations: {
        updateSelectedContact(state, payload) {
            state.selectedContact = payload;
        },
        clearSelectedContact(state) {
            state.selectedContact = '';
        }
    },
    actions: {        }
})

export default store
