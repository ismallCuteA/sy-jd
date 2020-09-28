<template>
  <div class="pagecart">
    <div class="shop-back">
      <div @click="topback()">
        <img src="../assets/左标.png" />
      </div>
      <div>购物车</div>
      <div @click="shopclick()">
        <img src="../assets/更多.png" />
      </div>
    </div>
    <!-- 1 -->
    <div class="good-black-nav" :class="{ activeBlack2: blacknav == true }">
      <router-link to="/" style="color: white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/房屋管理.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">首页</span>
        </div>
      </router-link>
      <router-link to="/classify" style="color: white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/搜索.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">分类搜索</span>
        </div>
      </router-link>
      <router-link to="/mine" style="color: white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/我.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">我的京东</span>
        </div>
      </router-link>
      <router-link to="/" style="color: white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/足迹.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">浏览记录</span>
        </div>
      </router-link>
      <router-link to="/" style="color: white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/心 爱心.png" alt />
          </span>
          <span class="good-black-nav-detail-span2">我的关注</span>
        </div>
      </router-link>
      <router-link to="/" style="color: white">
        <div class="good-black-nav-detail">
          <span class="good-black-nav-detail-span1">
            <img src="../assets/分享.png" alt />
          </span>
          <span class="good-black-nav-detail-span3">分享</span>
        </div>
      </router-link>
      <div class="good-black-nav-css"></div>
    </div>
    <!-- 2 -->
    <div class="carttop" v-if="isDispaly">
      <div class="topbar">{{ topcontent }}</div>
      <button class="btntop" @click="where">{{ register }}</button>
    </div>
    <div class="shop-list-box">
      <div class="shop-list" v-for="(item, index) in list" :key="item.id">
        <input
          type="checkbox"
          class="shop-list-input"
          v-model="checkGroup"
          :value="item"
          @change="handLiChange"
          checked
        />
        <div class="shop-list-img">
          <img :src="item.img" alt />
        </div>
        <div class="shop-list-box-message">
          <div class="shop-list-box-name">{{ item.name }}</div>
          <div class="shop-list-box-color">
            <span>黑色</span>
          </div>
          <div class="shop-list-box-color">
            <span>满2件8折</span>
          </div>
          <div class="shop-list-box-price">
            <div class="shop-list-box-price-left">
              <span class="shop-list-box-price-size">￥</span>
              <span class="shop-list-box-price-num">{{ item.price }}</span>
              <span class="shop-list-box-price-size">.00</span>
            </div>
            <div class="shop-list-box-price-right">
              <span class="minus" @click="item.num--"></span>
              <div>
                <input type="tel" v-model="item.num" />
              </div>
              <span class="plus" @click="item.num++"></span>
            </div>
          </div>
          <div class="shop-list-box-del">
            <span class="shop-list-box-del-move">移入关注</span>
            <span class="shop-list-box-delete" @click="remove(index)"
              >删除</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="empty_cart" v-if="isDispaly">
      <div
        class="shopcart_empty_wrap"
        v-for="item in middlecontent"
        :key="item.active"
      >
        <div class="cart_empty">
          <img :src="item.img" />
        </div>
        <div class="cart_info">
          <span class="time">{{ item.info }}</span>
        </div>
      </div>
      <div>
        <div class="shopcart_mod_title">
          <span class="shopcart_mod_title_text">{{ middletext }}</span>
        </div>
      </div>

      <div class="mall_seckill" v-for="item in flashsale" :key="item.aqua">
        <div class="mall_seckill_head">
          <div class="mall_seckill_title">{{ item.flashtitle }}</div>
          <!-- 倒计时 -->
          <div class="mall_seckill_countdown">
            <span class="time">{{ item.flashtime }}</span>
            <div class="countdown_detail">{{ countdown1 }}</div>
          </div>
          <div class="mall_seckill_link">
            <img :src="item.flashimg" />
          </div>
        </div>
        <!-- 滑动图片 -->
        <div class="mall_seckill_slider">
          <div
            class="mall_seckill_item"
            v-for="item in products"
            :key="item.aspect"
          >
            <div class="mall_seckill_image">
              <img :src="item.img" class="image" />
            </div>
            <p class="mall_seckill_price">
              {{ item.newprice }}
              <span class="del">{{ item.oldprice }}</span>
            </p>
          </div>
          <div class="mall_seckill_item type_more">
            <div class="btn">
              <i class="inner">{{ btnright }}</i>
            </div>
          </div>
        </div>
      </div>

      <div class="empty_cart_coupon">
        <div class="mod_coupon_head">
          <div class="mod_coupon_title">
            <img :src="imgleft" />
            <span>{{ benefits }}</span>
            <img :src="imgright" />
          </div>
          <div class="mod_coupon_get">
            <span>{{ btntext }}</span>
          </div>
        </div>

        <div class="mod_coupon_area">
          <img :src="coupon" />
        </div>
      </div>
    </div>
    <div>
      <div id="cnxhTitle " class="recomm_mod_title">
        <span class="recomm_mod_title_text">{{ bottomtext }}</span>
      </div>
      <div class="mod_recommend_v2">
        <ul class="list" v-for="item in goods" :key="item.id">
          <li class="ad_li">
            <div class="cover">
              <img :src="item.goodsimg" />
            </div>
            <div class="info">
              <div class="rec_name">
                <i class="mod_tag">
                  <img :src="item.jdimg" />
                </i>
                <span>{{ item.desc }}</span>
              </div>
              <div class="flex_wrap">
                <div class="flex_wrap">
                  <div class="price_info">
                    <div class="price">
                      <span class>{{ item.price }}</span>
                      <em>{{ item.pricenum }}</em>
                    </div>
                  </div>
                </div>
                <div class="buy rec_cart">
                  <img :src="item.cartimg" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="shop-total" v-if="isAble">
      <div class="shop-total-left">
        <input
          type="checkbox"
          class="shop-list-input"
          @change="isChange"
          v-model="isAllchecked"
        />
        <span>全选</span>
      </div>
      <div class="shop-total-price-allNum">
        <span class="shop-total-price-all">总计:</span>
        <span class="shop-total-price-num">￥</span>
        <span>{{ prices() }}</span>
      </div>
      <div class="shop-total-toBuy">
        去结算(
        <span>{{ nums() }}</span
        >件)
      </div>
    </div>
    <div class="float">
      <router-link to="/">
        <div class="floatImg">
          <!-- <img src="../assets/homeq.png" v-if="indexItem==0" /> -->
          <img src="../assets/home.png" />
        </div>
      </router-link>
      <router-link to="/second">
        <div class="floatImg">
          <!-- <img src="../assets/classfiyq.png" v-if="indexItem==1" /> -->
          <img src="../assets/classfiy.png" />
        </div>
      </router-link>
      <div class="floatImg">
        <a
          href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1"
        >
          <img src="../assets/jinxi.png" />
        </a>
      </div>

      <div class="floatImg">
        <!-- <img src="../assets/shopcarq.png" v-if="indexItem==3" /> -->
        <img src="../assets/shopcarq.png" />
      </div>

      <router-link to="/forth">
        <div class="floatImg">
          <img src="../assets/enter.png" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blacknav: false,
      countdown1: "00:00:00",
      topcontent: "",
      register: "",
      item: "",
      desc: "",
      middlecontent: [],
      middletext: "",
      flashsale: [],
      imgleft: "",
      goods: [],
      benefits: "",
      imgright: "",
      btntext: "",
      coupon: "",
      bottomtext: "",
      products: [],
      btnright: "",
      isAllchecked: false,
      checkGroup: [],
      ckecked: true,
    };
  },
  mounted() {
    this.countDown();
    let that = this;
    window.onscroll = function () {
      that.blacknav = false;
    };
  },
  computed: {
    list() {
      return this.$store.state.shopList;
    },
    // message() {
    //   return this.$store.state.message;
    // },
    isDispaly() {
      return this.$store.state.isDispaly;
    },
    isAble() {
      return this.$store.state.isAble;
    },
  },
  methods: {
    where() {
      this.$router.push("forth");
    },
    topback() {
      this.$router.go(-1);
    },
    shopclick() {
      if (this.blacknav == false) {
        this.blacknav = true;
      } else if (this.blacknav == true) {
        this.blacknav = false;
      }
    },
    prices() {
      var sum = 0;
      for (let i in this.checkGroup) {
        sum += this.checkGroup[i].price * this.checkGroup[i].num;
      }
      return sum;
    },
    nums() {
      var sum = 0;
      for (let i in this.checkGroup) {
        sum += this.checkGroup[i].num;
      }
      return sum;
    },
    isChange() {
      if (!this.isAllchecked) {
        this.checkGroup = [];
      } else {
        this.checkGroup = this.list;
      }
    },
    handLiChange() {
      if (this.checkGroup.length == this.list.length) {
        this.isAllchecked = true;
      } else {
        this.isAllchecked = false;
      }
    },
    countDown() {
      setInterval(() => {
        let nowTime = new Date();
        let inputTime = new Date("2020-11-11 00:00:00");
        let times = (inputTime - nowTime) / 1000;
        let h = parseInt((times / 60 / 60) % 24);
        h = h < 10 ? "0" + h : h;
        let m = parseInt((times / 60) % 60);
        m = m < 10 ? "0" + m : m;
        let s = parseInt(times % 60);
        s = s < 10 ? "0" + s : s;
        this.countdown1 = h + ":" + m + ":" + s;
      }, 1000);
    },
    remove(index) {
      this.$store.commit("removeList", index);
      this.checkGroup = this.list;
      if (this.list.length == 0) {
        this.$store.state.isDispaly = true;
        this.$store.state.isAble = false;
      }
    },
  },
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/cart.json";
    axios
      .get(url)
      .then(function (response) {
        if (response.status == 200) {
          that.topcontent = response.data.topcontent;
          that.register = response.data.register;
          that.middlecontent = response.data.middlecontent;
          that.middletext = response.data.middletext;
          that.flashsale = response.data.flashsale;
          that.imgleft = response.data.imgleft;
          that.benefits = response.data.benefits;
          that.imgright = response.data.imgright;
          that.btntext = response.data.btntext;
          that.coupon = response.data.coupon;
          that.bottomtext = response.data.bottomtext;
          that.goods = response.data.goods;
          that.desc = response.data.desc;
          that.products = response.data.products;
          that.btnright = response.data.btnright;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.good-back img {
  width: 2rem;
  margin: 0 1rem;
}
.shop-total-price-allNum {
  margin-left: 50px;
}
.shop-total-toBuy {
  margin: 6px 12px 0;
  font-weight: 700;
  display: block;
  width: 113px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 13px;
  border-radius: 20px;
  background-color: #f2270c;
  color: #fff;
  /* font-size: .7rem; */
  background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
}
.shop-total-price-all {
  font-size: 15px;
}
.shop-total-price-num {
  font-size: 15px;
  font-weight: 600;
}
.shop-total-left {
  display: flex;
  align-items: center;
}
.shop-total-left span {
  margin-left: -20px;
  font-size: 12px;
}
.shop-total {
  width: 100%;
  position: fixed;
  bottom: 46px;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.shop-list-box-delete {
  position: relative;
  padding: 0 10px;
  line-height: 15px;
  font-size: 10px;
}
.shop-list-box-del-move {
  position: relative;
  padding: 0 10px;
  line-height: 15px;
}
.shop-list-box-del-move::after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #262626;
  width: 1px;
  /* top: 0;
    bottom: 0; */
  right: 0;
  top: 2px;
  bottom: 2px;
}
.shop-list-box-del {
  margin: 10px 0 0;
  height: 15px;
  font-size: 10px;
  text-align: right;
}
.minus {
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
}
.minus::before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTCQkJCYmJrxUw5UAAAACdFJOUwB9WCfAuQAAAB1JREFUGNNjYBgIwLZq1aoJIAYXkLEAhQGXGggAAJHVCnlOtZ+AAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 0.75rem 0.75rem;
  content: "";
  position: absolute;
  top: 3px;
  left: -14px;
  width: 0.75rem;
  height: 0.75rem;
}
.plus {
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
}
.plus::before {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURSUlJUdwTCQkJK/0gvAAAAADdFJOU/8AfWpa/bIAAAArSURBVBjTYwiFgAAG8hkRqlBGACvxjAYGBiYwgwEIUBlwKZIMRDiDfO8AAJNQRyMPYU0tAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 0.75rem 0.75rem;
  content: "";
  position: absolute;
  top: -13px;
  left: 33px;
  width: 0.75rem;
  height: 0.75rem;
}
.shop-list-box-price-right {
  position: relative;
  display: block;
  width: 3.3rem;
  border-radius: 2px;
  /* overflow: hidden; */
  background-color: #fff;
  font-weight: 400;
}
.shop-list-box-price-right input {
  border: none;
  width: 1.8rem;
  text-align: center;
  color: #262626;
  background-color: #f2f2f2;
  font-size: 0.55rem;
}
.shop-list-box-price-right input::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  margin-top: 1px;
}
.shop-list-box-price-num {
  font-size: 0.8rem;
  font-weight: 600;
}
.shop-list-box-price-left {
  flex: 1;
  line-height: 0.8rem;
  color: #f2270c;
  font-size: 0.6rem;
}
.shop-list-box-price {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
}
.shop-list-box-color {
  margin: 0.3rem 0 0;
  font-size: 0.5rem;
  display: flex;
  flex: 0 1 auto;
}
.shop-list-box-color span {
  position: relative;
  background: #f2f2f2;
  padding: 0 0.75rem 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.5rem;
  color: #262626;
  border-radius: 0.4rem;
}
.shop-list-box-color span::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0.25rem;
  margin-top: -3px;
  background-image: url(//wq.360buyimg.com/wxsq_trade/cart/main/images/sprite.img_default_437_16ed632a.png);
  background-position: -117px -85px;
  background-size: 130px 105px;
  width: 6px;
  height: 6px;
}
.shop-list-box-name {
  font-size: 0.6rem;
  margin-bottom: 0.3rem;
  word-break: break-all;
}
.shop-list-input {
  width: 50px;
  margin: 0 10px 0 0;
}
.shop-list-box {
  /* padding: 0.6rem 0 1px;
  border-radius: 0.5rem; */
  background: #fff;
  color: #262626;
  margin-top: 0.6rem;
}
.shop-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.9rem;
  padding: 10px;
}
.shop-list-img {
  width: 200px;
  /* width: 5rem; */
  /* height: 5rem; */
  overflow: hidden;
  box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.3rem;
  margin-right: 15px;
}
.shop-list-img img {
  width: 100%;
}

