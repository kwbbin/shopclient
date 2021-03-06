// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
import '@/assets/font/iconfont.css'
import Vuelidate from 'vuelidate'


Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$qs = qs

Vue.use(ElementUI)
Vue.use(Vuelidate)
Vue.config.productionTip = false


// router.beforeEach((to,from,next)=>{
//   if(to.path=='/' || localStorage.getItem('token') != null){
//    next();
//   }else{
   
//    next('/');
//   }
// })

// axios.interceptors.request.use(

//   config => {
//   // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//     let token =localStorage.getItem('token')
//   config.headers.twww ='3333';
//   if (token) {
//     config.headers.token =token;
//   }
//   return config
//   },
//   err => {
//   return Promise.reject(err);
//   }
  
// )


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

