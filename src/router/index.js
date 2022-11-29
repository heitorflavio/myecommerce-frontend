import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Wishlist from '../views/WishList.vue'
import ProductOrder from '../views/ProductOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/product-order',
    name: 'ProductOrder',
    component: ProductOrder,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/finish',
    name: 'Finish',
    component: () => import('../views/Finish.vue'),
    meta: {
      requiresAuth: true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
