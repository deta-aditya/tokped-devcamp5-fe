<template>
  <TopBarLayout title="Detail Pesanan" :back="false">
    <template #nav>
      <router-link to="/pembeli/pesanan">
        <FontAwesomeIcon icon="times" />
      </router-link>
    </template>
    <FlexContainer class="content" direction="column">
      <div class="qr-code">
      </div>
      <table>
        <tbody>
          <tr>
            <th>ID Transaksi</th>
            <td>{{ order.id }}</td>
          </tr>
          <tr>
            <th>Dipesan pada</th>
            <td>{{ order.ordered_at }}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{{ statuses[order.status] }}</td>
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
            v-for="product in order.products"
            :key="product.id"
          >
            <td>{{ product.name }}</td>
            <td>Rp{{ product.price }}</td>
            <td>{{ product.qty }}</td>
            <td>Rp{{ product.price * product.qty }}</td>
          </tr>
          <tr class="color-accent">
            <th colspan="3">Total</th>
            <th>Rp{{ productTotal }}</th>
          </tr>
        </tbody>
      </table>
      <button type="button" class="plain" @click="order">Batalkan</button>
    </FlexContainer>
  </TopBarLayout>
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'
import FlexContainer from '@/components/FlexContainer'
import { getTransactionDetails } from '@/api'
import { statuses } from '@/config'

export default {
  components: {
    TopBarLayout,
    FlexContainer,
  },
  data: () => ({
    order: {
      products: [],
    },
    statuses,
  }),
  async created() {
    this.order = await getTransactionDetails(this.$route.params.id)
  },
  computed: {
    productTotal() {
      return this.order.products.reduce(
        (acc, item) => acc + (item.qty * item.price)
      , 0)
    }
  },
}
</script>

<style scoped>
.content {
  padding: 1em;
}

table {
  width: 100%;
  margin-bottom: 1em;
  font-size: 0.875em;
}

td, th {
  padding-bottom: 0.5em;
}

th {
  text-align: left;
}

.qr-code {
  height: 300px;
  border: 1px solid #000;
  margin-bottom: 1em;
}
</style>