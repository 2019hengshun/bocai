// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import enLocal from 'element-ui/lib/locale/lang/en'
import zhLocal from 'element-ui/lib/locale/lang/zh-CN'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'

import BScroll from "better-scroll";
import './assets/css/bootstrap.min.css';
import './assets/css/normal.css';
import * as custom from './config/dateFilter';
import store from './store/index.js'
import enLocale from './assets/lang/en'
import zhLocale from './assets/lang/zh'
import ecc from 'eosjs-ecc'
import VueSocketio from 'vue-socket.io';
import './assets/css/iconfont.css';

import socketio from 'socket.io-client';
//Vue.use(VueSocketio, socketio('ws://192.168.1.141:9999'));
Vue.use(VueSocketio, socketio('ws://192.168.1.149:9999'))

Vue.use(Vuex)
Vue.use(VueI18n)
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
const messages = {
  en: {
    ...enLocale,
    ...enLocal // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    ...zhLocale,
    ...zhLocal // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}
const i18n = new VueI18n({
  locale: localStorage.lang || 'zh', // set locale
  messages, // set locale messages
})
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value)
});
Vue.config.productionTip = false
Vue.prototype.ElementUI = ElementUI;
Vue.prototype.Ecc = ecc;
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: {
    App
  },
  i18n,
  template: '<App/>',
  sockets: {
    connect: function () {
      console.log('socket connected');
    },
    // msg: function (val) {
    //   console.log('接收到服务端消息', val);
    // }
  }
})
