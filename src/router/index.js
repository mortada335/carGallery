import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BranchView from "@/views/BranchView.vue";
import CarDetailsView from "@/views/CarDetailsView.vue";
import Search from "@/views/Search.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/branch/:id",
    name: "BranchView",
    component: BranchView,
    props: true,
  },
  {
    path: "/cars/:id",
    name: "car-details",
    component: CarDetailsView,
    props: true,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
    // () => import("@/views/Search.vue"),
  },
  {
    path: "/car-types",
    name: "car-types",
    component: () => import("@/views/CarTypes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
