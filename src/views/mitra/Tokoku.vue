<template>
  <BlankLayout>
    <FlexContainer class="content" direction="column">
      <img :src="store.img_header" alt="Banner">
      <h1 class="store-name" style="margin:0">{{ store.name }}</h1>
      <p class="store-email">{{ store.email }}</p>
      <FlexContainer justifyContent="space-around">
        <router-link to="/mitra/pesanan">Pesanan</router-link>
        <router-link to="/mitra/barang">Barang</router-link>
        <router-link to="/mitra/scan">Scan QR Code</router-link>
      </FlexContainer>
    </FlexContainer>
  </BlankLayout>
</template>

<script>
import BlankLayout from '@/components/layouts/BlankLayout'
import FlexContainer from '@/components/FlexContainer'
import Card from '@/components/Card'
import { getStoreById } from '@/api'

export default {
  components: {
    BlankLayout,
    FlexContainer,
    Card,
  },
  data: () => ({
    store: {},
  }),
  async created() {
    this.store = await getStoreById(1)
  },
}
</script>

<style scoped>

.content {
  padding: 1em;
}

</style>