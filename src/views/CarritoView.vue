<template>
  <section>
    <header style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
      <div>
        <h2 style="margin:0;">Carrito</h2>
        <p class="muted" style="margin:4px 0 0;">Resumen de tu pedido.</p>
      </div>
      <button class="btn danger" @click="vaciar" :disabled="!carrito.length">Vaciar carrito</button>
    </header>

    <div class="card" v-if="carrito.length">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th class="right">Precio</th>
            <th class="right">Cantidad</th>
            <th class="right">Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carrito" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td class="right">$ {{ item.precio.toFixed(2) }}</td>
            <td class="right">
              <span class="list-inline">
                <button class="btn" @click="decrementar(item.id)">−</button>
                <strong>{{ item.cantidad }}</strong>
                <button class="btn" @click="incrementar(item.id)">+</button>
              </span>
            </td>
            <td class="right">$ {{ (item.precio * item.cantidad).toFixed(2) }}</td>
            <td class="right">
              <button class="btn danger" @click="eliminar(item.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Totales</strong></td>
            <td class="right"><strong>—</strong></td>
            <td class="right"><strong>{{ totalArticulos }}</strong></td>
            <td class="right"><strong>$ {{ totalPrecio.toFixed(2) }}</strong></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div v-else class="card">
      <p class="muted">Tu carrito está vacío.</p>
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
