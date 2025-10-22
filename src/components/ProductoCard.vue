<template>
  <div class="card">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
      <h3 style="margin:0;font-weight:700;">{{ producto.nombre }}</h3>
      <span class="tag">Stock: {{ producto.stock }}</span>
    </div>
    <p class="muted" style="min-height:40px;">{{ producto.descripcion }}</p>
    <div style="display:flex;align-items:center;justify-content:space-between;">
      <strong>$ {{ producto.precio.toFixed(2) }}</strong>
      <div class="list-inline">
        <router-link class="btn" :to="`/productos/${producto.id}`">Editar</router-link>
        <button class="btn danger" @click="$emit('eliminar', producto.id)">Eliminar</button>
        <button class="btn accent" @click="$emit('agregar', producto)">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ producto: { type: Object, required: true } })
defineEmits(['eliminar', 'agregar'])
</script>
