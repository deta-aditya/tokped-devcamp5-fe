import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MitraTokoku from './views/mitra/Tokoku.vue'
import MitraDaftarPesanan from './views/mitra/DaftarPesanan.vue'
import MitraDaftarBarang from './views/mitra/DaftarBarang.vue'

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
  ]
})
