import { createRouter, createWebHashHistory } from "vue-router";

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
      title: "Show Todos",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
