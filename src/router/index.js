import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
  /*
  Router.beforeEach((to, from , next) => {
    let allowEnter = true

    to.matched.some((record) => {
        let isLoggin = localStorage.getItem('login') ? true : false

        if (isLoggin && to.path === '/login') {
          next('/')
        }
        if (!isLoggin && record.name === 'home') {
          next('/login')
          return
        }

      return next()
    })
  })*/
  return Router
}
