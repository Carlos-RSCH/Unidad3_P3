<template>
  <section class="container mt-4">
    <header class="d-flex align-items-center justify-content-between mb-3">
      <div>
        <h2 class="mb-0">Carrito</h2>
        <p class="text-muted mb-0">Resumen de tu pedido.</p>
      </div>
      <button class="btn btn-danger" @click="vaciar" :disabled="!carrito.length">
        Vaciar carrito
      </button>
    </header>

    <div v-if="carrito.length" class="card">
      <div class="card-body p-0">
        <table class="table table-striped mb-0">
          <thead class="table-dark">
            <tr>
              <th>Producto</th>
              <th class="text-end">Precio</th>
              <th class="text-end">Cantidad</th>
              <th class="text-end">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carrito" :key="item.id">
              <td>{{ item.nombre }}</td>
              <td class="text-end">$ {{ item.precio.toFixed(2) }}</td>
              <td class="text-end">
                <div class="btn-group">
                  <button class="btn btn-outline-secondary btn-sm" @click="decrementar(item.id)">−</button>
                  <button class="btn btn-light btn-sm disabled">{{ item.cantidad }}</button>
                  <button class="btn btn-outline-secondary btn-sm" @click="incrementar(item.id)">+</button>
                </div>
              </td>
              <td class="text-end">$ {{ (item.precio * item.cantidad).toFixed(2) }}</td>
              <td class="text-end">
                <button class="btn btn-sm btn-danger" @click="eliminar(item.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
          <tfoot class="table-light">
            <tr>
              <td><strong>Totales</strong></td>
              <td class="text-end"><strong>—</strong></td>
              <td class="text-end"><strong>{{ totalArticulos }}</strong></td>
              <td class="text-end"><strong>$ {{ totalPrecio.toFixed(2) }}</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <div v-else class="card">
      <div class="card-body">
        <p class="text-muted mb-0">Tu carrito está vacío.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCarritoStore } from '../stores/useCarritoStore'
import { useProductoStore } from '../stores/useProductoStore'

const carritoStore = useCarritoStore()
const productosStore = useProductoStore()

const { carrito, totalArticulos, totalPrecio } = storeToRefs(carritoStore)

const eliminar = (id) => carritoStore.eliminarDelCarrito(id)
const vaciar = () => carritoStore.vaciarCarrito()
const decrementar = (id) => carritoStore.decrementarCantidad(id)
const incrementar = (id) => {
  const p = productosStore.obtenerProductoPorId(id)
  if (p) carritoStore.agregarAlCarrito(p)
}
</script>