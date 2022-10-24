import { createRouter, createWebHistory } from "vue-router";
import Course from "../views/Course.vue";
import Cart from "../views/Cart.vue";
import Introduce from "../views/Introduce.vue";
const routerHistory = createWebHistory();
const routes = [
  {
    path: "/",
    name: "Introduce",
    component: Introduce
  },
  {
    path: "/Course",
    name: "Course",
    component: Course
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart
  }
];

const router = createRouter({
  history: routerHistory,
  routes
});

export default router;
