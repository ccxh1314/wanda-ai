import Vue from 'vue';
import axios from 'axios';

// axios.defaults.withCredentials = false;
// axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";
// axios.defaults.headers.post['Content-Type'] = 'application/json';

//请求时
// axios.interceptors.request.use(function(config) {
// config.headers = { "Content-Type": "application/x-www-form-urlencoded", }
//     if (localStorage.getItem("user") == null) {
//         return
//     } else {
//         let user = JSON.parse(localStorage.getItem("user"))[0]
//         let tokenHead = user.tokenHead;
//         let token = user.token
//             // console.log(tokenHead, token)
//         config.headers = {
//             "Content-Type": "application/json",
//             "Authorization": tokenHead + token
//         }
//     }
//     return config;
// }, function(error) {
//     return Promise.reject(error)
// })

//响应时



Vue.prototype.$axios = axios;
window.axios = axios;

export default axios;