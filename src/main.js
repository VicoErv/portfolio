import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import About from "@/components/About";
import {BootstrapVue} from "bootstrap-vue";
import Menu from "@/components/Menu";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
    { path: '/menu', component: Menu },
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
