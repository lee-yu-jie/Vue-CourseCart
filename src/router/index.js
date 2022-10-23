import { createRouter, createWebHistory } from "vue-router";
import Course from "../views/Course.vue";
import Cart from "../views/Cart.vue";

const routerHistory = createWebHistory();
const routes = [
  {
    path: "/",
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
