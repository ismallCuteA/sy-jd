<template>
  <div class="panelsbox">
    <div class="leftpanels">
      <ul>
        <li
          v-for="(item, id) in tabslabel"
          @click="getpanel(item, item.id)"
          :class="item.active ? 'active' : ''"
          :key="id"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="rightpanels">
      <ul>
        <component :is="panellist" :content="content"></component>
        <recommend></recommend>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import recommend from "../components/recommend.vue";

export default {
  data() {
    return {
      cls: "",
      reclist: [],
      tags: [],
      tabslabel: [],
      panellist: "recommend",
      content: {
        item: "",
        branchlist: "",
        rankicon: "",
        arrowicon: "",
        reclist: [],
      },
      id: "1",
      index: "",
    };
  },
  methods: {
    //点击左侧分类
    //传递商品面数据
    getpanel(item, id) {
      this.cls = id;
      let that = this;
      let url = "http://127.0.0.1:5500/src/data/panel" + id + ".json";
      axios
        .get(url)
        .then(function (response) {
          if (response.status == 200) {
            // console.log(response)
            that.content.branchlist = response.data.branchlist;
            that.content.arrowicon = response.data.arrowicon;
            that.content.title = response.data.title;
            // that.content.reclist = response.data.reclist;
            that.content.branchlist2 = response.data.branchlist2;
            that.content.branchlist3 = response.data.branchlist3;
            that.content.branchlist4 = response.data.branchlist4;
            that.content.branchlist5 = response.data.branchlist5;
            that.content.branchlist6 = response.data.branchlist6;
            that.content.branchlist7 = response.data.branchlist7;
            that.content.branchlist8 = response.data.branchlist8;
            that.content.branchlist9 = response.data.branchlist9;
            that.content.branchlist10 = response.data.branchlist10;
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      //点击左侧分类
      this.tabslabel.forEach((val, ind) => {
        if (id == ind + 1) {
          val.active = true;
        } else {
          val.active = false;
        }
      });
    },
  },

  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/panel1.json";
    axios
      .get(url)
      .then(function (response) {
        if (response.status == 200) {
          // console.log(response)
          that.content.branchlist = response.data.branchlist;
          that.content.arrowicon = response.data.arrowicon;
          that.content.title = response.data.title;
          that.content.reclist = response.data.reclist;
          that.content.branchlist2 = response.data.branchlist2;
          that.content.branchlist3 = response.data.branchlist3;
          that.content.branchlist4 = response.data.branchlist4;
          that.content.branchlist5 = response.data.branchlist5;
          that.content.branchlist6 = response.data.branchlist6;
          that.content.branchlist7 = response.data.branchlist7;
          that.content.branchlist8 = response.data.branchlist8;
          that.content.branchlist9 = response.data.branchlist9;
          that.content.branchlist10 = response.data.branchlist10;
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    //获取默认的分类数据
    let url2 = "http://127.0.0.1:5500/src/data/list.json";
    axios
      .get(url2)
      .then(function (response) {
        that.tabslabel = response.data.tabslabel;
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  mounted() {
    //设置滚动盒子的高度
    const leftpanels = document.querySelector(".leftpanels");
    const rightpanels = document.querySelector(".rightpanels");
    const bodyheight = document.documentElement.clientHeight;
    leftpanels.style.height = bodyheight - 57 + "px";
    rightpanels.style.height = bodyheight - 57 + "px";
  },
  components: {
    recommend: recommend,
  },
};
</script>

<style lang="stylus" scoped>
.panelsbox {
  display: flex;

  .leftpanels {
    width: 22%;
    overflow-y: scroll;
    text-align: center;
    padding-top: 40px;

    li {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #fff;
      color: #333;
      background: #f8f8f8;
      font-size: 14px;
    }

    .active {
      background: #fff;
      color: #e93b3d;
    }
  }

  .rightpanels {
    width: 78%;
    overflow-y: scroll;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        justify-content: center;
        align-items: center;
        font-size: 15px;

        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>


