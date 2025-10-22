<template>
  <div>
    <header class="nav">
      <div class="nav-inner">
        <router-link class="brand" to="/">🛍️ Vue Shop</router-link>
        <div class="spacer"></div>
        <router-link class="btn" to="/">Inicio</router-link>
        <router-link class="btn" to="/productos">Productos</router-link>
        <router-link class="btn" to="/productos/crear">Crear</router-link>
        <router-link class="btn" to="/carrito">Carrito ({{ totalArticulos }})</router-link>
      </div>
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCarritoStore } from './stores/useCarritoStore'
const carrito = useCarritoStore()
const { totalArticulos } = storeToRefs(carrito)
</script>
