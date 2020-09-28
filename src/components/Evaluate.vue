<template>
  <div>
    <div id="evaluate">
      <div class="title">
        <div class="title1">
          评价
          <span>6万+</span>
        </div>
        <div class="title2">
          好评度99%
          <img src="../assets/右标.png" alt />
        </div>
      </div>
      <div class="sub-title">
        <div>柔软舒服(420)</div>
        <div>安装简便(25)</div>
        <div>简单大方(24)</div>
        <div>美观大方(10)</div>
        <div>毫无异味(8)</div>
        <div>操作便捷(6)</div>
      </div>
      <div class="evaluate-detail" v-for="item in list" :key="item.id">
        <div class="evaluate-detail-name">
          <div class="evaluate-detail-name-div1">
            <div class="evaluate-detail-name-sub-div1">
              <img :src="item.src" alt />
            </div>
            <span>{{item.name}}</span>
            <!-- <span>{{item.lv}}</span> -->
          </div>
          <div class="time">{{item.time}}</div>
        </div>
        <div class="content1">{{item.content}}</div>
        <div class="evaluate-detail-img">
          <div>
            <img :src="item.src1" alt />
          </div>
          <div>
            <img :src="item.src2" alt />
          </div>
          <div>
            <img :src="item.src3" alt />
          </div>
        </div>
      </div>
      <div class="box1">
        <div class="box2">
          查看全部评价
          <img src="../assets/右标.png" alt />
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="sub-box3-div">问答</div>
      <div class="sub-box3">查看全部问答 <img src="../assets/右标.png" alt /></div>
    </div>
    <div class="box4">
      <div><span class="box4-span">问</span>大家用着怎么样？效果可以吗？有没有和其他品牌... </div>
      <div class="sub-box4">共2个回答</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          name: "燃情岁月动起来",
          src: require("../assets/tou1.jpg"),
          lv: "",
          time: "2020-06-25",
          content:
            "味道：完全没有味道，不用担心面料：网状结构设计，透气性强，黑色显得十分大方支撑：结实给力，承受力强弹性很好舒适度：比较舒适，坐着紧贴腰部",
          src1: require("../assets/tou2.webp"),
          src2: require("../assets/tou3.webp"),
          src3: require("../assets/tou4.webp"),
        },
        {
          id: 1,
          name: "燃情岁月动起来",
          src: require("../assets/tou1.jpg"),
          lv: "",
          time: "2020-06-25",
          content:
            "味道：完全没有味道，不用担心面料：网状结构设计，透气性强，黑色显得十分大方支撑：结实给力，承受力强弹性很好舒适度：比较舒适，坐着紧贴腰部",
          src1: require("../assets/tou2.webp"),
          src2: require("../assets/tou3.webp"),
          src3: require("../assets/tou4.webp"),
        },
      ],
    };
  },
};
</script>
<style scoped>
#evaluate {
  background-color: white;
  border-radius: 1rem;
  width: 100%;
}
.title {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
.title1 {
  border-left: 3px solid red;
  margin: 1rem;
  padding-left: 0.3rem;
  font-weight: 900;
}
.title1 span {
  font-size: 0.7rem;
}
.title2 {
  display: flex;
  align-items: center;
}
.title2 img {
  width: 2rem;
  margin-right: 0.5rem;
}
.sub-title {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
}
.sub-title div {
  padding: 0.5rem;
  background: rgb(235, 213, 218);
  margin: 0.6rem;
  border-radius: 1.5rem;
}
.evaluate-detail {
  display: flex;
  flex-flow: column;
}
.evaluate-detail-name {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}
.evaluate-detail-name-div1 {
  display: flex;
  flex-flow: row;
  align-items: center;
}
.evaluate-detail-name-sub-div1 {
  width: 2rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 1rem;
}
.evaluate-detail-name-sub-div1 img {
  width: 100%;
}
.time {
  color: #999;
  margin-right: 1rem;
}
.content1 {
  margin-left: 1rem;
}
.evaluate-detail-img {
  display: flex;
  width: 100%;
  overflow: auto;
  flex-flow: row;
  padding-left: 1rem;
  margin-top: 1rem;
}
.evaluate-detail-img div {
  width: 20%;
  margin-right: 0.5rem;
}
.evaluate-detail-img img {
  width: 100%;
}
.box1 {
  margin-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 1rem;
}
.box1 img {
  width: 2rem;
}
.box2{
  border: 1px solid #999;
  display: flex;
  align-items: center;
  padding-left: .5rem;
  border-radius: 1rem;
}
.box3{
  display: flex;
  justify-content: space-between;
  margin-top: .3rem;
  background-color: white;
  align-items: center;
  border-top-left-radius: 1rem;
   border-top-right-radius: 1rem;
  padding: .5rem;
  padding-left: 1rem;
}
.sub-box3{
  display: flex;
  align-items: center;
  color: #999;
}
.sub-box3 img{
  width: 2rem;
}
.sub-box3-div{
  border-left: 3px solid red;
  padding-left: .5rem;
}
.box4{
  font-size: .8rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-bottom: 1rem;
  border-bottom-left-radius: 1rem;
   border-bottom-right-radius: 1rem;
   margin-bottom: 1rem;
}
.box4-span{
  background-color: rgb(238, 157, 142);
  color: white;
  margin-right: .3rem;
}
.sub-box4{
  margin-right: 1rem;
}
</style>