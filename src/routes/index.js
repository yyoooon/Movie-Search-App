import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import NotFound from './NotFound'

// route폴더에 만들어지는 컴포넌트는 페이지 역할을 한다
export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  // path만 종속한 것
  routes: [
    {
      path:'/',
      component:  Home,
    },
    // 이미 설정한 경로 말고 전부
    {
      path:'/:notFound(.*)',
      component: NotFound
    },
  ]
})

