import Vue from 'vue'
import App from './App.vue';

//引入路由配置
import router from './plugin/router';

//引入公共样式
import './assets/css/reset.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入axios
import axios from './plugin/axios';

//日期格式化
import common from './filters/formDate';
Vue.prototype.common = common;

// //
// import transform from './filters/transform'
// Vue.prototype.transform = transform;


//配置baseUrl
// Vue.prototype.baseUrl = require('../congig/config').active;

//引入状态管理配置
import store from './plugin/store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')