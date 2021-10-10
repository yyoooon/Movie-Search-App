import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import ContentDetail from './ContentDetail'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  // path만 종속한 것
  routes: [
    {
      path:'/',
      component:  Home,
    },
    {
      name: 'content',
      path:'/contents/:id',
      component:  ContentDetail,
    },
    {
      path:'/:notFound(.*)',
      component: NotFound
    },
  ]
})

