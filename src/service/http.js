import axios from 'axios';

var qs = require('qs');
//axios 配置
axios.defaults.timeout = 60000;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://192.168.2.110:3000'
//axios.defaults.baseURL = 'http://192.168.2.110:9998'

/**
 * 獲得語言和對於的圖標
 */
export function httpGetLanguagesAll() {
  //console.log(data);
  return axios({
    url: "/languages/all",
    method: "post",
  })
}

/**
 * 將前端scatter獲得的登陸信息傳遞給後端
 * @param {登陸信息} data 
 */
export function httpUserLogin(data) {
  let datas = {
    data
  };
  let allCookies = document.cookie
  //console.log(data);
  return axios({
    url: "/user/scatter_login",
    method: "post",
    headers: {
      'Content-type': 'application/json  ',

      'set-cookie': allCookies, //设置跨域头部


    },
    withCredentials: true, //可以带cookie的认证
    data: JSON.stringify(data)
  })
}

/**
 * 得到系統公告列表
 * @param {語言傳入的ID} language_id 
 */
export function httpGetNotice(language_id) {
  return axios({
    url: "/notice/getNotice/" + language_id,
    method: "get",
  })
}

/**
 * 得到公共詳細内容
 * @param {公共傳入ID} id 
 */
export function httpGetOnlyNotice(id) {
  return axios({
    url: "/notice/getOnlyNotice/" + id,
    method: "get",
  })
}

/**
 * 獲取對於 語種的最後一個游戲規則
 * @param {對於的語種ID} language_id 
 */
export function httpRuleLastrule(language_id, game_id) {
  let datas = {
    language_id,
    game_id
  };
  //console.log(data);
  return axios({
    url: "/rule/lastrule",
    method: "post",
    withCredentials: true, //可以带cookie的认证
    data: qs.stringify(datas)
  })
}

/**
 * 获取游戏列表
 * @param {*} id 
 */
export function httpGetGames() {
  return axios({
    url: "/games/getGames",
    method: "get",
  })
}

/**
 * 获取游戏列表
 * @param {*} id 
 */
export function httpPostPour(bets, multiple) {
  let datas = {
    bets,
    multiple
  };
  let allCookies = document.cookie
  return axios({
    url: "/socket/pour",
    method: "post",
    data: qs.stringify(datas),
    headers: {
      'set-cookie': allCookies, //设置跨域头部

    }
  })
}

/**
 * 获取游戏列表
 * @param {*} id 
 */
export function httpGetUserTest() {
  let allCookies = document.cookie
  return axios({
    url: "/login",
    method: "get",
    withCredentials: true, //可以带cookie的认证
    headers: {
      'set-cookie': allCookies, //设置跨域头部

    }
  })
}

/**
 * 获取游戏列表
 * @param {*} id 
 */
export function httpGetUserTestcrash() {
  let allCookies = document.cookie
  return axios({
    url: "/crash",
    method: "get",
    withCredentials: true, //可以带cookie的认证
    headers: {
      'set-cookie': allCookies, //设置跨域头部
    }
  })
}


/**
 * 获取游戏列表
 * @param {*} id 
 */
export function httptransChanges(money) {
  let datas = {
    money
  };
  let allCookies = document.cookie
  return axios({
    url: "/trans/changes ",
    method: "post",
    data: qs.stringify(datas),
    withCredentials: true, //可以带cookie的认证
    headers: {
      'set-cookie': allCookies, //设置跨域头部
    }
  })
}
