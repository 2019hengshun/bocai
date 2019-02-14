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

import axios from 'axios';
axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;
//Vue.use(VueSocketio, socketio('ws://192.168.1.141:9999'));


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
  // sockets: {
  //   connect: function () {
  //     console.log('socket connected');
  //   },
  //   getType(data) {
  //     console.log(data.type, this.$socket)
  //     this.$socket.emit(data.type);
  //   },
  //   bets(val) {
  //     console.log("bets");
  //     if (val.type == "bets") {
  //       var str = "游戏下注时间，倒计时：" + val.times;
  //       //   console.log(str);
  //       this.Countdown = val.times + "s";
  //       this.$socket.emit(val.type);
  //     } else {
  //       ///   console.log(str.type);
  //       this.$socket.emit(val.type);
  //     }
  //   },
  //   /**
  //    * 游戏开始以后获得游戏数据
  //    */
  //   crash(data) {
  //     console.log("crash");
  //     if (data.type == "crash") {
  //       var str = `游戏开始，X轴${data.crashTime}，Y轴${data.crashCrash}`;
  //       this.Countdown = "游戏开始";
  //       console.log(data.data);
  //       var startTime = 1;
  //       var startTimeFun = setInterval(() => {
  //         if (startTime <= 0.1) {
  //           clearInterval(startTimeFun);
  //         } else {
  //           this.$socket.emit(data.type);
  //           startTime = (startTime - 0.9).toFixed(1);
  //         }
  //       }, 100);
  //     } else if (data.type == "over") {
  //       this.$socket.emit(data.type);
  //     }
  //   },
  //   /**
  //    * 等待开奖
  //    */
  //   waiting(data) {
  //     console.log("waiting");
  //     if (data.type == "waiting") {
  //       var str = "等待开奖";
  //       this.Countdown = str;
  //       //  $("#socket_conn").html(str);
  //       var startTime = 1;
  //       var startTimeFun = setInterval(() => {
  //         if (startTime <= 0.1) {
  //           clearInterval(startTimeFun);
  //         } else {
  //           this.$socket.emit(data.type);
  //           startTime = (startTime - 0.9).toFixed(1);
  //         }
  //       }, 100);
  //     } else {
  //       console.log(data.type);
  //       this.$socket.emit(data.type);
  //     }
  //   },
  //   /**
  //    * 爆炸了
  //    */
  //   over(data) {
  //     console.log("over");
  //     if (data.type == "over") {
  //       var str = `爆炸啦，爆点为${data.crashCrash}`;
  //       this.Countdown = str;
  //       // $("#socket_conn").html(str);
  //       var startTime = 1;
  //       var startTimeFun = setInterval(() => {
  //         if (startTime <= 0.1) {
  //           clearInterval(startTimeFun);
  //         } else {
  //           this.$socket.emit(data.type);
  //           startTime = (startTime - 0.9).toFixed(1);
  //         }
  //       }, 100);
  //     } else if (data.type == "start") {
  //       this.$socket.emit(data.type);
  //     }
  //   },
  //   /**
  //    * 开始
  //    */
  //   start(data) {
  //     console.log("start");
  //     if (data.type == "start") {
  //       console.log("开始");
  //       var str = data.msg;
  //       this.Countdown = str;
  //       // $("#socket_conn").html(str);
  //       var startTime = 1;
  //       var startTimeFun = setInterval(() => {
  //         if (startTime <= 0.1) {
  //           clearInterval(startTimeFun);
  //         } else {
  //           this.$socket.emit(data.type);
  //           startTime = (startTime - 0.9).toFixed(1);
  //         }
  //       }, 100);
  //     } else if (data.type == "bets") {
  //       this.$socket.emit(data.type);
  //     }
  //   }
  // }
})
