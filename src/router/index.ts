import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/vue-tools/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/vue-tools/bread-calc",
      name: "bread-calc",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BreadCalcView.vue"),
    },
  ],
});

export default router;
