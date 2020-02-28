import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const login = r => require.ensure([], () => r(require('@/views/Login')), 'Login');
const dashboard = r => require.ensure([], () => r(require('@/views/Dashboard')), 'Dashboard');
const overview = r => require.ensure([], () => r(require('@/views/Overview')), 'Overview');
const manage = r => require.ensure([], () => r(require('@/views/Manage')), 'Manage');

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: [{
      path: 'overview',
			component: overview,
			meta: [],
    }, {
      path: 'manage',
      component: manage,
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
