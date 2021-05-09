import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// @符号是在webpack.base.conf.js定义，其实是项目的src路径
import First from "../components/views/First";
import Login from "../components/views/Login";
import Cipher from "../components/views/Cipher";


Vue.use(Router)

// RouterView【命令视图】和RouterLink【命令路线】本身是两个组件。
export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld   //当访问这个路径'/helloworld'时，访问的组件就是HelloWorld,也就是HelloWorld.vue
      // query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.route.query.name和this.route.params.name。注意：接收参数的时候，已经是route而不是router了哦！！
      // query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示。
      // 路由参数的取值：{{this.$route.params.参数名}}
    }, {
      path: '/first',
      name: 'First',
      component: First
    }, {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/cipher',
      name: 'Cipher',
      component: Cipher
    }
  ]
})
