import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import taskAddPage from '../pages/taskAddPage.vue'
import taskDeletePage from '../pages/taskDeletePage.vue'
import finishTaskPage from '../pages/finishTaskPage.vue'
import toDoPage from '../pages/toDoPage.vue'

const routes = [
  {
    path: '/',
    component: mainPage,
    redirect: '/main'
  },
  {
    path: '/main', 
    component: mainPage,
    redirect: '/main/taskAdd',
    children: [
      
      {
        path: 'taskAdd',
        component: taskAddPage
      },
      {
        path: 'taskDelete',
        component: taskDeletePage
      },
      {
        path: 'taskFinished',
        component: finishTaskPage
      },
      {
        path: 'taskList',
        component: toDoPage
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
