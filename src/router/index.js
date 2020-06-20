import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
Vue.use(VueRouter)

let func = ({params,query})=>{
	return {
		name:params.name,
		sex:params.sex,
		height:query.height,
		dog:query.dog,
	}
};

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
	//   { 通过路由传参
	//   path: '/Mine/:name/:sex',   //http://localhost:8080/mine/%E5%BC%A0%E4%B8%89/%E7%94%B7?height=110&dog=%E5%9C%9F%E8%B1%86
	//   name: 'Mine',
	//   component: Mine
	// },
	
	//   { 	// 通过属性传参
	//   path: '/Mine',   //http://localhost:8080/mine/%E5%BC%A0%E4%B8%89/%E7%94%B7?height=110&dog=%E5%9C%9F%E8%B1%86
	//   name: 'Mine',
	//   component: Mine,
	// 	props:{name:'小廖'}
	// },
	
	// 	  { 	// 通过属性传参
	//   path: '/Mine/:name/:sex',   //http://localhost:8080/mine/%E5%BC%A0%E4%B8%89/%E7%94%B7?height=110&dog=%E5%9C%9F%E8%B1%86
	//   name: 'Mine',
	//   component: Mine,
	// 	props:true
	// },
	
			  { 	// 通过属性传参
	  path: '/Mine/:name/:sex',   //http://localhost:8080/mine/%E5%BC%A0%E4%B8%89/%E7%94%B7?height=110&dog=%E5%9C%9F%E8%B1%86
	  name: 'Mine',
	  component: Mine,
		props:func
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
