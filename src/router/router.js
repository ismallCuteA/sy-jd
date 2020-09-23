import Vue from "vue";
import VueRouter from "vue-router"
import second from '../components/second'
import third from '../components/third'
import forth from '../components/forth'
import fifth from '../components/fifth'
import main from '../components/jd.vue'
import mine from '../components/mine.vue'


Vue.use(VueRouter);
var routes = [{
    path: "/",
    component: main
  },
  {
    path: "/second",
    component: second
  },
  {
    path: "/mine",
    component: mine
  },
  {
    path: "/fifth",
    component: fifth
  },
  {
    path: "/third",
    component: third
  },
  {
    path: "/forth",
    component: forth
  },

]
var router = new VueRouter({
  routes,

})
export {
  router
}