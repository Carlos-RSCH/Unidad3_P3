<template>
  <section class="container mt-4">
    <div v-if="producto" class="card">
      <div class="card-body">
        <h2 class="card-title mb-3">Editar: {{ producto.nombre }}</h2>
        <form @submit.prevent="actualizar">
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input v-model="form.nombre" type="text" class="form-control" required />
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Precio</label>
              <input v-model.number="form.precio" type="number" min="0" step="0.01" class="form-control" required />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Stock</label>
              <input v-model.number="form.stock" type="number" min="0" step="1" class="form-control" required />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Descripción</label>
            <textarea v-model="form.descripcion" rows="3" class="form-control"></textarea>
          </div>

          <div class="d-flex gap-2 mt-3">
            <button type="submit" class="btn btn-primary">Actualizar</button>
            <router-link class="btn btn-secondary" to="/productos">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>

    <div v-else class="card">
      <div class="card-body">
        <p class="text-muted mb-0">Producto no encontrado.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductoStore } from '../stores/useProductoStore'

const route = useRoute()
const router = useRouter()
const productos = useProductoStore()

const producto = computed(() => productos.obtenerProductoPorId(route.params.id))
const form = reactive({ nombre: '', precio: 0, stock: 0, descripcion: '' })

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