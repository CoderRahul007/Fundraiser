import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Sign_In',
    name: 'Sign_In',
    component:() => import('../views/Sign_In.vue')
  },
  {
    path: '/User_Campaign_Starter',
    name: 'User_Campaign_Starter',
    component:() => import('../views/User_Campaign_Starter.vue'),
  },
  {
    path: '/NGO_Campaign_Starter',
    name: 'NGO_Campaign_Starter',
    component:() => import('../views/NGO_Campaign_Starter.vue'),
  },
  {
    path: '/Donate',
    name: 'Donate',
    component: () => import('../views/Donate.vue'),
  },
  {
    path: '/User_Dashboard',
    name: 'User_Dashboard',
    component: () => import('../views/User_Dashboard.vue'),
  },
  {
    path: '/Admin_Dashboard',
    name: 'Admin_Dashboard',
    component: () => import('../views/Admin_Dashboard.vue'),
  },
  {
    path: '/getUsers',
    name: 'Admin_Dashboard',
    component: () => import('../views/getUsers.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
