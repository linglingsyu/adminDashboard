import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/zone',
      name: 'zone',
      component: () => import('@/views/zone/zoneList.vue'),
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('@/views/schedule/scheduleList.vue'),
    },
  ],
});

export default router;
