<template>
  <div clas="storeStudy">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="push(index)">{{item}}</li>
    </ul>
    <div>
        简易的数据绑定
    <p>
      <input type="text" id="input1" autocomplete="off" />
    </p>
    <p>
      <input type="text" id="input2"  autocomplete="off"/>
    </p>
    <p>
      每次值加1
      <span id="spanx"></span>
    </p>
    </div>
    
  </div>
</template>
<script>
import { define } from "./Scriptcommon/defineProperties";
export default {
  name: "storeStudy",
  data() {
    return {
      valueflag: "",
    };
  },
  created() {
    //html加载完成之前，执行
  },
  mounted() {
    //html加载完成后执行
    define();
  },
  watch: {
    //,watch是去监听一个值的变化，然后执行相对应的函数
  },

  computed: {
    //计算属性
    list() {
      return this.$store.state.VuexStore.list;
    },
  },
  methods: {
    push(index) {
      //调取store里的VuexStore.js的pushIndex方法，从而要更新。
      //this.$store.dispatch() 与 this.$store.commit()方法的区别
      //  dispatch：含有异步操作，数据提交至 actions ，可用于向后台提交数据
      //commit：同步操作，数据提交至 mutations ，可用于登录成功后读取用户信息写到缓存里
      // this.$store.dispatch('VuexStore/pushIndex', { withoutIndex: index })
      this.$store.commit("VuexStore/pushIndex", { withoutIndex: index });
    },
  },
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
