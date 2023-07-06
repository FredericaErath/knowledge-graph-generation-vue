import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoPage from '@/components/VideoPage'
import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/components/DashBoard'
import KnowledgeGraph from '@/components/KnowledgeGraph'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: HelloWorld,
    },
    {
      path: '/video',
      component: VideoPage,
    },
    {
      path: '/dashboard',
      component: DashBoard,
    },
    {
      path: '/kg',
      component: KnowledgeGraph,
    }
  ]
})
export default router
