import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const ProductosView = () => import('../views/ProductosView.vue')
const CrearProductoView = () => import('../views/CrearProductoView.vue')
const EditarProductoView = () => import('../views/EditarProductoView.vue')
const CarritoView = () => import('../views/CarritoView.vue')

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/productos', component: ProductosView },
    { path: '/productos/crear', component: CrearProductoView },
    { path: '/productos/:id', component: EditarProductoView, props: true },
    { path: '/carrito', component: CarritoView }
  ],
  scrollBehavior(){ return { top: 0 } }
})
