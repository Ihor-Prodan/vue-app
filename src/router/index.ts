import { useUserStore } from '@/stores/user';
import { createRouter, createWebHistory } from 'vue-router';

const base = '/';

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'registerPage',
      component: () => import('../views/RegistrationPage.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboardPage',
      component: () => import('../views/DashboardPage.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.currentUser?.token) {
    next({ name: 'loginPage' });
  } else {
    next();
  }
});

export default router;
