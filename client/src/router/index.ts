import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/scene',
    component: () => import('@/views/scene/index.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router