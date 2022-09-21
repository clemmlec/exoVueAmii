import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/liste',
    name: 'liste',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListeView.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
