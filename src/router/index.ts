import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHistory(),
  routes
});

export default router;