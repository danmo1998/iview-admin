
import Home from '../views/Home.vue';
const routes = [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      meta:{
        name:'首页啊'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      meta:{
        name:'首页2号'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta:{
        name:'关于3号'
      }
    }
    ,
    {
      path: '/about2',
      name: 'about2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta:{
        name:'关于2号'
      }
    }
    ,
    {
      path: '/about3',
      name: 'about3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta:{
        name:'关于123'
      }
    },
    {
        path:'*',
        redirect:'/home',
    },
    {
        path: '/ceshi/:ids/:name',
        name: 'ceshi2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            name: '关于123'
        },
        props: true
    }
]

  export default routes;