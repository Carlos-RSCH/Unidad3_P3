import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

// Persist carrito in localStorage
pinia.use(({ store }) => {
  if (store.$id === 'carrito') {
    const saved = localStorage.getItem('persist:carrito')
    if (saved) store.$patch(JSON.parse(saved))
    store.$subscribe((_m, state) => {
      localStorage.setItem('persist:carrito', JSON.stringify(state))
    }, { detached: true })
  }
})

createApp(App).use(pinia).use(router).mount('#app')
