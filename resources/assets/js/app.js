
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateMahasiswa from './components/CreateMahasiswa.vue';
import DisplayMahasiswa from './components/DisplayMahasiswa.vue';
import EditMahasiswa from './components/EditMahasiswa.vue';


const routes = [
    {
        name: 'CreateMahasiswa',
        path: '/mahasiswas/create',
        component: CreateMahasiswa
    },
    {
        name: 'DisplayMahasiswa',
        path: '/',
        component: DisplayMahasiswa
    },
    {
        name: 'EditMahasiswa',
        path: '/edit/:id',
        component: EditMahasiswa
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
