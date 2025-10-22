<template>
  <section>
    <header style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px;">
      <div>
        <h2 style="margin:0; font-size:24px;">Productos</h2>
        <p class="muted" style="margin:4px 0 0;">Lista completa. Puedes editar, eliminar o agregar al carrito.</p>
      </div>
      <router-link class="btn primary" to="/productos/crear">+ Nuevo</router-link>
    </header>

    <div v-if="productos.length" class="grid">
      <ProductoCard
        v-for="p in productos"
        :key="p.id"
        :producto="p"
        @eliminar="eliminar(p.id)"
        @agregar="agregar(p)"
      />
    </div>

    <div v-else class="card">
      <p class="muted">No hay productos. Crea el primero.</p>
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
