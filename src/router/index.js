
import { createRouter, createWebHistory } from 'vue-router'
import PersonList from '../views/PersonList.vue'


const routes = [
  {
    path: '/',
    name: 'PersonList',
    component: PersonList,
  },

]

const router = createRouter({
  history: createWebHistory('/Piyacholch.github.io/'),
  routes
})


export default router

