import { createRouter, createWebHashHistory } from 'vue-router'
import AlphaMain from '../views/AlphaMain.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'AlphaMain',
    component: AlphaMain
  },{
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
