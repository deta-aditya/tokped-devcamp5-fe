<template>
  <TopBarLayout title="Konfirmasi Pesanan">
    <FlexContainer class="content" direction="column">
      <h2>Silahkan konfirmasi pesanan Anda</h2>
      <table>
        <tbody>
          <tr>
            <th>Nama</th>
            <td>{{ user.name }}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <table style="margin-bottom:1em">
        <thead>
          <th>Barang</th>
          <th>Harga</th>
          <th>Qty</th>
          <th>Subtotal</th>
        </thead>
        <tbody>
          <tr
            v-for="product in cart.products"
            :key="product.id"
          >
            <td>{{ product.name }}</td>
            <td>Rp{{ product.price }}</td>
            <td>{{ product.qty }}</td>
            <td>Rp{{ product.price * product.qty }}</td>
          </tr>
          <tr>
            <th colspan="3">Total</th>
            <th>Rp{{ productTotal }}</th>
          </tr>
          <tr class="color-accent">
            <th colspan="3">Saldo Anda</th>
            <th>Rp{{ user.balance }}</th>
          </tr>
        </tbody>
      </table>
      <button type="button" class="order-button" @click="order">Bayar</button>
    </FlexContainer>
  </TopBarLayout>  
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'
import FlexContainer from '@/components/FlexContainer'
import { getUserById, order } from '@/api'

export default {
  components: {
    TopBarLayout,
    FlexContainer,
  },
  data: () => ({
    cart: {
      products: [],
    },
    user: {},
  }),
  async created() {
    this.cart = this.$root.$data.cart
    this.user = await getUserById(1)
  },
  computed: {
    productTotal() {
      return this.cart.products.reduce(
        (acc, item) => acc + (item.qty * item.price)
      , 0)
    }
  },
  methods: {
    order() {
      const payload = {
        store_id: this.cart.store_id,
        user_id: this.cart.user_id,
        products: this.cart.products.map(product => ({
          id: product.id,
          qty: product.qty
        }))
      }

      order(payload).then(data => this.$router.push(`/pembeli/pesanan/${data.id}`))
    },
  },
}
</script>

<style scoped>
.content {
  padding: 1em;
}

table {
  width: 100%;
}

h2 {
  margin: 0 0 1em;
}

td, th {
  padding-bottom: 0.5em;
}

th {
  text-align: left;
}

hr {
  background: #eee;
  border-color: #eee;
  margin: 1em 0;
}

.order-button {
  font-weight: bold;
  padding: 0.75em 2em;
}

</style>