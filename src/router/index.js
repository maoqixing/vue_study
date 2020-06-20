import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
Vue.use(VueRouter)
  const routes = [
//	{ path: '/', redirect: '/home' },//重定向1
// { path: '/', redirect: {name:'About'} },//重定向2
 // { path: '/', redirect: to => { //目标路由3
 //      // 方法接收 目标路由 作为参数
 //      // return 重定向的 字符串路径/路径对象
	// 		{return '/home'} 
 //    }},
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{ 
	  path: '/Mine', 
	  name: 'Mine',
	  component: Mine
	},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
