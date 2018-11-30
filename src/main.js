import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'we-vue/lib/style.css'
import './assets/base.css';
import './assets/style.css';

import { Swipe, SwipeItem } from 'we-vue'

Vue.use(Swipe).use(SwipeItem)

Vue.use(VueAxios, axios)
// 导航守卫   每次打开一个页面的时候自动加载
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
     // let ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
     if(localStorage.getItem('ACCESS_TOKEN')){
       next()
     }else{
       next('/login')
     }
  }else{
    next()
  }
})

// 设置接口的基本地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
