<template>
  <div class="jindongBox">
    <div class="top">
      <!-- 广告开始 -->
      <div id="m_common_tip" v-if="exist">
        <div id="box1">
          <div class="wrap1">
            <img src="../assets/g-top.png" alt @click="del" class="closepic" />
          </div>
        </div>
        <div id="box2">
          <div class="wrap2">
            <img src="../assets/g-top1.png" alt class="brandpic" />
          </div>
        </div>
        <div id="box3">
          <div class="wrap3">
            <span>打开京东App,购物更轻松</span>
          </div>
        </div>
        <div id="box4">
          <div class="wrap4">
            <span class="wrap5">立即打开</span>
          </div>
        </div>
      </div>
      <!-- 广告结束 -->
      <div class="top-title" v-if="indexItem == 0">
        <div class="top-title-box">
          <router-link to="/classify">
            <img src="../assets/muen.png" class="top-title-img" />
          </router-link>
        </div>
        <div class="top-title-inputbox">
          <div class="top-inputbox">
            <img src="../assets/jdlogo.png" alt />
          </div>
          <div class="top-imgbox" @click="search">
            <img src="../assets/search.png" alt />
          </div>
          <div @click="search" class="top-title-input-box">
            <input type="text" class="top-title-input" placeholder="欧普照明" />
          </div>
        </div>
        <router-link to="/enter">
          <div class="top-enter">登录</div>
        </router-link>
      </div>
    </div>

    <swiperD></swiperD>
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
        <a
          href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1"
        >
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
import swiperD from "./swiper.vue";
export default {
  data() {
    return {
      exist: true,
      indexItem: 0,
    };
  },
  components: {
    swiperD,
  },
  methods: {
    del() {
      let that = this;
      that.exist = false;
    },
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
    search() {
      this.$router.push("fifth");
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
.top {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
.jindongBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.float {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background: #fff;
  /* padding: 2px 15px; */
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
}
.floatImg img {
  width: 60px;
}
.top-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 12px;
  /* background: url("../assets/back.jpg"); */
  height: 40px;
  align-items: center;
  color: #fff;
  font-size: 14px;
  background-color: red;
  /* width: 100%; */
}
.top-title-box {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
}
.top-title-img {
  width: 100%;
}

.top-title-inputbox {
  border-radius: 15px;
  width: 100%;
  height: 30px;
  background: #f7f7f7;
  padding-right: 30px;
  box-sizing: border-box;
  color: #666;
  flex-grow: 1;
  margin: 0 10px;
  display: flex;
  align-items: center;
}
.top-inputbox {
  width: 20px;
  height: 20px;
  margin: 0 5px 0 15px;
  position: relative;
}
.top-inputbox::after {
  content: "";
  border-right: 1px solid #ddd;
  position: absolute;
  top: 2px;
  left: 27px;
  height: 16px;
}
.top-inputbox img {
  width: 100%;
}
.top-imgbox {
  width: 17px;
  height: 17px;
  margin: 0 12px;
}
.top-imgbox img {
  width: 100%;
  vertical-align: top;
}
.top-title-input {
  border: none;
  font-size: 12px;
  line-height: 30px;
  background: #f7f7f7;
  color: #232326;
  box-sizing: border-box;
  white-space: nowrap;
  vertical-align: middle;
  text-overflow: ellipsis;
  outline: none;
  width: 100%;
  margin-right: 20px;
}
.top-enter {
  width: 40px;
  font-size: 14px;
  white-space: nowrap;
  color: #fff;
  text-align: center;
  line-height: 20px;
}

/* 分类页顶部 */

.search-box {
  padding: 7px;
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 2;
      border-bottom: 1px solid #e5e5e5;
}
.search-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.search-top-inputbox {
  display: flex;
  flex-direction: row;
}
.search-top-imgbox {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
}
.search-top-imgbox img {
  width: 120%;
}
.search-top-inputbox {
  flex-grow: 1;
  height: 30px;
  width: 100%;
  margin: 0 10px;
  background: rgb(246, 246, 246);
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.search-top-inputbox-img {
  width: 20px;
  height: 20px;
  margin: 0 15px;
}
.search-top-inputbox-img img {
  width: 100%;
}
.search-top-text {
  width: 30px;
  height: 28px;
}
.search-concent {
  padding: 15px;
  background: #fff;
  margin-top: 2px;
}
.hot-search {
  font-size: 15px;
  margin-bottom: 5px;
}
.hot-search-concent-box-color {
  color: #e93b3d;
}
.hot-search-concent-box-colored {
  color: #686868;
}
.hot-search-concent-box a {
  text-decoration: none;
  margin-right: 10px;
  background: rgb(246, 246, 246);
  font-size: 12px;
  padding: 4px 12px;
  line-height: 35px;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 4px;
}

/* 头部广告样式开始 */

.nacActive {
  display: none;
}

#m_common_tip {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 45px;
  background-color: rgb(51, 51, 51);
  /* display: none; */
}

#box1 {
  width: 15%;
  display: flex;
  justify-items: center;
  align-items: center;
}

.wrap1 {
  margin-left: 10px;
}

.closepic {
  width: 12px;
  height: 12px;
}

#box2 {
  display: flex;
  justify-items: center;
  align-items: center;
  width: 15%;
}

.wrap2 {
  margin-top: 7px;
  margin-left: -15px;
}

.brandpic {
  width: 30px;
  height: 30px;
}

#box3 {
  flex-grow: 1;
  width: 47%;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 15px;
  color: #fff;
}

.wrap3 {
  margin-left: -20px;
}

#box4 {
  width: 23%;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 15px;
  color: #fff;
  background-color: rgb(212, 34, 34);
}

.wrap4 {
  display: flex;
  justify-items: center;
  align-items: center;
  margin-left: 15px;
}
</style>

