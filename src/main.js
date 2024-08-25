import { createApp } from 'vue'
import rootComponent from './App.vue'
import './css/style.css'
import store from './store/store.js'
import FontAwesomeIcon from './utils/font-awesome';

const App = createApp(rootComponent);

App.use(store);
App.component('font-awesome-icon', FontAwesomeIcon)
App.mount('#app');