<template>
  <TopBarLayout title="Pesan Barang">
    <FlexContainer class="content" direction="column">
      <img class="store-img" :src="store.img_header" alt="Banner">
      <div class="store-detail">
        <h1 class="store-name" style="margin:0">{{ store.name }}</h1>
        <p class="store-email">{{ store.email }}</p>
      </div>
      <div class="product-list">
        <Card
          class="product-item"
          v-for="(product, idx) in products"
          :key="product.id"
        >
          <FlexContainer>
            <img :src="product.img_url" class="product-img" :alt="product.name">
            <div style="flex:1">
              <h3 class="product-title">{{ product.name }}</h3>
              <p class="product-price-total">
                <strong>Rp{{ product.price }}</strong>
              </p>
              <FlexContainer justifyContent="space-around" class="qty-counter">
                <button type="button" @click="decrementQty(idx)">
                  <FontAwesomeIcon icon="angle-down" />
                </button>
                <span class="qty">{{ cart[idx].qty }}</span>
                <button type="button" @click="incrementQty(idx)">
                  <FontAwesomeIcon icon="angle-up" />
                </button>
              </FlexContainer>
            </div>
          </FlexContainer>
        </Card>
        <FlexContainer justifyContent="space-between" class="subtotal">
          <strong>Subtotal:</strong>
          <strong>Rp{{ totalPrice }}</strong>
        </FlexContainer>
      </div>
      <button type="button" class="order-button" @click="checkout">Pesan</button>
    </FlexContainer>
  </TopBarLayout>
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'
import FlexContainer from '@/components/FlexContainer'
import Card from '@/components/Card'
import { getStoreById, getStoreProducts } from '@/api'

export default {
  components: {
    TopBarLayout,
    FlexContainer,
    Card,
  },
  data: () => ({
    store: {},
    products: [],
    cart: [],
  }),
  created() {
    getStoreById(1).then(store => this.store = store)
    getStoreProducts(1).then(products => {
      this.products = products
      this.cart = products.map(product => ({ ...product, qty: 0 }))
    })
  },
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + (item.qty * item.price)
      , 0)
    }
  },
  methods: {
    incrementQty(index) {
      this.cart[index].qty++
    },
    decrementQty(index) {
      if (this.cart[index].qty > 0) {
        this.cart[index].qty--
      }
    },
    checkout() {
      this.$root.$data.cart = {
        store_id: 1,
        user_id: 1,
        products: this.cart.filter(item => item.qty > 0),
      }
      this.$router.push('/pembeli/confirm')
    }
  },
}
</script>

<style scoped>

.content {
  padding: 1em;
}

.order-button {
  font-weight: bold;
  padding: 0.75em 2em;
}

.store-detail {
  padding-bottom: 1.5em;
}

.store-img {
  margin-bottom: 1em;
}

.store-name {
  font-size: 1.5em;
}

.store-email {
  margin: 0
}

.product-item {
  margin-bottom: 1em;
}

.product-title {
  margin: 0 0 0.5em;
  font-size: 1em;
}

.product-price {
  margin: 0 0 0.5em;
}

.product-img {
  width: 100px;
  margin-right: 1em;
}

.product-price-total {
  color: #42b549;
  margin: 0 0 0.5em;
}

.total-price {
  color: #42b549;
  font-weight: bold;
  margin: 0 0 1em;
}

.qty {
  padding: 0.5em 2em; 
  border: 1px solid #ccc;
  border-radius: 3px ;
}

.qty-counter {
  margin-top: 1em;
}

.subtotal {
  padding: 0.8em 0;
}

</style>