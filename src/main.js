require('./assets/js/config');
import './scss/app.scss';
import Vue from 'vue';
import App from './App.vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import VueJsonPretty from 'vue-json-pretty'
import VueIziToast from 'vue-izitoast';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueIziToast, {
    position: 'topRight'
});


Vue.component("vue-json-pretty", VueJsonPretty);

new Vue({
    render: h => h(App),
}).$mount('#app');
