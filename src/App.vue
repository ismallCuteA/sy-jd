<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {};
</script>
<style >
#div,
.jindongBox {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
.first-slideshow .swiper-pagination-bullet {
  width: 10px !important;
  height: 5px !important;
  border-radius: 5px !important;
  margin: 0 5px !important;
}
.first-slideshow .swiper-pagination-bullet-active {
  width: 15px !important;
  height: 5px !important;
  background-color: white !important;
}
.second-slideshow .swiper-pagination-bullet {
  width: 10px !important;
  height: 5px !important;
  border-radius: 5px !important;
  margin: 0 5px !important;
}
.second-slideshow .swiper-pagination-bullet-active {
  width: 15px !important;
  height: 5px !important;
  background-color: orangered !important;
}
.detail-slideshow .swiper-pagination-fraction {
  display: flex;
  flex-flow: row;
  position: absolute;
  bottom: 1rem !important;
  left: 90% !important;
}
.box2-like .swiper-pagination-bullet {
  width: 15px;
  height: 5px;
  border-radius: 3px;
}
</style>
