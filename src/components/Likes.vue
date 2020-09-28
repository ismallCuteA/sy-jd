
<template>
  <div class="div">
    <div class="box1">猜你喜欢</div>
    <div class="box2-like">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="show-time">
          <div v-for="item in list1" :key="item.id" class="show">
            <img :src="item.src" alt="" />
            <p>{{ item.content }}</p>
            <span>￥</span><span class="span1">{{ item.price }}</span
            ><span>.00</span>
          </div>
        </swiper-slide>
        <swiper-slide class="show-time">
          <div v-for="item in list2" :key="item.id" class="show">
            <img :src="item.src" alt="" />
            <p>{{ item.content }}</p>
            <span>￥</span><span class="span1">{{ item.price }}</span
            ><span>.00</span>
          </div>
        </swiper-slide>
        <swiper-slide class="show-time">
          <div v-for="item in list3" :key="item.id" class="show">
            <img :src="item.src" alt="" />
            <p>{{ item.content }}</p>
            <span>￥</span><span class="span1">{{ item.price }}</span
            ><span>.00</span>
          </div>
        </swiper-slide>
        <swiper-slide class="show-time">
          <div v-for="item in list4" :key="item.id" class="show">
            <img :src="item.src" alt="" />
            <p>{{ item.content }}</p>
            <span>￥</span><span class="span1">{{ item.price }}</span
            ><span>.00</span>
          </div>
        </swiper-slide>
        <swiper-slide class="show-time">
          <div v-for="item in list5" :key="item.id" class="show">
            <img :src="item.src" alt="" />
            <p>{{ item.content }}</p>
            <span>￥</span><span class="span1">{{ item.price }}</span
            ><span>.00</span>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination2" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
      },
      list1: [
        {
          id: 0,
          src: require("../assets/xx1.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 1,
          src: require("../assets/xx1.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 2,
          src: require("../assets/xx1.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 3,
          src: require("../assets/xx1.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 4,
          src: require("../assets/xx1.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 5,
          src: require("../assets/xx1.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
      ],
      list2: [
        {
          id: 6,
          src: require("../assets/xx2.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 7,
          src: require("../assets/xx2.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 8,
          src: require("../assets/xx2.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 9,
          src: require("../assets/xx2.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 10,
          src: require("../assets/xx2.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 11,
          src: require("../assets/xx2.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
      ],
      list3: [
        {
          id: 0,
          src: require("../assets/xx3.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 1,
          src: require("../assets/xx3.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 2,
          src: require("../assets/xx3.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 3,
          src: require("../assets/xx3.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 4,
          src: require("../assets/xx3.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
        {
          id: 5,
          src: require("../assets/xx3.webp"),
          content: "麦塔奇(Microtouch)人体工程学腰垫靠垫京东配送",
          price: 125,
        },
      ],
      list4: [
        {
          id: 6,
          src: require("../assets/xx4.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 7,
          src: require("../assets/xx4.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 8,
          src: require("../assets/xx4.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 9,
          src: require("../assets/xx4.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 10,
          src: require("../assets/xx4.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 11,
          src: require("../assets/xx4.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
      ],
      list5: [
        {
          id: 6,
          src: require("../assets/xx5.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 7,
          src: require("../assets/xx5.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 8,
          src: require("../assets/xx5.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 9,
          src: require("../assets/xx5.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 10,
          src: require("../assets/xx5.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
        {
          id: 11,
          src: require("../assets/xx5.webp"),
          content: "米乔人体工学腰垫 汽车腰靠座椅靠垫护腰京东配送",
          price: 199,
        },
      ],
    };
  },
};
</script>
<style  scoped>
.div {
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
}
.box1 {
  padding-left: 0.3rem;
  border-left: 3px solid red;
  margin-bottom: 1rem;
}
.box2-like {
  position: relative;
  padding-bottom: 1rem;
}
.show-time {
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.show {
  width: 33%;
}
.show p {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.8rem;
}
.show img {
  width: 100%;
}
.show span {
  color: red;
}
.span1 {
  font-size: 1.5rem;
}
.swiper-pagination2 {
  width: 50%;
  position: absolute;
  left: 30%;
}
</style>