.pagecart {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow: hidden scroll;
  background-color: rgb(242, 242, 242);
}

.good-black-nav-detail {
  display: flex;
  align-items: center;
}
.good-black-nav-detail-span1 {
  width: 20%;
}
.good-black-nav-detail-span1 img {
  padding: 0.1rem;
  width: 100%;
  margin-left: 0.5rem;
}
.good-black-nav-detail-span2 {
  display: flex;
  flex-grow: 1;
  padding: 0.5rem;
  border-bottom: 1px solid #999;
  margin-left: 0.5rem;
}
.good-black-nav-detail-span3 {
  display: flex;
  flex-grow: 1;
  padding: 0.5rem;
  margin-left: 0.5rem;
}
.good-black-nav {
  width: 8rem;
  background-color: black;
  color: white;
  position: fixed;
  right: 0.5rem;
  top: 3.5rem;
  z-index: 9;
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  display: none;
}
.good-black-nav-css {
  border: 10px solid transparent;
  position: fixed;
  right: 0.8rem;
  top: 2.5rem;
  z-index: 99;
  border-bottom-color: black;
}
.pagecart {
  width: 100%;
  height: 100%;
  /* overflow-y: scroll;
    overflow: hidden scroll; */
  background-color: rgb(242, 242, 242);
}
.shop-back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: white;
}
.shop-back img {
  width: 2rem;
}

