<template>
  <section class="container mt-4">
    <!-- Hero principal -->
    <div class="card text-center mb-4 p-4 bg-light border-0 shadow-sm">
      <span class="badge bg-primary mb-2">Proyecto • Vue 3 + Pinia + Router</span>
      <h1 class="display-5 fw-bold">CRUD de Productos y Carrito Global</h1>
      <p class="text-muted">
        Single Page Application con estado global administrado con Pinia y navegación con Vue Router.
        Incluye persistencia de carrito en localStorage y un diseño moderno.
      </p>
      <div class="d-flex justify-content-center gap-2 mt-3 flex-wrap">
        <router-link class="btn btn-primary" to="/productos">Ver productos</router-link>
        <router-link class="btn btn-outline-primary" to="/productos/crear">Crear producto</router-link>
        <router-link class="btn btn-outline-secondary" to="/carrito">Ir al carrito</router-link>
      </div>
    </div>

    <!-- Integrantes del equipo -->
    <div class="card p-4">
      <h2 class="mb-4">Integrantes del equipo</h2>
      <div class="row g-3">
        <div class="col-md-4" v-for="integrante in integrantes" :key="integrante.nombre">
          <div class="d-flex align-items-center p-3 border rounded shadow-sm bg-white">
            <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px; font-size: 1.25rem;">
              {{ integrante.inicial }}
            </div>
            <div>
              <strong>{{ integrante.nombre }}</strong>
              <p class="text-muted mb-0">{{ integrante.rol }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const integrantes = [
  {
    inicial: 'A',
    nombre: 'Abner Moises Sarmiento Valencia',
    rol: 'Líder de proyecto / Frontend'
  },
  {
    inicial: 'C',
    nombre: 'Carlos Roberto Silva Chacón',
    rol: 'Gestión de estado / QA'
  },
  {
    inicial: 'M',
    nombre: 'Miriam Vázquez Guzmán',
    rol: 'Ruteo / Documentación'
  }
]
</script>