import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({ carrito: [] }),
  getters: {
    totalArticulos: (s) => s.carrito.reduce((a, i) => a + i.cantidad, 0),
    totalPrecio: (s) => s.carrito.reduce((a, i) => a + i.precio * i.cantidad, 0)
  },
  actions: {
    agregarAlCarrito(producto) {
      const x = this.carrito.find(i => String(i.id) === String(producto.id))
      if (x) x.cantidad++
      else this.carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 })
    },
    decrementarCantidad(id) {
      const x = this.carrito.find(i => String(i.id) === String(id))
      if (!x) return
      x.cantidad--
      if (x.cantidad <= 0) this.eliminarDelCarrito(id)
    },
    eliminarDelCarrito(id) {
      this.carrito = this.carrito.filter(i => String(i.id) !== String(id))
    },
    vaciarCarrito() { this.carrito = [] }
  }
})
