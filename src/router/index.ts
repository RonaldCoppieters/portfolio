import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Ronald Coppieters Portfolio"
    }
  },
  {
    path: "/news/1",
    name: "News1",
    component: () => import("@/views/news/Page1.vue"),
    meta: {
      title: "News | Page 1"
    }
  },
  {
    path: "/news/2",
    name: "News2",
    component: () => import("@/views/news/Page2.vue"),
    meta: {
      title: "News | Page 2"
    }
  },
  {
    path: "/news/3",
    name: "News3",
    component: () => import("@/views/news/Page3.vue"),
    meta: {
      title: "News | Page 3"
    }
  },
  {
    path: "/news/4",
    name: "News4",
    component: () => import("@/views/news/Page4.vue"),
    meta: {
      title: "News | Page 4"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  if (title) document.title = title;
  next();
});

export default router;
