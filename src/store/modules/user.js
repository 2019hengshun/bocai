// 导入types.js文件
import types from "./../types"

const state = {
  count: 5,
  Identity: sessionStorage.getItem('HS_Identity'),
  isLogin: false,
  language: sessionStorage.getItem('HS_Language'),
}

// 定义getters
var getters = {
  count(state) {
    return state.count
  },
  Identity(state) {
    if (!state.Identity) {
      state.Identity = sessionStorage.getItem('HS_Identity'); //从sessionStorage中读取状态  
    }
    return state.Identity
  },
  isLogin(state) {
    return state.isLogin
  },
  language(state) {
    if (!state.language) {
      var lan = sessionStorage.getItem('HS_Language'); //从sessionStorage中读取状态 
      if (!lan) {
        var language = (navigator.browserLanguage || navigator.language).toLowerCase();
        if (language.indexOf('zh') > -1) {
          state.language = 'zh';
        } else if (language.indexOf('en') > -1) {
          state.language = 'en';
        } else {
          state.language = 'en';
        }
      } else {
        state.language = lan;
      }
    }
    return state.language
  }
}

const actions = {
  increment({
    commit,
    state
  }) {
    //此处提交的事件与下方mutations 中的type.INCREMENT 对应
    //与原来 commit('increment')的原理相同，只是把类型名换成了常量
    commit(types.INCREMENT)
  },
  decrement({
    commit,
  }, n) {
    if (state.count > 10) {
      commit(types.DECREMENT, n)
    }
  },

  /**
   * 登录用户
   * @param {*} param0 
   */
  getIdentity({
    commit,
    state
  }, Identity) {
    return new Promise((resolve, reject) => {
      commit(types.IDENTITY, Identity);
      resolve();
    }).catch(err => {
      reject(err);
    })
  },

  /**
   * 退出用户
   * @param {*} param0 
   */
  forgetIdentity({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      commit(types.FORGETIDENTITY);
      resolve();
    }).catch(err => {
      reject(err);
    })
  },


  changeLan({
    commit,
    state
  }, language) {
    return new Promise((resolve, reject) => {
      commit(types.SET_LANGUAGE, language);
      resolve();
    }).catch(err => {
      reject(err);
    })
  }
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
  [types.INCREMENT](state) {
    state.count++
  },
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  [types.DECREMENT](state,
    a
  ) {
    state.count--
  },
  [types.IDENTITY](state, Identity) {
    state.Identity = Identity;
    state.isLogin = true;
    sessionStorage.setItem('HS_Identity', state.Identity);
  },
  [types.FORGETIDENTITY](state) {
    state.isLogin = false;
    sessionStorage.removeItem('HS_Identity');
  },
  [types.SET_LANGUAGE](state, language) {
    state.language = language;
    sessionStorage.setItem('HS_Identity', state.language);
  }
}
// const mutations ={
//     increment(state){
//         state.count ++;
//     }
// }

//最后统一导出
export default {
  state,
  getters,
  actions,
  mutations
}
