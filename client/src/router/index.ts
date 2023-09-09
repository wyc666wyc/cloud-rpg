import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/index.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router