import Vue from 'vue';
import router from './backend/router';
import App from './backend/views/App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import store from './store';
import FlashMessage from '@smartweb/vue-flash-message';
import BootstrapVue from 'bootstrap-vue';

Vue.use(FlashMessage);
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
