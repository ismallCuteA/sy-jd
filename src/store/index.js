import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        shopList: [],
        // message:0,
        isDispaly: true,
        isAble: false
    },
    mutations: {
        add(state, list) {
            // console.log(list.introduce)
            // console.log(state.shopList)
            // list.num++
            let index = true;
            for (let i = 0; i < state.shopList.length; i++) {
                if (list.newprice == state.shopList[i].price) {
                    state.shopList[i].num++;
                    // console.log(111)
                    index = false
                }
            }
            if (index == true) {
                state.shopList.push({
                    name: list.introduce,
                    price: list.newprice,
                    num: 1,
                    img: list.src

                });
                state.isDispaly = false;
                state.isAble = true;
            }

        },
        removeList(state, index) {
            state.shopList.splice(index, 1);
            // console.log(index)
            // if(this.shopList.length==0){
            //     console.log(2221)
            // }
        }
    }
})
export {
    store
}