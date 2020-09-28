<template>
    <div>
        <div class="box1">
            <div class="sub-box1" @click="godetail('name1')" :class="{active:detail=='name1'}">
                <span>商品介绍</span>
                <div></div>
            </div>
            <div class="sub-box1" @click="godetail('name2')" :class="{active:detail=='name2'}" >
                <span>规格参数</span>
                <div></div>
            </div>
            <div class="sub-box1" @click="godetail('name3')" :class="{active:detail=='name3'}">
               <span>售后保障</span> 
                <div></div>
            </div>
        </div>
        <component :is="detail"></component>
    </div>
</template>
<script>
import DetailName1 from './DetailName1.vue'
import DetailName2 from './DetailName2.vue'
import DetailName3 from './DetailName3.vue'
export default {
    data(){
        return {
            detail:"name1"
        }
    },
    components:{
        "name1":DetailName1,
        "name2":DetailName2,
        "name3":DetailName3
    },
    methods:{
        godetail(name){
            this.detail=name
        }
    }
    
}
</script>
<style scoped>
.box1{
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    background: white;
    border-radius: 1rem;
    height: 3rem;
}
.sub-box1{
    width: 33%;
    display: flex;
    flex-flow: column;
    align-items: center;
}
.sub-box1 span{
    margin-bottom: .3rem;
}
.active div{
    width: 2rem;
    height: 2px;
    background-color: tomato;
}

</style>