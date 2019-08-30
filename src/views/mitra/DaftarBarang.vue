<template>
  <TopBarLayout title="Daftar Barang">
    <div class="content">
      <Card
        class="product-item"
        v-for="product in products"
        :key="product.id"
      >
        <FlexContainer>
          <img :src="product.img_url" class="product-img" :alt="product.name">
          <div>
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-price-total">
              <strong>Rp{{ product.price }}</strong>
            </p>
          </div>
        </FlexContainer>
      </Card>
    </div>
  </TopBarLayout>
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'
import FlexContainer from '@/components/FlexContainer'
import Card from '@/components/Card'
import { getStoreProducts } from '@/api'
export default {
  components: {
    TopBarLayout,
    FlexContainer,
    Card,
  },
  data: () => ({
    products: [],
  }),
  async created() {
    this.products = await getStoreProducts(1)
  },
}
</script>

<style scoped>
.content {
  padding: 1em;
}

.product-item {
  margin-bottom: 1em;
}

.product-title {
  margin: 0 0 0.75em;
  font-size: 1em;
}

.product-price {
  margin: 0;
}

.product-img {
  width: 100px;
  margin-right: 1em;
}

.product-price-total {
  color: #42b549;
  margin: 0;
}

.total-price {
  color: #42b549;
  font-weight: bold;
  margin: 0 0 1em;
}
</style>