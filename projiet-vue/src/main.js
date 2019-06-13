// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

/*挂在原型上*/
Vue.prototype.$axios = axios
Vue.config.productionTip = false
/*全局*/
axios.defaults.baseURL='http://api.coindesk.com';



Vue.config.productionTip = false


// 添加一个请求拦截器
//发送请求的拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//发送前看一下参数是否正确，或者说发送请求头是否有问题会在发送请求之前拦截

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


/* eslint-disable no-new */
new Vue({
el: '#app',
router,
components: { App },
template: '<App/>'
})



