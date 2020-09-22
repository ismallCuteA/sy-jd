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
* {
  margin: 0;
  padding: 0;
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
.floatImg {
  width: 20%;
}
.floatImg img {
  width: 60px;
}
</style>
