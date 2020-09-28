<template>
  <div class="good-detail">
    <div class="div11">
      <div class="good-back" :class="{ activeTitle: title == true }">
        <img src="../assets/左标.png" class="good-back-imgL" @click="goback" />
        <div class="good-detail-nav">
          <span
            :class="{ active: goodNav == 'good1' }"
            @click="goDetail('good1')"
            >商品</span
          >
          <span
            :class="{ active: goodNav == 'good2' }"
            @click="goDetail('good2')"
            >评价</span
          >
          <span
            :class="{ active: goodNav == 'good3' }"
            @click="goDetail('good3')"
            >推荐</span
          >
          <span
            :class="{ active: goodNav == 'good4' }"
            @click="goDetail('good4')"
            >详情</span
          >
        </div>
        <img
          src="../assets/更多.png"
          class="good-back-imgR"
          @click="blackclick"
        />
      </div>
    </div>
    <div class="good-black-nav" :class="{ activeBlack: blacknav == true }">
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

    <div class="detail-slideshow" v-if="goods">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img :src="goods.srcdetail1" alt />
        </swiper-slide>
        <swiper-slide>
          <img :src="goods.srcdetail2" alt />
        </swiper-slide>
        <swiper-slide>
          <img :src="goods.srcdetail3" alt />
        </swiper-slide>
        <swiper-slide>
          <img :src="goods.srcdetail4" alt />
        </swiper-slide>
        <swiper-slide>
          <img :src="goods.srcdetail5" alt />
        </swiper-slide>
        <swiper-slide>
          <img :src="goods.srcdetail6" alt />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="video">
        <a
          class="goods-video"
          href="https://wqs.jd.com/item/panorama.shtml?ptag=7001.1.160&skuId=31242256949&sceneval=2&jxsid=15968685681249388319"
        >
          <div class="goods-video-div1">
            <img src="../assets/盒子.png" alt />
          </div>
          <div class="goods-video-div2">全景图</div>
        </a>
        <a
          class="goods-video2"
          href="https://wqs.jd.com/item/video.shtml?ptag=7001.1.126&videourl=https%3A%2F%2Fvod.300hu.com%2F4c1f7a6atransbjngwcloud1oss%2F3c7ee978150978355905757185%2Fv.f20.mp4%3FdockingId%3D34d0a601-8d55-478e-b981-f94e095d98c5%26storageSource%3D3&sceneval=2&jxsid=15968685681249388319"
        >
          <div class="goods-video-div1">
            <img src="../assets/播放.png" alt />
          </div>
          <div class="goods-video-div2">00'52'</div>
        </a>
      </div>
    </div>
    <div class="box1"></div>
    <div class="good-detail-price">
      <div class="good-detail-priceL">
        <span>￥</span>
        <span class="good-detail-priceL-span">{{ goods.newprice }}</span
        >.00
      </div>
      <div class="good-detail-priceR">
        <div class="good-detail-priceR-divL">
          <img src="../assets/钱.png" alt />
          <p>降价提醒</p>
        </div>
        <div class="good-detail-priceR-divR">
          <img src="../assets/收藏.png" alt />
          <p>收藏</p>
        </div>
      </div>
    </div>
    <div class="good-introduce">{{ goods.introduce }}</div>
    <div class="ease">
      <div class="easeL">
        <span class="easeL-span1">
          <img src="../assets/放心购.png" alt />
        </span>
        <span>送运费险.</span>
        <span>闪电退款.</span>
        <span>极速审核</span>
      </div>
      <div class="easeR">
        <img src="../assets/3点.png" alt />
      </div>
    </div>
    <div class="discounts">
      <div class="discountsL">优惠</div>
      <div class="discountsR">
        <div class="sub-discountsR">
          <div>
            <span class="sub-discountsR-span1">满300减20</span>
            <span class="sub-discountsR-span1">满170减10</span>
            <span class="sub-discountsR-span2">新用户专享</span>
          </div>
          <div class="easeR">
            <img src="../assets/3点.png" alt />
          </div>
        </div>
        <div class="sub-discountsL">
          <span class="sub-discountsR-span1">多买优惠</span>
          <span>满1件，总价打九折；满2件，总价打八折</span>
        </div>
      </div>
    </div>
    <div class="loan">
      <div><span class="discountsL">白条</span>12期内免息</div>
      <div class="easeR">
        <img src="../assets/3点.png" alt />
      </div>
    </div>
    <div class="discounts">
      <div class="discountsL">已选</div>
      <div class="discountsR">
        <div class="sub-discountsR">
          <div>经典版-米色，1个</div>
          <div class="easeR">
            <img src="../assets/3点.png" alt />
          </div>
        </div>
        <div class="sub-discountsL">本商品支持保障服务，点击可选服务</div>
      </div>
    </div>
    <div class="discounts discounts1">
      <div class="discountsL">送至</div>
      <div class="discountsR">
        <div class="sub-discountsR">
          <div>北京朝阳区三环到四环之间</div>
          <div class="easeR">
            <img src="../assets/3点.png" alt />
          </div>
        </div>
        <div class="sub-discountsL">
          <span style="color: red">现货</span
          >现在至明日12：00前下单，预计8月11日20：00前发货，8月14日24：00前送达
        </div>
      </div>
    </div>
    <div class="loan">
      <div><span class="discountsL">运费</span>免运费</div>
      <div class="easeR">
        <img src="../assets/3点.png" alt />
      </div>
    </div>
    <div ref="Tag1" style="width: 100%">
      <componentA></componentA>
    </div>
    <div ref="Tag2">
      <componentB></componentB>
    </div>
    <div ref="Tag3">
      <componentC></componentC>
    </div>
    <div class="good-bottom" @click="goTop()">
      <img src="../assets/返回顶部 1.png" alt v-if="showgo" />
    </div>
    <div class="bottom-foot">
      <div class="foot1">
        <img src="../assets/详情页客服 .png" alt />
        客服
      </div>
      <div class="foot1">
        <img src="../assets/店铺.png" alt />
        店铺
      </div>
      <div class="foot1">
        <img src="../assets/购物车.png" alt="" />
        <router-link to="/shop-car"> 购物车 </router-link>
      </div>
      <div class="foot2" @click="addList(goods)">加入购物车</div>
      <div class="foot3">立即购买</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Evaluate from "./Evaluate.vue";
