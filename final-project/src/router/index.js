import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Catalog from '../views/Catalog.vue'
import Product from '../views/Product.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/registration',
    name: 'Registration',
    component: function () {
      return import('../views/Registration.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


