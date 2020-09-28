<template>
    <div><img :src="goods.srcd11" alt=""></div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
            goods:[]
        }
    },
    created() {
    let url =
      "http://127.0.0.1:5500/src/data/goodlist.json?id=" +
      this.$route.query.id;
    let that = this;
    let id = this.$route.query.id;
    axios
      .get(url)
      .then(function (response) {
        if (response.data.code == 200) {
          that.goods = response.data.list[id];
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
  },
}
</script>
<style scoped>

</style>