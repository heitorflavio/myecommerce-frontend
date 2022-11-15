import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Products.vue'
import Cart from '../views/Cart.vue'

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

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
