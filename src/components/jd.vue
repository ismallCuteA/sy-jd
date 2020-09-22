<template>
  <div>
    <div class="float">
      <div class="floatImg" @click="check(1)">
        <!-- <img src="../assets/homeq.png" v-if="indexItem==0" /> -->
        <img src="../assets/homeq.png" />
      </div>
      <div class="floatImg" @click="check(2)">
        <!-- <img src="../assets/classfiyq.png" v-if="indexItem==1" /> -->
        <img src="../assets/classfiy.png" />
      </div>
      <div class="floatImg">
        <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
          <img src="../assets/jinxi.png" />
        </a>
      </div>
      <div class="floatImg" @click="check(3)">
        <!-- 53 0 1 2 3  -->
        <!-- <img src="../assets/shopcarq.png" v-if="indexItem==3" /> -->
        <img src="../assets/shopcar.png" />
      </div>
      <div class="floatImg" @click="check(4)">
        <img src="../assets/enter.png" />
      </div>
    </div>
  </div>
</template>
<script>
// router
export default {
  methods: {
    check(a) {
      if (a == 4) {
        this.$router.push({
          path: "forth",
        });
      }
      if (a == 1) {
        this.$router.push({
          path: "/",
        });
      }
      if (a == 2) {
        this.$router.push({
          path: "second",
        });
      }
      if (a == 3) {
        this.$router.push({
          path: "third",
        });
      }
    },
  },
};
</script>

