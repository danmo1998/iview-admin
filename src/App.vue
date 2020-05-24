<template>
  <div id="app">
    <div style="background: rgb(54, 62, 79);width:100%;top:0;padding-left:240px;box-sizing: border-box;">
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu> -->
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    
  </div>
      <div style="background: #363e4f;position: absolute;height: 100%;top:0">
        <el-row class="tac" style="width:240px">
        <el-col>
    <h5>自定义颜色</h5>
    <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
      </div>
      <div style="margin-left: 242px; margin-top: 5px;">
        <!-- <Tabs type="card" v-model="num" closable @on-tab-remove="handleTabRemove">
            <TabPane v-for="item in a" :key="item.id" :label="item.name" :name="item.name"><component :is="item.component"></component></TabPane>
        </Tabs> -->
        <el-tabs v-model="$store.state.nowView" @tab-click="gettabs" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane
            :key="index"
            v-for="(item, index) in $store.state.rmroute"
            :label="$routes[item].meta.name"
            :name="index"
          >
          <transition name="slide-fade">
            <component  :is="$routes[item].component" v-show="$store.state.nowView == index" :shuju="$route.query" ceshi='ooo'></component>
          </transition>
          </el-tab-pane>
        </el-tabs>
<!--        <component  :is="'about2'" :shuju="654" ceshi='ooo'></component>-->
<!--        <router-view v-show="false"></router-view>-->
      </div>
      <router-link to="/about">about</router-link><br>
      <router-link to="/">index</router-link><br>
      <router-link to="/about2">about2</router-link><br>
      <router-link to="/about3">about3</router-link><br>
      <router-link to="/home">home</router-link><br>
      <router-link to="/about?a=2">abouta=2</router-link><br>
      <router-link :to="{name:'ceshi2',params:{ids:1222,name:'zhangsan'}}">ceshi=2</router-link><br>
  </div>
</template>
<script>
import Vue from "vue";
import about2 from "@/views/About";
export default {
  data () {
       return {
        activeIndex: '1',
        activeIndex2: '1',
        // editableTabsValue: 'home',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        a:{}
      };

  },
  components:{
    about2
  },
    methods: {
        handleTabRemove (name) {
            this['tab' + name] = false;
            console.log(this.num)
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
        getel(){
          // var a = Vue.extend(import('./views/Home.vue'));
          // var _vueobj = new a();
          // console.log(_vueobj.$mount().$el)item.component
          // document.appendChild(_vueobj.$mount().$el)
          return ()=>import('./views/Home.vue');
        },
        gettabs(a,b){
          // var name = this.$store.state.rmroute[a.name].fullPath;
          // console.log(a,b)
          this.$router.push({path:a.name})
        },
        handleTabsEdit(targetName, action) {
          // console.log(this.editableTabsValue)
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.a;
          var activeName = this.editableTabsValue;
          console.log(targetName)
          // if (activeName === targetName) {
          //   tabs.forEach((tab, index) => {
          //     console.log(tab,index)
          //     if (tab.name === targetName) {
          //       let nextTab = tabs[index + 1] || tabs[index - 1];
          //       if (nextTab) {
          //         activeName = nextTab.name;
          //       }
          //     }
          //   });
          //   delete this.a[targetName];
          //   console.log(activeName,action)

          // }
          // activeName = nextTab.name;
          // this.$store.dispatch('chooseview',activeName)
          // this.$store.dispatch('changerouter',a);
          // console.log(this.editableTabsValue)
          // var a = this.$store.rmroute[targetName];
          var a = this.$store.state.rmroute;
          // delete (a.targetName);
          if (Object.keys(a).length == 1){
            return false;
          }
          var nextTab = 0;
          var activename =  Object.keys(a);
          // if (a.length == 1){
          //   return
          // }
          activename.forEach((item,index)=>{
            // console.log(item,index)
            if(targetName == this.$store.state.nowView){
                  nextTab = activename[index + 1] || activename[index - 1];
                // console.log(nextTab)
                //   var name = this.$store.state.rmroute[nextTab].fullPath;
                  this.$router.push({path:nextTab})
            }
          });
          
          // console.log(c,111111111111111)
          delete a[targetName];
          // console.log(activeName,action)
          // console.log(this.$store.state.rmroute)
          var b = Object.assign({},a);
          // Object.assign({}, this.a, this.a)
          // console.log(this.a)
          // debugger;
          console.log(b)
          this.$store.dispatch('changerouter',b);
          // this.editableTabsValue = '0';

          // this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    },
    created(){
      this.router1 = this.$route;
      this.router2 = ()=> import('@/views/About.vue');
      var arr = {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./views/About.vue')
      }
      var a = this.$router.options.routes;
      this.a = a;
      var b = {};
      b[a[1].name] = a[1];
      b[a[0].name] = a[0];
      b[a[3].name] = a[3];
      b[a[2].name] = a[2];
      // b[a[1].name+'1'] = a[1];
      // b[a[1].name+'2'] = a[1];
      // console.log(b)
      localStorage.setItem("route",JSON.stringify(a));
      // console.log(this.$router)
      // this.router2 = ()=> this.$route.matched[0].components.HelloWorld.components;
      // const loginBoxInstance = Vue.extend(loginboxVue);
      // console.log(this.$store,1)
      // this.$store.dispatch('changerouter',this.a);
    },
    filters:{
      // guolu(val){
      //   console.log(this);
      // }
    }
}
</script>
<style lang="scss">
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0.5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
