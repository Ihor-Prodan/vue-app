import { useUserStore } from '@/stores/user';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'loginPage',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'registerPage',
      component: () => import('../views/RegistrationPage.vue'),
    },
    {
      path: '/',
      name: 'dashboardPage',
      component: () => import('../views/DashboardPage.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.currentUser?.token || localStorage.getItem('currentUser');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'loginPage' });
  } else {
    next();
  }
});

export default router;
