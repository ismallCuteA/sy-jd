<template>
  <div>
    <p>3</p>
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
        <a href="https://wq.jd.com/mcoss/wxmall/home?ptype=2&ptag=138097.1.6&sceneval=2&fromM=1">
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
export default {};
</script>