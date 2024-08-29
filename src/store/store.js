import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            selectedContact: {},
            isProfilePageOpen: false
        }
    },
    mutations: {
        updateSelectedContact(state, payload) {
            state.selectedContact = payload;
        },
        clearSelectedContact(state) {
            state.selectedContact = '';
        },
        toggleProfilePageOnClick(state) {
            state.isProfilePageOpen = !state.isProfilePageOpen;
        }
    },
    actions: {

    }
});

export default store;
