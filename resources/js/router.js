import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Dewatari from './components/Dewatari.vue'
import ProdukLokal from './components/ProdukLokal.vue'
import PaketTour from './components/PaketTour.vue'
import Informasi from './components/Informasi.vue'
import PembelianTiket from './components/PembelianTiket.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dewatari',
    name: 'dewatari',
    component: Dewatari
  },
  {
    path: '/produk-lokal',
    name: 'produk-lokal',
    component: ProdukLokal
  },
  {
    path: '/paket-tour',
    name: 'paket-tour',
    component: PaketTour
  },
  {
    path: '/informasi',
    name: 'informasi',
    component: Informasi
  },
  {
    path: '/pembelian-tiket',
    name: 'pembelian-tiket',
    component: PembelianTiket
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 