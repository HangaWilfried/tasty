import { createRouter, createWebHistory } from "vue-router";
import LayoutFoods from "@/views/LayoutFoods.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "foods",
      component: LayoutFoods,
    },
  ],
});

export default router;
