<template>
  <TopBarLayout title="Detail Pesanan" :back="false">
    <template #nav>
      <router-link to="/pembeli/pesanan">
        <FontAwesomeIcon icon="times" />
      </router-link>
    </template>
    <FlexContainer class="content" direction="column" alignItems="center">
      <canvas v-show="order.status === 'ready'" class="qr-code" ref="qrCode">
      </canvas>
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
      <button v-if="order.status === 'pending'" type="button" class="plain" @click="cancel">Batalkan</button>
    </FlexContainer>
  </TopBarLayout>
</template>

<script>
import QrCode from 'qrcode'
import TopBarLayout from '@/components/layouts/TopBarLayout'
import FlexContainer from '@/components/FlexContainer'
import { getTransactionDetails, cancelOrder } from '@/api'
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
    this.generateQrCode()
  },
  computed: {
    productTotal() {
      return this.order.products.reduce(
        (acc, item) => acc + (item.qty * item.price)
      , 0)
    }
  },
  methods: {
    generateQrCode() {
      QrCode.toCanvas(this.$refs.qrCode, this.$route.params.id, 
        (err) => err ? console.error(err) : null
      )
    },
    async cancel() {
      const notes = prompt('Tuliskan catatan pembatalan')

      if (notes !== null) {
        await cancelOrder(this.$route.params.id, notes, 2)
        this.order = await getTransactionDetails(this.$route.params.id)
      }
    },
  }
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
  margin-bottom: 1em;
}
</style>