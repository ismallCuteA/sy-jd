<template>
    <div class="branch1" v-if="content">
      <!-- 分类头部一 -->
      <div class="branchtop" v-if="content.branchlist">
        <h4>{{content.branchlist[0].title}}</h4>
        <div class="middle"></div>
        <div class="right-info">
            <div class="rank-icon">
              <img :src="content.branchlist[0].rankicon">
            </div>
            <span class="rank">{{content.branchlist[0].rank}}</span>
            <div class="arrow-icon">
              <img :src="content.branchlist[0].arrowicon">
            </div>
        </div>
      </div>

      <!-- 分类主体一 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist[0].reclist" :key="item.label" >
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>
      
      <!-- 分类头部二 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist2[0].title}}</h4>
      </div>

      <!-- 分类主体二 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist2[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部三 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist3[0].title}}</h4>
      </div>

      <!-- 分类主体三 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist3[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部四 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist4[0].title}}</h4>
      </div>

      <!-- 分类主体四 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist4[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部五 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist5[0].title}}</h4>
      </div>

      <!-- 分类主体五 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist5[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部六 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist6[0].title}}</h4>
      </div>

      <!-- 分类主体六 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist6[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部七 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist7[0].title}}</h4>
      </div>

      <!-- 分类主体七 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist7[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部八 -->
      <div class="branchtop second" v-if="content.branchlist8">
        <h4>{{content.branchlist8[0].title}}</h4>
      </div>

      <!-- 分类主体八 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist8[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部九 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist9[0].title}}</h4>
      </div>

      <!-- 分类主体九 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist9[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>

      <!-- 分类头部十 -->
      <div class="branchtop second" v-if="content.branchlist">
        <h4>{{content.branchlist10[0].title}}</h4>
      </div>

      <!-- 分类主体十 -->
      <div class="branchbody" v-if="content.branchlist">
        <div class="branchcontent" v-for="item in content.branchlist10[0].reclist" :key="item.label">
          <div class="branchimage">
            <img :src="item.img" >
          </div>
          <div class="branchlabel">{{item.label}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:['content'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.branch1 {
  margin: 60px 7px auto;
}

.branchtop {
  display: flex;
  flex-direction: row;
  height: 14px;
  align-content: center;
}

.branchtop h4 {
  font-size: 13px;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1em;
  font-weight: 700;
}

.second h4 {
  font-size: 13px;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1em;
  font-weight: 700;
  margin-top:5px;
}

.branchtop .middle{
    flex-grow: 1;
}

.right-info{
    display: flex;
    font-size: 10px;
    flex-direction: row;
    align-items: center;
    margin-right: -3%;
}

.right-info .rank-icon{
    display: block;
    line-height: 0;
    width: 12px;
    height: 12px;
}

.right-info .rank-icon img{
  width: 100%;
}

.right-info .arrow-icon{
    display: block;
    line-height: 0;
    width: 21px;
    height: 21px;
    margin-left: -1px;
    
}

.right-info .arrow-icon img{
  width: 100%;
}

.right-info span{
    display: block;
    color: #848689;
    font-size: 12px;
    line-height: 12px;
    margin-left: 4px;
    position: relative;
    top: 1px;
}

.branchbody{
    display: flex;
    flex-direction: row;
    overflow: hidden;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: space-between;
    margin:17px 1px auto;
}

.branchbody:after{
    content:"";
    display: block;
    visibility: hidden;
    width: 33%;
}

.branchcontent{
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.branchimage img{
    width: 65px;
    height: 65px;
    align-items: center;
}

.branchlabel{
    color: #333;
    height: 35px;
    margin-top: 2px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
}
</style>

