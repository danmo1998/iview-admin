<template>
  <div id="app">
    <div style="background: rgb(54, 62, 79);osition: absolute;width:100%;top:0;padding-left:240px;box-sizing: border-box;">
    <Row type="flex" justify="start" class="code-row-bg">
      <!-- <Col style="color:#fff">
        缩
      </Col> -->
       <Col justify="end">
          <Menu mode="horizontal" :theme="theme2" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                内容管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                <!-- <span v-if="false"></span> -->
                用户管理
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                综合设置
            </MenuItem>
        </Menu>
      </Col>
    </Row>
    
  </div>
      <div style="background: #363e4f;position: absolute;height: 100%;top:0">
        <Row>
          <Menu  :theme="theme2" :open-names="['1']" accordion>
            <MenuItem name="123">R商城后台</MenuItem>
          </Menu>
      </Row>
      <Menu :theme="theme2" :open-names="['1']" accordion>
          <Submenu name="1">
              <template slot="title">
                  <Icon type="ios-paper" />
                  内容管理
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
              <template slot="title">
                  <Icon type="ios-people" />
                  用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
              <template slot="title">
                  <Icon type="ios-stats" />
                  统计分析
              </template>
              <MenuGroup title="使用">
                  <MenuItem name="3-1">新增和启动</MenuItem>
                  <MenuItem name="3-2">活跃分析</MenuItem>
                  <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                  <MenuItem name="3-4">用户留存</MenuItem>
                  <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
          </Submenu>
      </Menu>
      </div>
      <div style="margin-left: 242px; margin-top: 5px;">
        <Tabs type="card" v-model="num" closable @on-tab-remove="handleTabRemove">
            <TabPane v-for="item in a" :key="item.id" :label="item.name" :name="item.name"><component :is="item.component"></component></TabPane>
        </Tabs>
        <!-- <router-view></router-view> -->
      </div>
    
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data () {
      return {
          theme2: 'dark',
          tab0: true,
          tab1: true,
          tab2: true,
          router2:'',
          a:'',
          num:1
      }
      
  },
  component:{
    
  },
    methods: {
        handleTabRemove (name) {
            this['tab' + name] = false;
            console.log(this.num)
        },
        getel(){
          // var a = Vue.extend(import('./views/Home.vue'));
          // var _vueobj = new a();
          // console.log(_vueobj.$mount().$el)item.component
          // document.appendChild(_vueobj.$mount().$el)
          return ()=>import('./views/Home.vue');
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
      b[a[1].name+'1'] = a[1];
      b[a[1].name+'2'] = a[1];
      console.log(b)
      this.a = b;
      localStorage.setItem("route",JSON.stringify(a));
      console.log(this.$router)
      // this.router2 = ()=> this.$route.matched[0].components.HelloWorld.components;
      // const loginBoxInstance = Vue.extend(loginboxVue);
      console.log()
    }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
