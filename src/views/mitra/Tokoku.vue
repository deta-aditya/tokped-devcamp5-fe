<template>
  <BlankLayout>
    <img class="store-img" :src="store.img_header" alt="Banner">
    <FlexContainer class="content" direction="column">
      <h1 class="store-name">{{ store.name }}</h1>
      <p class="store-email">{{ store.email }}</p>
      <FlexContainer justifyContent="space-around">
        <router-link to="/mitra/pesanan" class="menu-item">
          <Card :borderRadius="20" :padding="15">
            <FontAwesomeIcon icon="shopping-bag" size="2x" class="color-accent"/>
          </Card>
          <span>Pesanan</span>
        </router-link>
        <router-link to="/mitra/barang" class="menu-item">
          <Card :borderRadius="20" :padding="15">
            <FontAwesomeIcon icon="box" size="2x" class="color-accent"/>
          </Card>
          <span>Barang</span>
        </router-link>
        <router-link to="/mitra/scan" class="menu-item">
          <Card :borderRadius="20" :padding="15">
            <FontAwesomeIcon icon="qrcode" size="2x" class="color-accent"/>
          </Card>
          <span>Scan QR</span>
        </router-link>
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

.store-img {
  width: 100%;
}

.store-name {
  margin: 0 0 0.2em;
  font-size: 1.25em;
}

.store-email {
  margin: 0 0 1.25em;
  font-size: 0.9em;
}

.menu-item {
  text-align: center;
  font-size: 0.825em;
  text-decoration: none;
  width: 20%;
}

.menu-item .card {
  margin-bottom: 0.6em;
}

</style>