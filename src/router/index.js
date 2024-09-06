import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "home",
    },
  },
  {
    name: "ShowTodos",
    path: "/Show-Todos",
    component: () => import("@/views/ShowTodos.vue"),
    meta: {
      title: "ShowTodos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
