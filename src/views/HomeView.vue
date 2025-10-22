<template>
  <section>
    <div class="card hero">
      <span class="pill">Proyecto • Vue 3 + Pinia + Router</span>
      <h1 class="headline">CRUD de Productos y Carrito Global</h1>
      <p class="muted">Single Page Application con estado global administrado con Pinia y navegación con Vue Router. Incluye persistencia de carrito en localStorage y un diseño moderno.</p>
      <div class="list-inline">
        <router-link class="btn primary" to="/productos">Ver productos</router-link>
        <router-link class="btn" to="/productos/crear">Crear producto</router-link>
        <router-link class="btn" to="/carrito">Ir al carrito</router-link>
      </div>
    </div>

    <div class="card">
      <h2 style="margin-top:0">Integrantes del equipo</h2>
      <div class="team">
        <article class="card" style="display:flex;gap:12px;align-items:center;">
          <div class="avatar">A</div>
          <div>
            <strong>Abner Moises Sarmiento Valencia</strong>
            <p class="muted" style="margin:.25rem 0 0;">Líder de proyecto / Frontend</p>
          </div>
        </article>
        <article class="card" style="display:flex;gap:12px;align-items:center;">
          <div class="avatar">C</div>
          <div>
            <strong>Carlos Roberto Silva Chacón</strong>
            <p class="muted" style="margin:.25rem 0 0;">Gestión de estado / QA</p>
          </div>
        </article>
        <article class="card" style="display:flex;gap:12px;align-items:center;">
          <div class="avatar">M</div>
          <div>
            <strong>Miriam Vázquez Guzmán</strong>
            <p class="muted" style="margin:.25rem 0 0;">Ruteo / Documentación</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
