import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false
// Vue.use(ViewUI);
import store from "./store/mrouter";
import routers from "./router/router"
// console.log(this.store);
// Vue.use(store);
Vue.prototype.$store = store;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import vueQuillEditor from 'vue-quill-editor';
// require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import dev from './config/dev.config';
import pro from './config/product.config';
Vue.use(vueQuillEditor);
let base = [];
if (process.env.VUE_APP_CURRENTMODE == 'dev'){
  base = dev;
}else{
  base = pro;
}
console.log(process.env)
console.log(base,11);

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var rot = JSON.parse(localStorage.getItem("myroute"));
var rm_route2 = store.state.rmroute;
// console.log(localStorage.getItem("myroute"));
for(var key in rot){
  // rm_route[key] = routers[key];
  // console.log(routers)
  // console.log(key,rm_route)
  for(var i in routers){
    // if(routers[i].name == rot[key].name){
    //   var iszt = '';
    //   // console.log(rot[key].fullPath,routers[i].path)
    //   if(rot[key].fullPath != routers[i].path){
    //     iszt = rot[key].fullPath.split('?')[1].replace('=','_');
    //   }

      // if(rot[key].path == routers[i].path){
        // var rm_route2 = store.state.rmroute;
        // let arr = {}
        // arr = {...routers[i].meta};
        // arr.name = arr.name +iszt
        // var arr2 = {...routers[i]}
        // arr2.meta = arr;
        // arr2.fullPath = rot[key].fullPath;
        // rm_route2[routers[i].name + iszt] = arr2;
        // rm_route2[key] = routers[i];
        // console.log(arr2,iszt)
      // }

    // }
  }
}
setTimeout(function(){
  // store.dispatch('changerouter',rm_route2);
  // console.log(rm_route2)
},1)
// console.log(rm_route2)
var nowview = localStorage.getItem('nowView');
if (nowview){
  store.dispatch('chooseview',nowview)
}
var myroute = JSON.parse(localStorage.getItem('myroute'));
if (myroute){
  store.dispatch('changerouter',myroute)
}
var routekey = {};
for (var key in routers){
  routekey[routers[key].name] = routers[key];
}
Vue.prototype.$routes = routekey;
router.afterEach((to, from) => {
  var rm_route = store.state.rmroute;
  // store.dispatch('changerouter',rm_route);
  rm_route||(rm_route = {});
  rm_route[to.fullPath] = to.name;

  store.dispatch('changerouter',rm_route);
  console.log(rm_route)
  store.dispatch('chooseview',to.fullPath)


})

// router.afterEach((to, from) => {
//   // console.log(to,from)
//   // console.log(to,111)
//   for(var key in routers){
//     // console.log(routers[key]);
//     // console.log(iszt)
//     var iszt = '';
//     if(to.fullPath != to.path){
//       iszt = to.fullPath.split('?')[1].replace('=','_');
//       // for (var key in query){
//       //   iszt =iszt+ query[key];
//       // }
//       // iszt = query;
//     }
//     if(to.path == routers[key].path){
//       var rm_route = store.state.rmroute;
//       // routers[key].meta.name = routers[key].meta.name+iszt;
//       let arr = {}
//       arr = {...routers[key].meta};
//       // console.log(arr,12111)
//       arr.name = arr.name +iszt
//       var arr2 = {...routers[key]}
//       arr2.meta = arr;
//       arr2.fullPath = to.fullPath;
//       rm_route[routers[key].name + iszt] = arr2;
//       store.dispatch('changerouter',rm_route);
//       store.dispatch('chooseview',arr2.name+ iszt)
//       // console.log(rm_route);
//     }
//   }
// })


router.beforeEach((to, from, next) => {
  // if(to.meta.requireAuth) {  // 1.判断该路由是否需要登录权限
  //   // console.log(store)
  //     if(store.state.login.token){  // 2.通过vuex state获取当前的token是否存在
  //       next();
  //     }else{
  //       next({
  //         path: '/login',
  //         query: { redirect: to.fullPath }  // 3.将跳转的路由path作为参数，登录成功后跳转到该路由
  //       })
  //     }
  // }else if(to.path == '/login') {//如果已经登录再手动在地址栏中输入'/login'将跳转到首页
  //     if(store.state.login.token) {  // 通过vuex state获取当前的token是否存在
  //       next({
  //         path: '/home'
  //       });
  //     }else{
  //       next()
  //     }
  // }else{
  //   next();
  // }
  for(var key in routers){
    // console.log(routers[key]);
    // if(to.path == routers[key].path){
    //   var rm_route = store.state.rmroute;
    //   rm_route[routers[key].name] = routers[key];
    //   store.dispatch('changerouter',rm_route);
    //   store.dispatch('chooseview',routers[key].name)
    //   // console.log(rm_route);
    // }
  }
  next();

})



// router.beforeEach((to, from, next) => {
//   console.log(from,to);
//   for(var key in routers){
//     // console.log(routers[key]);
//     if(to.path == routers[key].path){
//       rm_route[routers[key].name] = routers[key];
//       store.dispatch('changerouter',rm_route);
//       // console.log(rm_route);
//     }
//   }
//   next();
//   return;
//   if(to.meta.requireAuth) {  // 1.判断该路由是否需要登录权限
//     // console.log(store)
//       let userinfo = localStorage.getItem('userinfo');
//       userinfo = JSON.parse(userinfo);
//       if(!userinfo){
//         next({
//           path: from.fullPath,
//         })
//       }else{
//         next();
//       }
//   }else{
//     next();
//   }
// })