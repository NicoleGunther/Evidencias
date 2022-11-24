import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: { title: 'Home' },
      component: async () => await import('../pages/Home.vue'),
    },
  ]
})
router.beforeEach((to, from, next) => {
  document.title = `WebApp - ${to.meta.title}`;
  next();
})
export default router