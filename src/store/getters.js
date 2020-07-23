//对getters的理解主要作用是对state属性进行计算可以理解为
//类似于VUE中的conputed.
//https://www.cnblogs.com/wangshucheng/p/vue-004.html
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
