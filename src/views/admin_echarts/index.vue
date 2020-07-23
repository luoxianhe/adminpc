<template>
   <div class="hello">
     <div id="chart2" style="with:200px;height:200px"></div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted() {
    this.$chart.circle('chart2');
  }
}
  

</script>
<style lang="scss">
.hello{
  width:400px;
  margin:0 auto;
}
</style>
