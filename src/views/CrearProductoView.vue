<template>
  <section class="container mt-4">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title mb-3">Crear producto</h2>
        <form @submit.prevent="guardar">
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input v-model="form.nombre" type="text" class="form-control" required placeholder="Ej. Teclado 60%" />
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Precio</label>
              <input v-model.number="form.precio" type="number" min="0" step="0.01" class="form-control" required placeholder="0.00" />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Stock</label>
              <input v-model.number="form.stock" type="number" min="0" step="1" class="form-control" required placeholder="0" />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Descripción</label>
            <textarea v-model="form.descripcion" rows="3" class="form-control" placeholder="Detalles, materiales, etc."></textarea>
          </div>

          <div class="d-flex gap-2 mt-3">
            <button type="submit" class="btn btn-primary">Guardar</button>
            <router-link class="btn btn-secondary" to="/productos">Cancelar</router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useProductoStore } from '../stores/useProductoStore'

const router = useRouter()
const productos = useProductoStore()

const form = reactive({ nombre: '', precio: 0, stock: 0, descripcion: '' })

const guardar = () => {
  productos.crearProducto({ ...form })
  router.push('/productos')
}
</script>