
// 我们要把我们需要做状态管理的量放到这里来，然后在后面的操作动它
const state = {
    //这里写一些声明的数据之类的，例如:
    list: [{
        id: 1,
        name: "鱼香肉丝",
        price: "12",
        count: 0,
        gw: true
    },
    {
        id: 2,
        name: "鱼香肉丝",
        price: "12",
        count: 0,
        gw: true
    },
    {
        id: 3,
        name: "鱼香肉丝",
        price: "12",
        count: 0,
        gw: true
    },
    {
        id: 4,
        name: "鱼香肉丝",
        price: "12",
        count: 0,
        gw: true
    }]
};

const mutations = {
    //这里是写一些方法，例如：
    pushIndex: (state, index) => {
        state.list[index.withoutIndex].count++;
        state.list[index.withoutIndex].gw = 'fasle';
    }
}
export default {
    namespaced: true,
    state,
    mutations,
}
