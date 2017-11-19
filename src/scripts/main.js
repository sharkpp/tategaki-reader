"use struct";

require('../index.html');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/app.vue'

console.log('*****',Vue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: App }
];

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
});

const app = new Vue({
  router
}).$mount('#app');
