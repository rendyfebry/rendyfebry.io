import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import CV from '@/pages/CV'
import Contact from '@/pages/Contact'
import PageNotFound from '@/pages/PageNotFound'
import Experience from '@/pages/Experience'
import Project from '@/pages/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/cv',
      component: CV,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/experience',
      component: Experience,
    },
    {
      path: '/project',
      component: Project,
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
})
