import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news/1",
    name: "News1",
    component: () => import("@/views/news/Page1.vue")
  },
  {
    path: "/news/2",
    name: "News2",
    component: () => import("@/views/news/Page2.vue")
  },
  {
    path: "/news/3",
    name: "News3",
    component: () => import("@/views/news/Page3.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