import Likes from "./Likes.vue";
import Products from "./Products.vue";
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        autoplay: {
          // delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
      },
      showgo: false,
      goods: [],
      goodNav: "good1",
      title: false,
      blacknav: false,
      distnum: 0,
    };
  },
  components: {
    componentA: Evaluate,
    componentB: Likes,
    componentC: Products,
  },
  created() {
    let url =
      "http://127.0.0.1:5500/src/data/goodlist.json?id=" + this.$route.query.id;
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
    this.menu();
  },
  mounted() {
    let that = this;
    // console.log(that.$refs.Tag1.offsetTop);
    // console.log(that.$refs.Tag2.offsetTop);
    // console.log(that.$refs.Tag3.offsetTop);
    window.onscroll = function () {
      let scrTop = document.documentElement.scrollTop;
      if (scrTop > 0 && scrTop < that.$refs.Tag1.offsetTop) {
        that.goodNav = "good1";
        that.title = true;
        that.showgo = true;
      } else if (
        scrTop >= that.$refs.Tag1.offsetTop &&
        scrTop < that.$refs.Tag2.offsetTop
      ) {
        that.title = true;
        that.showgo = true;
        that.goodNav = "good2";
      } else if (
        scrTop >= that.$refs.Tag2.offsetTop &&
        scrTop < that.$refs.Tag3.offsetTop
      ) {
        that.title = true;
        that.showgo = true;
        that.goodNav = "good3";
      } else if (scrTop >= that.$refs.Tag3.offsetTop) {
        that.title = true;
        that.showgo = true;
        that.goodNav = "good4";
      } else if (scrTop == 0) {
        that.title = false;
        that.showgo = false;
      }
      that.blacknav = false;
    };
  },
  methods: {
    goDetail(name) {
      if (name == "good1") {
        this.distnum = 0;
      } else if (name == "good2") {
        this.distnum = this.$refs.Tag1.offsetTop;
      } else if (name == "good3") {
        this.distnum = this.$refs.Tag2.offsetTop;
      } else if (name == "good4") {
        this.distnum = this.$refs.Tag3.offsetTop;
      }
      this.animate();
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
    addList(goods) {
      // console.log(goods)
      this.$store.commit("add", goods);
    },
    animate() {
      let that = this;
      clearInterval(this.timer);
      let timer = setInterval(function () {
        let step = (that.distnum - document.documentElement.scrollTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (document.documentElement.scrollTop == that.distnum) {
          clearInterval(timer);
        }
        window.scroll(0, document.documentElement.scrollTop + step);
      }, 10);
    },
    menu() {
      window.scrollTo(0, 0);
    },

    blackclick() {
      if (this.blacknav == false) {
        this.blacknav = true;
      } else if (this.blacknav == true) {
        this.blacknav = false;
      }
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped>
.good-detail {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  background-color: #f3f3f3;
}
.detail-slideshow {
  height: 400px;
  width: 100%;
  position: absolute;
  top: 0;
}
.detail-slideshow img {
  height: 400px;
  width: 100%;
}
.div11 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
.swiper-pagination {
  width: 10%;
  padding-left: 0.5rem;
  border-bottom-left-radius: 0.7rem;
  border-top-left-radius: 0.7rem;
  background-color: #999;
  color: white;
}
.good-back {
  transform: translateZ(0);
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  /* width: 375px; */
  width: 100%;
}
.good-back img {
  background: gray;
  border-radius: 50%;
  width: 2rem;
  margin: 0.6rem;
}
.good-detail-nav {
  display: flex;
  flex-grow: 1;
  align-items: center;
  /* justify-items: center; */
  display: none;
  padding-left: 2rem;
}
.good-detail-nav span {
  text-align: center;
  padding-bottom: 0.5rem;
  /* padding-left: 0.5rem; */
  margin: 0.5rem;
  margin-left: 1rem;
}
.active {
  border-bottom: 2px solid red;
}
.activeTitle {
  background-color: white;
}
.activeTitle img {
  background-color: white;
}
.activeTitle .good-detail-nav {
  display: block;
}
.box1 {
  width: 100%;
  height: 400px;
}
.box2 {
  width: 100%;
  height: 600px;
  background-color: tomato;
}
.box3 {
  width: 100%;
  height: 600px;
  background-color: rgb(199, 158, 151);
}
.box4 {
  width: 100%;
  height: 600px;
  background-color: rgb(122, 17, 87);
}
.box5 {
  width: 100%;
  height: 6000px;
  background-color: rgb(176, 192, 30);
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
.activeBlack {
  display: block;
}
.good-black-nav-css {
  border: 10px solid transparent;
  position: fixed;
  right: 0.8rem;
  top: 2.5rem;
  z-index: 99;
  border-bottom-color: black;
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
.video {
  width: 50%;
  position: absolute;
  bottom: 1.5rem;
  right: 25%;
  z-index: 999;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.goods-video {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 47%;
  padding: 0.2rem;
  margin-right: 6%;
  background: rgb(194, 192, 192);
  border-radius: 20px;
}
.goods-video2 {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 47%;
  padding: 0.2rem;
  background: rgb(194, 192, 192);
  border-radius: 20px;
}
.goods-video-div1 {
  background: tomato;
  border-radius: 50%;
  width: 30%;
  padding: 0.2rem;
  display: flex;
  align-content: center;
  justify-content: center;
}
.goods-video-div2 {
  font-size: 0.8rem;
  text-align: center;
  flex-grow: 1;
  padding: 0.2rem;
}
.goods-video-div1 img {
  width: 1rem;
  height: 1rem;
}
.good-detail-price {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-color: white;
  padding: 0.8rem;
  align-items: center;
}
.good-detail-price p {
  font-size: 0.8rem;
}
.good-detail-priceL {
  color: red;
}
.good-detail-priceL-span {
  font-size: 1.5rem;
  font-weight: 900;
}
.good-detail-priceR {
  display: flex;
  flex-flow: row;
}
.good-detail-priceR img {
  width: 1.5rem;
}
.good-detail-priceR-divL {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-right: 1rem;
}
.good-detail-priceR-divR {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.good-introduce {
  background-color: white;
  padding: 0.8rem;
  padding-top: 0;
  font-weight: 900;
}
.ease {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-color: rgb(251, 240, 253);
}
.easeL {
  display: flex;
  flex-flow: row;
  /* width: 70%; */
  align-items: center;
  font-size: 0.8rem;
  color: red;
}
.easeL span {
  width: 20%;
}
.easeL img {
  width: 100%;
}
.easeL-span1 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.easeR {
  margin-right: 0.5rem;
}
.discounts {
  display: flex;
  flex-flow: row;
  background-color: white;
  border-top-right-radius: 0.7rem;
  border-top-left-radius: 0.7rem;
  margin-top: 1rem;
}
.discountsL {
  font-weight: 900;
  padding: 1rem;
}
.discountsR {
  flex-grow: 1;
}
.sub-discountsR {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sub-discountsR-span1 {
  padding: 0 0.3rem;
  font-size: 0.8rem;
  border: 1px solid red;
  margin-right: 0.3rem;
  color: red;
}
.sub-discountsR-span2 {
  padding: 0 0.3rem;
  font-size: 0.8rem;
  background-color: red;
  margin-right: 0.3rem;
  color: white;
}
.sub-discountsL {
  font-size: 0.8rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f3f3f3;
}
.loan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  margin-bottom: 1rem;
}
.discounts1 {
  margin-top: 0;
  border-radius: 0;
}
.good-bottom {
  position: fixed;
  bottom: 10%;
  right: 5%;
  z-index: 9999;
}
.bottom-foot {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-flow: row;
  width: 100%;
  align-items: center;
  z-index: 99999;
  background-color: white;
}
.foot1 {
  display: flex;
  flex-flow: column;
  /* justify-content: center; */
  align-items: center;
  font-size: 0.8rem;
  width: 15%;
}
.foot1 img {
  width: 1.5rem;
}
.foot2 {
  background-color: red;
  color: white;
  width: 30%;
  margin-right: 2%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
}
.foot3 {
  background-color: rgb(255, 190, 13);
  color: white;
  width: 25%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 1rem;
}
</style>
