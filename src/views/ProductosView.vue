<template>
  <section class="container mt-4">
    <!-- Encabezado -->
    <header class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="h4 mb-0">Productos</h2>
        <p class="text-muted mb-0">Lista completa. Puedes editar, eliminar o agregar al carrito.</p>
      </div>
      <router-link class="btn btn-primary" to="/productos/crear">+ Nuevo</router-link>
    </header>

    <!-- Lista de productos -->
    <div v-if="productos.length" class="row g-3">
      <div class="col-md-4" v-for="p in productos" :key="p.id">
        <ProductoCard
          :producto="p"
          @eliminar="eliminar(p.id)"
          @agregar="agregar(p)"
        />
      </div>
    </div>

    <!-- Mensaje si no hay productos -->
    <div v-else class="card">
      <div class="card-body">
        <p class="text-muted mb-0">No hay productos. Crea el primero.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import ProductoCard from '../components/ProductoCard.vue'

const productosStore = useProductoStore()
const carrito = useCarritoStore()
const { productos } = storeToRefs(productosStore)

const eliminar = (id) => {
  if (confirm('¿Eliminar producto?')) productosStore.eliminarProducto(id)
}
const agregar = (p) => carrito.agregarAlCarrito(p)
</script>