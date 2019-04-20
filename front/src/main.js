import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    iconfont: 'md', // 'md' || 'mdi' || 'fa' || 'fa4'
    theme: {
        primary: '#00BCD4'
    }
})

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import VueRouter from 'vue-router'

import Catalog from './views/Catalog.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/catalog/:sort',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'is-active'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
