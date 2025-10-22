<template>
  <section class="card">
    <h2 style="margin-top:0;">Crear producto</h2>
    <form @submit.prevent="guardar">
      <label>Nombre</label>
      <input v-model="form.nombre" required placeholder="Ej. Teclado 60%"/>

      <div class="field-row">
        <div>
          <label>Precio</label>
          <input v-model.number="form.precio" type="number" min="0" step="0.01" required placeholder="0.00"/>
        </div>
        <div>
          <label>Stock</label>
          <input v-model.number="form.stock" type="number" min="0" step="1" required placeholder="0"/>
        </div>
      </div>

      <label>Descripción</label>
      <textarea v-model="form.descripcion" rows="3" placeholder="Detalles, materiales, etc."></textarea>

      <div style="margin-top:12px; display:flex; gap:8px;">
        <button class="btn primary" type="submit">Guardar</button>
        <router-link class="btn" to="/productos">Cancelar</router-link>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useProductoStore } from '../stores/useProductoStore'

const router = useRouter()
const productos = useProductoStore()

const form = reactive({ nombre:'', precio:0, stock:0, descripcion:'' })

const guardar = () => {
  productos.crearProducto({ ...form })
  router.push('/productos')
}
</script>