.carttop {
  border-top: 1px solid rgb(242, 242, 242);
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
}

.btntop {
  display: inline-block;
  margin-left: 10px;
  width: 53px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(270deg, #f2270c, #ff4b2b);
  box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
  border-radius: 15px;
  border: none;
}

.shopcart_empty_wrap {
  padding: 70px 0 65px;
  text-align: center;
}

.cart_info {
  font-size: 15px;
  color: #333;
  line-height: 16px;
  margin-top: 15px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.shopcart_mod_title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
}

.shopcart_mod_title:after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ccc;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  left: 10px;
  right: 10px;
  top: 50%;
}
.shopcart_mod_title .shopcart_mod_title_text {
  z-index: 2;
  position: relative;
  padding: 0 15px;
  background-color: rgb(242, 242, 242);
}

.shopcart_mod_title .shopcart_mod_title_text:after {
  right: 0;
}

.shopcart_mod_title .shopcart_mod_title_text:after,
.shopcart_mod_title .shopcart_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.shopcart_mod_title .shopcart_mod_title_text:after,
.shopcart_mod_title .shopcart_mod_title_text:before {
  content: "";
  position: absolute;
  top: 55%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.shopcart_mod_title .shopcart_mod_title_text:before {
  left: 0;
}

.mall_seckill_head {
  display: flex;
  flex-direction: row;
  height: 45px;
  line-height: 45px;
  justify-content: space-between;
}

.mall_seckill {
  background-color: #fff;
  border-radius: 4px 0 0 4px;
  margin: 0 0 15px 15px;
}

.mall_seckill_title {
  font-size: 16px;
  color: #333;
  margin: 0 10px 0 15px;
  font-weight: 700;
}

.mall_seckill_countdown .time {
  display: flex;
  color: #999;
  font-size: 12px;
}

.mall_seckill_countdown {
  display: flex;
}

.countdown_detail {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: 12px;
  margin-right: 114px;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  display: flex;
  flex-flow: row;
  color: red;
}

.mall_seckill_link img {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  margin-top: -6px;
  margin-right: 10px;
}

.mall_seckill_image {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 100%;
  display: flex;
}

.mall_seckill_image .image {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
}

.mall_seckill_slider {
  position: relative;
  padding: 0 15px 15px;
  font-size: 0;
  font-family: none;
  white-space: nowrap;
  overflow: auto;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  margin-top: 2%;
  flex-wrap: nowrap;
}

.mall_seckill_slider::-webkit-scrollbar {
  display: none;
}

.mall_seckill_slider .mall_seckill_item {
  display: inline-block;
  vertical-align: top;
}

.mall_seckill_item {
  position: relative;
  text-align: center;
  width: 24%;
  margin-right: 10px;
  padding: 0 5px 5px;
  border-radius: 4px;
  height: 100px;
  width: 80%;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
}

.mall_seckill_image {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 100%;
}

.mall_seckill_price {
  font-size: 16px;
  margin-top: 5px;
  color: #f2270c;
  z-index: 11;
}

.mall_seckill_price .del {
  display: block;
  font-size: 12px;
  color: #ccc;
  line-height: 1;
  text-decoration: line-through;
}

.mall_seckill_item.type_more {
  position: absolute;
  width: 55px;
  height: 100%;
  bottom: 20px;
  padding: 0;
}

.mall_seckill_slider .mall_seckill_item {
  display: inline-block;
  vertical-align: top;
}

.mall_seckill_item.type_more .btn {
  display: block;
  width: 43px;
  position: absolute;
  height: 107%;
  right: 10px;
  background-color: #f7f7f7;
}

.mall_seckill_item.type_more .btn .inner {
  font-size: 12px;
  color: #999;
  position: absolute;
  left: 12px;
  top: 50%;
  margin-top: -25px;
  padding-bottom: 12px;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  text-align: left;
  letter-spacing: 2px;
}

em,
i {
  font-style: normal;
}

.mall_seckill_item.type_more .btn .inner:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  width: 6px;
  height: 10px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'%3E%3Cpath fill='%23CCC' fill-rule='evenodd' d='M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  left: 50%;
  bottom: -3px;
  margin-left: -1px;
}

