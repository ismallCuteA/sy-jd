<template>
  <div class="detail-name-box1">
    <div class="box2"><img :src="goods.srcd1" alt="" /></div>
    <div class="box2"><img :src="goods.srcd2" alt="" /></div>
    <div class="box2"><img :src="goods.srcd3" alt="" /></div>
    <div class="box2"><img :src="goods.srcd4" alt="" /></div>
    <div class="box2"><img :src="goods.srcd5" alt="" /></div>
    <div class="box2"><img :src="goods.srcd6" alt="" /></div>
    <div class="box2"><img :src="goods.srcd7" alt="" /></div>
    <div class="box2"><img :src="goods.srcd8" alt="" /></div>
    <div class="box2"><img :src="goods.srcd9" alt="" /></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
    };
  },
  created() {
    let that = this;

    let url =
      "http://127.0.0.1:5500/src/data/goodlist.json?id=" + that.$route.query.id;

    let id = that.$route.query.id;
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
};
</script>
<style scoped>
.detail-name-box1 {
  display: flex;
  flex-direction: column;
}
.box2 {
  width: 100%;
}
.box2 img {
  width: 100%;
}
</style>