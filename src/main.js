// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目核心文件
import Vue from 'vue';
import App from './App';
import router from './router';
//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// 调接口相当于ajax
import axios from 'axios'
// require('./mock') //引入mock数据，关闭则注释该行

Vue.prototype.$axios = axios //在Vue的原型上添加$axios方法
axios.defaults.baseURL = 'http://127.0.0.1:8080';


Vue.config.productionTip = false
//安装ElementUI
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
