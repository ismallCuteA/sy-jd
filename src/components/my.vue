<template>
  <!-- 个人信息页面 -->
  <div>
    <!-- 返回顶部的定位 -->
    <a id="top"></a>
    <!-- 顶部 -->
    <div class="header">
      <i
        class="iconfont icon-back"
        style="color: #909295; font-size: 25px; margin: 0 10px"
        @click="back"
      ></i>
      <span class="headerText">我的京东</span>
      <i
        class="iconfont icon-more"
        style="color: #909295; font-size: 25px; margin: 0 10px"
      ></i>
    </div>

    <!-- 个人资料卡 -->
    <div class="card">
      <div class="touxiang">
        <img src="../assets/touxiang.jpg" alt />
      </div>
      <div class="userInfo">
        <i
          class="iconfont icon-bianji"
          style="color: #fff; font-size: 12px"
        ></i>
        <span class="userInfoText">用户名：{{ userName }}</span>
        <div class="tongpai">
          <i
            class="iconfont icon-JD"
            style="color: #f0b576; font-size: 18px; margin-right: 5px"
          ></i>
          <span class="tongpaiText">铜牌会员</span>
        </div>
      </div>
      <div class="shezhi" @click="toManagement">
        <i
          class="iconfont icon-setting"
          style="color: #83231b; font-size: 16px"
        ></i>
        <span class="shezhiText">账号管理</span>
      </div>
    </div>

    <!-- 条框1 -->
    <div class="oneBox">
      <div class="oneBoxItem">
        <i
          class="iconfont icon-xinyongqiahuankuan"
          style="color: #dd9e58; font-size: 20px"
        ></i>
        <span class="oneBoxItemText">待付款</span>
      </div>
      <div class="oneBoxItem">
        <i
          class="iconfont icon-kuaidi"
          style="color: #dd9e58; font-size: 20px"
        ></i>
        <span class="oneBoxItemText">待收货</span>
      </div>
      <div class="oneBoxItem">
        <i
          class="iconfont icon-huabanfuben"
          style="color: #dd9e58; font-size: 20px"
        ></i>
        <span class="oneBoxItemText">退换/售后</span>
      </div>
      <div class="oneBoxItem" @click="toOrderList">
        <i
          class="iconfont icon-dingdan1"
          style="color: #e93b3d; font-size: 20px"
        ></i>
        <span class="oneBoxItemText">全部订单</span>
      </div>
    </div>

    <!-- 条框2 -->
    <div class="twoBox">
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">0</span>
          <span class="twoBoxItemTextR">张</span>
        </div>
        <span class="twoBoxItemText">京东券</span>
      </div>
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">0</span>
          <span class="twoBoxItemTextR">元</span>
        </div>
        <span class="twoBoxItemText">开通白条</span>
      </div>
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">5</span>
          <span class="twoBoxItemTextR">个</span>
        </div>
        <span class="twoBoxItemText">京豆</span>
      </div>
      <div class="twoBoxItem">
        <div>
          <span class="twoBoxItemTextRBig">0</span>
          <span class="twoBoxItemTextR">张</span>
        </div>
        <span class="twoBoxItemText">礼品卡</span>
      </div>
      <div class="twoBoxItem">
        <i
          class="iconfont icon-qianbao"
          style="color: #e93b3d; font-size: 20px"
        ></i>
        <span class="twoBoxItemText">全部资产</span>
      </div>
    </div>

    <!-- 条框3 -->
    <div class="threeBox">
      <div class="threeBoxItem">
        <span class="threeBoxItemNum">0</span>
        <span class="threeBoxItemText">关注的商品</span>
      </div>
      <div class="threeBoxItem">
        <span class="threeBoxItemNum">0</span>
        <span class="threeBoxItemText">关注的店铺</span>
      </div>
      <div class="threeBoxItem">
        <span class="threeBoxItemNum">0</span>
        <span class="threeBoxItemText">我的足迹</span>
      </div>
    </div>

    <!-- 条框4 -->
    <div class="fourBox">
      <div class="fourBoxItem">
        <svg class="icon" aria-hidden="true" style="font-size: 25px">
          <use xlink:href="#icon-hongbao"></use>
        </svg>
        <span class="fourBoxItemText">用户福利</span>
      </div>
      <div class="fourBoxItem">
        <svg class="icon" aria-hidden="true" style="font-size: 25px">
          <use xlink:href="#icon-tubiaozhizuomoban_huoche"></use>
        </svg>
        <span class="fourBoxItemText">京东火车票</span>
      </div>
      <div class="fourBoxItem">
        <svg class="icon" aria-hidden="true" style="font-size: 25px">
          <use xlink:href="#icon-yuyue1"></use>
        </svg>
        <span class="fourBoxItemText">我的预约</span>
      </div>
      <div class="fourBoxItem">
        <svg class="icon" aria-hidden="true" style="font-size: 25px">
          <use xlink:href="#icon-yingyong"></use>
        </svg>
        <span class="fourBoxItemText">应用推荐</span>
      </div>
      <div class="fourBoxItem">
        <svg class="icon" aria-hidden="true" style="font-size: 25px">
          <use xlink:href="#icon-zhaofangzi"></use>
        </svg>
        <span class="fourBoxItemText">京东通信营业厅</span>
      </div>
      <div class="fourBoxItem">
        <svg class="icon" aria-hidden="true" style="font-size: 25px">
          <use xlink:href="#icon-tubiaozhizuomoban_feiji"></use>
        </svg>
        <span class="fourBoxItemText">京东机票</span>
      </div>
      <div class="fourBoxItem">
        <svg class="icon" aria-hidden="true" style="font-size: 25px">
          <use xlink:href="#icon-tubiaozhizuomoban_jiudian"></use>
        </svg>
        <span class="fourBoxItemText">京东酒店</span>
      </div>
      <div class="fourBoxItem"></div>
    </div>

    <!-- 条框5 -->
    <div class="fiveBox">
      <span class="fiveBoxText">客户服务</span>
      <i class="iconfont icon-right" style="color: #cccccc; margin: 0 5px"></i>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      <ul class="bottomOne">
        <li class="bottomOneItem" @click="toIndex">{{ userName }}</li>
        <li class="bottomOneItem" @click="outLogin">退出</li>
        <li class="bottomOneItem">反馈</li>
        <li class="bottomOneItemLast" @click="goAnchor">返回顶部</li>
      </ul>
      <ul class="bottomTwo">
        <li class="bottomTwoItem">
          <img src="../assets/kehuduan.png" alt />
        </li>
        <li class="bottomTwoItem">
          <img src="../assets/guojiban.png" alt />
        </li>
        <li class="bottomTwoItem">
          <img src="../assets/diannaoban.png" alt />
        </li>
      </ul>
      <div class="bottomText">Copyright &copy; 2018 京东版权所有</div>
    </div>

    <div class="box"></div>

    <!-- 底部导航栏 -->
    <div class="tab">
      <div class="tabItem" @click="toIndex">
        <i
          class="iconfont icon-home"
          style="color: #7c7e86; font-size: 28px"
        ></i>
        <div class="tabTit">首页</div>
      </div>
      <div class="tabItem" @click="toClassify">
        <i
          class="iconfont icon-sousuoleimu"
          style="color: #7c7e86; font-size: 28px"
        ></i>
        <div class="tabTit">分类</div>
      </div>
      <div class="tabItem" @click="toDiscover">
        <i
          class="iconfont icon-faxian"
          style="color: #7c7e86; font-size: 28px"
        ></i>
        <div class="tabTit">发现</div>
      </div>
      <div class="tabItem" @click="toCart">
        <i
          class="iconfont icon-cart"
          style="color: #7c7e86; font-size: 28px"
        ></i>
        <div class="tabTit">购物车</div>
      </div>
      <div class="tabItem">
        <i
          class="iconfont icon-my_fill_light"
          style="color: #f23030; font-size: 28px"
        ></i>
        <div class="tabTitR">我的</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.userName = localStorage.userName;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goAnchor() {
      app.scrollIntoView();
    },
    outLogin() {
      localStorage.clear();
      location.reload();
      this.$router.push({ path: "/forth" });
    },
    toIndex() {
      this.$router.push({ path: "/" });
    },
    toClassify() {
      this.$router.push({ path: "/classify" });
    },
    toDiscover() {
      this.$router.push({ path: "/discover" });
    },
    toCart() {
      this.$router.push({ path: "/cart" });
    },
    toManagement() {
      this.$router.push({ path: "/accountManagement" });
    },
    toOrderList() {
      this.$router.push({ path: "/orderList" });
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 6vh;
  background-color: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.headerText {
  color: black;
  font-size: 1rem;
}

.card {
  width: 96%;
  height: 15vh;
  margin: 2%;
  border-radius: 5px;
  background: linear-gradient(to right, #eb3c3c, #ff7459); /* 标准的语法 */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.touxiang {
  flex: 0 0 auto;
}
.touxiang img {
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  border: 1px solid #f7b0af;
  margin: 0 15px;
}

.userInfo {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.userInfoText {
  color: #f2f2f2;
  font-size: 12px;
  margin-top: 5px;
}
.tongpai {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.tongpaiText {
  font-size: 12px;
  color: white;
}

.shezhi {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10vh;
}
.shezhiText {
  font-size: 12px;
  color: #83231b;
}

.oneBox {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  margin-top: 20px;
}
.oneBoxItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.oneBoxItemText {
  font-size: 12px;
  color: #666666;
  line-height: 20px;
}

.twoBox {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  margin-top: 20px;
}
.twoBoxItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.twoBoxItemTextRBig {
  color: #e4393c;
  font-size: 16px;
}
.twoBoxItemTextR {
  color: #e4393c;
  font-size: 12px;
}
.twoBoxItemText {
  font-size: 12px;
  color: #666666;
  line-height: 30px;
}

.threeBox {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  margin-top: 20px;
}
.threeBoxItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.threeBoxItemNum {
  font-size: 16px;
  font-weight: 700;
}
.threeBoxItemText {
  font-size: 12px;
  color: #666666;
  line-height: 30px;
}

.fourBox {
  width: 100%;
  height: 18vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  margin-top: 20px;
}
.fourBoxItem {
  display: flex;
  flex-direction: column;
  flex: 1 1 25%;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  /* // margin: 10px 0; */
}
.fourBoxItemText {
  font-size: 12px;
  color: #666666;
  line-height: 30px;
}

.fiveBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4vh;
  background-color: #ffffff;
  margin-top: 20px;
}
.fiveBoxText {
  color: #333333;
  font-size: 14px;
  margin-left: 10px;
}

.bottom {
  background-color: white;
  margin-top: 20px;
}
.bottomOne {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 4.26667vw 5.33333vw;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
}
.bottomOneItem {
  font-size: 3.73333vw;
  color: #96979a;
  text-align: center;
  width: 25%;
  border-right: 1px solid #96979a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bottomOneItemLast {
  font-size: 3.73333vw;
  color: #96979a;
  text-align: center;
  width: 25%;
}

.bottomTwo {
  display: flex;
  width: 100%;
  max-width: 640px;
  box-sizing: border-box;
  justify-content: space-around;
  border-bottom: 1px solid #e5e5e5;
  padding: 1.06667vw 2vw;
}
.bottomTwoItem {
  width: 33.3%;
  flex: 0 0 auto;
}
.bottomTwoItem img {
  width: 60%;
  margin: 0 20%;
}

.bottomText {
  color: #848689;
  font-size: 12px;
  padding: 2vw 0;
  text-align: center;
}

.box {
  width: 100%;
  height: 8vh;
}
.tab {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 640px;
  height: 8%;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  background-color: white;
}
.tabItem {
  width: 20%;
  height: 72%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tabTit {
  color: #7c7e86;
  font-size: 12px;
}
.tabTitR {
  color: #f23030;
  font-size: 12px;
}
</style>