.mall_seckill_item {
  position: relative;
  text-align: center;
  width: 24%;
  margin-right: 10px;
  padding: 0 5px 5px;
  border-radius: 4px;
}

.empty_cart_coupon {
  padding: 15px 10px;
  background: #fff;
}

.empty_cart_coupon .mod_coupon_head {
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.empty_cart_coupon .mod_coupon_get {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  max-width: 150px;
  height: 30px;
  overflow: hidden;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  background-image: -webkit-linear-gradient(right, #f2270c, #ff9574);
  background-image: linear-gradient(-90deg, #f2270c, #ff9574);
  box-shadow: 0 5px 10px 0 rgba(233, 59, 61, 0.2);
  border-radius: 15px;
  padding: 0 15px;
}

.empty_cart_coupon .mod_coupon_title {
  display: flex;
  font-size: 15px;
  color: #333;
  line-height: 30px;
  margin-left: 0px;
}

.recomm_mod_title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
}

.recomm_mod_title:after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #ccc;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  left: 10px;
  right: 10px;
  top: 50%;
}

.recomm_mod_title .recomm_mod_title_text {
  z-index: 2;
  position: relative;
  padding: 0 15px;
  background-color: rgb(242, 242, 242);
}

.recomm_mod_title .recomm_mod_title_text:after,
.recomm_mod_title .recomm_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  transform: rotate(45deg);
}

