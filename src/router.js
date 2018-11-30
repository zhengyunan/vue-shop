import Vue from 'vue'
import Router from 'vue-router'
import Regist from './views/Regist.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '',
          name: 'Index',
          component: () => import('./views/index/index.vue')
        },
        {
          path: '/category',
          name: 'category',
          component: () => import('./views/index/category.vue')
        },
        {
          path: '/goods_car',
          name: 'goods_car',
          component: () => import('./views/index/goods_car.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('./views/index/profile.vue'),

          meta:{
             needLogin:true
          }
        },
      ]
    },
    {
      path: '/regist',
      name: 'Regist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Regist.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Login.vue')
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Search.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/goods.vue')
    }
  ]
})
