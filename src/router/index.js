import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import User from '@/components/User'
import Appmenu from '@/components/Appmenu'
import Role from '@/components/Role'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/index',
      name: 'Main',
      component: Main
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/app',
      name: 'Appmenu',
      component: Appmenu
    },
    {
      path: '/role',
      name: 'Role',
      component: Role
    }
  ]
})
