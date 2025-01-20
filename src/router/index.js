import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import LoginPage from '@/components/LoginPage.vue';
import RegisterUser from '@/components/RegisterUser.vue';
import PrincipalPage from '@/components/PrincipalPage.vue';
import store from '@/store'; // Importe o Vuex store

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterUser',
    component: RegisterUser
  },
  {
    path: '/principal',
    name: 'Principal',
    component: PrincipalPage,
    meta: { requiresAuth: true } // Adicione meta para rotas que requerem autenticação
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Adicione um guarda global antes de cada navegação
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifique se o usuário está autenticado
    if (!store.getters.isAuthenticated) {
      // Redirecione para a página de login se não estiver autenticado
      next({ name: 'LoginPage' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;