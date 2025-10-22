<template>
  <section class="card" v-if="producto">
    <h2 style="margin-top:0;">Editar: {{ producto.nombre }}</h2>
    <form @submit.prevent="actualizar">
      <label>Nombre</label>
      <input v-model="form.nombre" required />

      <div class="field-row">
        <div>
          <label>Precio</label>
          <input v-model.number="form.precio" type="number" min="0" step="0.01" required />
        </div>
        <div>
          <label>Stock</label>
          <input v-model.number="form.stock" type="number" min="0" step="1" required />
        </div>
      </div>

      <label>Descripción</label>
      <textarea v-model="form.descripcion" rows="3"></textarea>

      <div style="margin-top:12px; display:flex; gap:8px;">
        <button class="btn primary" type="submit">Actualizar</button>
        <router-link class="btn" to="/productos">Cancelar</router-link>
      </div>
    </form>
  </section>

  <div v-else class="card">
    <p class="muted">Producto no encontrado.</p>
  </div>
</template>

<script setup>
import { computed, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductoStore } from '../stores/useProductoStore'

const route = useRoute()
const router = useRouter()
const productos = useProductoStore()

const producto = computed(() => productos.obtenerProductoPorId(route.params.id))
const form = reactive({ nombre:'', precio:0, stock:0, descripcion:'' })

watchEffect(() => {
  if (producto.value) {
    form.nombre = producto.value.nombre
    form.precio = producto.value.precio
    form.stock = producto.value.stock
    form.descripcion = producto.value.descripcion
  }
})

const actualizar = () => {
  productos.actualizarProducto(route.params.id, { ...form })
  router.push('/productos')
}
</script>
