import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import commonComponent from '@/utils/commonComponent';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(commonComponent);

import { mockXHR } from './mock/mockWatch'
 if(process.env.NODE_ENV == 'DEV'){
    mockXHR();
 }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
