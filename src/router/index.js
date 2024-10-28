import { createRouter, createWebHistory } from 'vue-router'
//import store from '../store';
import LoginView from '@/views/LoginView.vue'; 
import DashReport from '@/views/DashReport.vue';
import TableReport from '@/views/TableReport.vue';

const routes = [
  {
    path: '/',
    name: 'Padre',
    children: [
      {
        path: '/',
        name: 'Madre',
        component: () => import('@/views/AppWrapper.vue'),
        children: [
          
          {
            path: '/login', 
            name: 'Login', 
            component: LoginView 
          },
          {
            path: '/dash', 
            name: 'Dash', 
            component: DashReport 
          },
          {
            path: '/tables', 
            name: 'Table', 
            component: TableReport 
          },
        ]
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;



/*import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router*/
