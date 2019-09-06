import Vue from 'vue';
import axios from 'axios';

// axios.defaults.withCredentials = false;
// axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
axios.interceptors.response.use(response => {
    // console.log(response)
    return response
}, err => {
    // console.log(err.response);
    switch (err.response.status) {
        case 403:
            // console.log(403)
            alert("登录时403:是密码错误")
    }
    return Promise.reject(err)
})



Vue.prototype.$axios = axios;
window.axios = axios;

export default axios;