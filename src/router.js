import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PembeliTokoIndex from './views/pembeli/TokoIndex.vue'
import PembeliTokoDetail from './views/pembeli/TokoDetail.vue'
import PembeliConfirm from './views/pembeli/Confirm.vue'
import PembeliDetailPesanan from './views/pembeli/DetailPesanan.vue'
import PembeliPesananIndex from './views/pembeli/PesananIndex.vue'
import MitraTokoku from './views/mitra/Tokoku.vue'
import MitraDaftarPesanan from './views/mitra/DaftarPesanan.vue'
import MitraDaftarBarang from './views/mitra/DaftarBarang.vue'
import MitraScanQrCode from './views/mitra/ScanQrCode.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/pembeli',
      name: 'pembeli.toko',
      component: PembeliTokoIndex,
    },
    {
      path: '/pembeli/store',
      name: 'pembeli.toko.detail',
      component: PembeliTokoDetail,
    },
    {
      path: '/pembeli/confirm',
      name: 'pembeli.confirm',
      component: PembeliConfirm,
    },
    {
      path: '/pembeli/pesanan',
      name: 'pembeli.pesanan',
      component: PembeliPesananIndex,
    },
    {
      path: '/pembeli/pesanan/:id',
      name: 'pembeli.pesanan.detail',
      component: PembeliDetailPesanan,
    },
    {
      path: '/mitra',
      name: 'mitra.tokoku',
      component: MitraTokoku,
    },
    {
      path: '/mitra/pesanan',
      name: 'mitra.pesanan',
      component: MitraDaftarPesanan,
    },
    {
      path: '/mitra/barang',
      name: 'mitra.barang',
      component: MitraDaftarBarang,
    },
    {
      path: '/mitra/scan',
      name: 'mitra.scan',
      component: MitraScanQrCode,
    },
  ]
})
