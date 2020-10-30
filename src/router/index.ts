import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import(/* webpackChunkName: "about" */ '../views/About.vue'); },
  },
  {
    path: '/list',
    name: 'List',
    component: () => { return import(/* webpackChunkName: "list" */ '../views/List.vue'); },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
