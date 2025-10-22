import { defineStore } from 'pinia'

export const useProductoStore = defineStore('productos', {
  state: () => ({
    productos: [
      { id: 1, nombre: 'Laptop Gamer', precio: 25000, descripcion: 'Intel i7, RTX 4060, 16GB RAM, 1TB SSD', stock: 10 },
      { id: 2, nombre: 'Teclado Mecánico RGB', precio: 1200, descripcion: 'Switches rojos, formato TKL', stock: 25 },
      { id: 3, nombre: 'Mouse Inalámbrico', precio: 750, descripcion: 'Bluetooth + 2.4GHz, ergonómico', stock: 30 },
      { id: 4, nombre: 'Monitor 27”', precio: 4500, descripcion: '144Hz, IPS, 1ms', stock: 15 },
      { id: 5, nombre: 'Silla Ergonómica', precio: 3000, descripcion: 'Soporte lumbar, reclinable 135°', stock: 8 }
    ]
  }),
  getters: {
    obtenerProductoPorId: (state) => (id) => state.productos.find(p => String(p.id) === String(id))
  },
  actions: {
    crearProducto(producto) {
      const id = Date.now()
      this.productos.push({ id, ...producto })
      return id
    },
    actualizarProducto(id, producto) {
      const i = this.productos.findIndex(p => String(p.id) === String(id))
      if (i !== -1) this.productos[i] = { ...this.productos[i], ...producto }
    },
    eliminarProducto(id) {
      this.productos = this.productos.filter(p => String(p.id) !== String(id))
    }
  }
})
