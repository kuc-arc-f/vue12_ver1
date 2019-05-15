//
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import tasksIndex from '../components/index.vue'
import About from '../components/about.vue'
import Top from '../components/top.vue'
//import Contact from '../components/contact.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Top },
    { path: '/about', component: About },
    { path: '/tasks', component: tasksIndex },
  ],
})