.recomm_mod_title .recomm_mod_title_text:before {
  left: 0;
}

.recomm_mod_title .recomm_mod_title_text:after {
  right: 0;
}

.recomm_mod_title .recomm_mod_title_text:after,
.recomm_mod_title .recomm_mod_title_text:before {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -2px;
  width: 4px;
  height: 4px;
  background-color: #ccc;
  transform: rotate(45deg);
}

.mod_recommend_v2 .list li {
  background: #fff;
  position: relative;
  float: left;
  width: 50%;
  margin-bottom: 1px;
  padding: 15px 15px 0;
  box-sizing: border-box;
  border-radius: 10px;
}

.mod_recommend_v2 .list .cover img {
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
}

img {
  border: 0;
  vertical-align: top;
}

.mod_recommend_v2 .mod_tag {
  display: inline-block;
  vertical-align: middle;
  height: 14px;
}

.mod_recommend_v2 .mod_tag .tag_img,
.mod_recommend_v2 .mod_tag img {
  display: inline-block;
  height: 100%;
  margin-right: 1px;
}

.mod_recommend_v2 .list .rec_name {
  margin: 12px 0 4px;
  font-size: 12px;
  color: #333;
  line-height: 18px;
  height: 36px;
}

.mod_recommend_v2 .list .rec_name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.flex_wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.mod_recommend_v2 .list .flex_wrap .price {
  font-size: 12px;
  color: #e93b3d;
  margin-right: 3px;
  line-height: 20px;
}

.list {
  list-style: none;
}

.price em {
  font-size: 16px;
}
.activeBlack2 {
  display: block;
}
</style>