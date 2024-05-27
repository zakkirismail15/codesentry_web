import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AuthorizedView from '../views/AuthorizedView.vue'
import ProjectView from '../views/ProjectView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AuthorizedView,
    meta: {
      requiresAuth: true,
    },
    children: [
      { title: 'Home', path: '/home', name: 'home', component: HomeView },
      {
        title: 'Project',
        path: '/project',
        name: 'project',
        component: ProjectView,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = document.cookie
    .split(';')
    .some((cookie) => cookie.trim().startsWith('access_token='))
  console.log(isAuthenticated)
  if (isAuthenticated && to.name === 'login') {
    next({ name: 'home' })
  } else if (!isAuthenticated && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
