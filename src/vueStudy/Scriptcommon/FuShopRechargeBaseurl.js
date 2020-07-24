
// 环境判断
export const $baseUrl = {
  
  getApi:() => {
    let RechargeBaseurl ='https://malladmintestcdn.fanjiaxing.com/app/index.php?i=7&' ; // 测试线地址
    let   BoxUrl='http://partnerwebapp.test.fanjiaxing.com/#/cardList'
    switch (process.env.NODE_ENV) {
      case 'production':
        RechargeBaseurl ='https://malladmintestcdn.fanjiaxing.com/app/index.php?i=7&'; // 本地测试环境和166测试环境公用一个地址
        BoxUrl='http://partnerwebapp.test.fanjiaxing.com/#/cardList'
        break;
      case 'Release':
        RechargeBaseurl ='http://malladmin.fanjiaxing.com/app/index.php?i=7&'; //  正式环境
        BoxUrl='http://partnerwebapp.fanjiaxing.com/#/cardList'
        break;
      case 'PublishTest01':
        RechargeBaseurl ='http://192.168.2.215:9135/app/index.php?i=7&'; // 210 1套
        BoxUrl='http://192.168.2.210:9121/#/cardList'
       // 预发布1环境
        break;
      case 'PublishTest02':
        RechargeBaseurl ='http://192.168.2.215:9135/app/index.php?i=7&'; 
        // 210 2套环境
        BoxUrl='http://192.168.2.210:9120/#/cardList'
        // 预发布2环境
        break;
      case 'Debug':
        RechargeBaseurl ='https://malladmintestcdn.fanjiaxing.com/app/index.php?i=7&'; // 本地测试环境和166测试环境公用一个地址
        BoxUrl='http://partnerwebapp.test.fanjiaxing.com/#/cardList'
        // 166测试环境和本地测试环境公用一个地址
        break;
      default:
        RechargeBaseurl ='https://malladmintestcdn.fanjiaxing.com/app/index.php?i=7&'; // 本地测试环境和166测试环境公用一个地址
        BoxUrl='http://partnerwebapp.test.fanjiaxing.com/#/cardList'
        // 默认本地开发环境
        break
    }
    //RechargeBaseurl 油卡&话费充值地址
    //BoxUrl 福卡充值地址
    return {RechargeBaseurl, BoxUrl};
  }
}


export default (Vue) => {
  Vue.prototype.$baseUrl = $baseUrl;
};
