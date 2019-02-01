// 异步操作中需要用到 increment 方法 ，所以需要导入types.js文件
import types from './types'

const actions = {
  incrementAsync({
    commit,
    state
  }) {
    var p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
    p.then(() => {
      commit(types.INCREMENT);
    }).catch(() => {
      console.log('异步操作')
    })
  }
}

export default actions;
