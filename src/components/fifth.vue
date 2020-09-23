<template>
  <div class="search-box-all">
    <div class="search-box">
      <div class="search-top">
        <div class="search-top-imgbox" @click="$router.go(-1)">
          <img src="../assets/left.png" alt />
        </div>
        <div class="search-top-inputbox">
          <div class="search-top-inputbox-img">
            <img src="../assets/search.png" alt />
          </div>
          <input type="text" placeholder="欧普照明" class="top-title-input" autofocus="autofocus" />
        </div>
        <div class="search-top-text">搜索</div>
      </div>
    </div>
    <div class="search-concent">
      <div class="hot-search">热门搜索</div>
      <div class="hot-search-concent">
        <div class="hot-search-concent-box">
          <a
            href="https://so.m.jd.com/ware/search.action?keyword=%E7%BD%97%E6%B1%89%E6%9E%9C%E8%8C%B6&searchFrom=home&sf=15&as=0"
            class="hot-search-concent-box-color"
            v-for="item in list"
            :key="item.id"
          >{{item}}</a>
          <a
            href
            class="hot-search-concent-box-colored"
            v-for="item in lists"
            :key="item.id"
          >{{item}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["罗汉果茶", "自动吸尘器", "面膜"],
      lists: [
        "养生壶",
        "黄金项链",
        "无线网卡",
        "薰衣草精油",
        "壁挂音箱",
        "电话交换机",
        "真丝睡衣",
        "电视柜",
      ],
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.search-box-all {
  height: 100%;
  background: rgb(246, 246, 246);
}
.search-box {
  padding: 10px;
  background: #fff;
  display: flex;
}
.search-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  padding-right: 30px;
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
  width: 55px;
  height: 28px;
  background: #e93b3d;
  border-radius: 4px;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  color: #fff;
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
</style>