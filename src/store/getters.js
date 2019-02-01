// 因为数据从 user.js 中获取，所有需要引入该文件
import user from './modules/user'

const getters = {
  isEvenOrOdd(state) {
    return user.state.count % 2 == 0 ? '偶数' : '奇数'
  }
}

export default getters;
