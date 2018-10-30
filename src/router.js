import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LoginDriver from './components/LoginDriver.vue';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login-driver',
      name: 'LoginDriver',
      component: LoginDriver,
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
  ],
});
