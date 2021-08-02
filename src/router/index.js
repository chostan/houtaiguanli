import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('views/login/Login')
const Home = () => import('views/home/Home')
const User = () => import('views/user/User.vue')
const Rights = () => import('views/power/Rights')
const Roles = () => import('views/power/Roles')
const Category = () => import('views/goods/Category')
const Params = () => import('views/goods/Params')
const GoodsList = () => import('views/goods/List')
const Add = () => import('views/goods/Add')
const Order = () => import('views/order/Order')
const Report = () => import('views/report/Report')

const Welcome = () => import('components/content/Welcome')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: User
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Category
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: GoodsList
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  // const tokenStr = window.localStorage.getItem('token')
  if (!tokenStr) return next('/login');
  next()
})

export default router
