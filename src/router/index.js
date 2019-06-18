
/* 
路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/msite/MSite.vue'
import Personal from '../pages/personal/Personal.vue'
import Classify from '../pages/classify/Classify.vue'
import Carts from '../pages/carts/Carts.vue'
import Topic from '../pages/topic/Topic.vue'
import Login from '../pages/login/Login.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/carts',
      component: Carts
    },
    {
      path: '/topic',
      component: Topic
    },
    {
      path: '/login',
      component: Login
    },
    /* 自动跳转到 msite 路由 */
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
