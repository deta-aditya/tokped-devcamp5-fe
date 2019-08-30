<template>
  <TopBarLayout title="Daftar Pesanan">
    <template #nav>
      <router-link to="/mitra/scan">
        <FontAwesomeIcon icon="qrcode" />
      </router-link>
    </template>
    <div class="dialog-detail" v-show="showDetail" @click="closeDetailModal">
      <FlexContainer 
        class="dialog-box-container" 
        justifyContent="center"
        alignItems="flex-start"
      >
        <div class="dialog-box" @click.stop>
          <FlexContainer 
            justifyContent="space-between">
            <h2 class="dialog-title">Detail Pesanan</h2>
            <a href="#" @click.prevent="closeDetailModal">
              <FontAwesomeIcon icon="times" />
            </a>
          </FlexContainer>
          <p class="total-price">Total: Rp{{ totalPrice }}</p>
          <Card
            v-for="(detail, idx) in details"
            :key="idx"
            class="detail-item"
          >
            <h3 class="detail-title">{{ detail.name }}</h3>
            <p class="detail-price">
              Rp{{ detail.price }} 
              &times;
              {{ detail.qty }}
              =
              <strong class="detail-price-total">
                Rp{{ detail.price * detail.qty }}
              </strong>
            </p>
          </Card>
        </div>
      </FlexContainer>
    </div>
    <div class="content">
      <FlexContainer class="status-list">
        <Card
          v-for="(status, slug) in statuses"
          :key="slug"
          class="status-item"
          padding="5px 15px"
          :borderRadius="100"
        >
          {{ status }}
        </Card>
      </FlexContainer>
      <OrderItem
        v-for="order in cleanOrders"
        :key="order.id"
        :order="order"
        @change="loadTransactions"
        @detail="selectOrderId"
      />
    </div>
  </TopBarLayout>
</template>

<script>
import FlexContainer from '@/components/FlexContainer'
import TopBarLayout from '@/components/layouts/TopBarLayout'
import OrderItem from '@/components/OrderItem'
import Card from '@/components/Card'
import { getStoreTransactions, getTransactionDetails } from '@/api'
import { statuses } from '@/config'

export default {
  components: {
    FlexContainer,
    TopBarLayout,
    OrderItem,
    Card,
  },
  data: () => ({
    selectedStatus: 'all',
    orders: [],
    details: [],
    statuses,
    selectedOrderId: null,
  }),
  created() {
    this.loadTransactions()
  },
  computed: {
    cleanOrders() {
      return this.orders.map(
        order => ({ 
          ...order,  
          statusText: statuses[order.status],
        })
      )
    },
    showDetail() {
      return this.selectedOrderId !== null
    },
    totalPrice() {
      return this.details.reduce((acc, item) => acc + (item.price * item.qty), 0)
    }
  },
  methods: {
    async loadTransactions() {
      this.orders = await getStoreTransactions(1)
    },

    async selectOrderId(id) {
      this.selectedOrderId = id
      this.details = (await getTransactionDetails(id)).products
    },

    closeDetailModal() {
      this.selectedOrderId = null
      this.details = []
    }
  }
}
</script>

<style scoped>
.content {
  padding: 0.75em;
}

.status-list {
  margin-bottom: 1em;
  padding: 5px 0;
  width: 100%;
  overflow-x: scroll; 
}

.status-item {
  flex: 1;
  margin-right: 10px;
  font-size: 0.85em;
}

.dialog-detail {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
  width: 100vw;
  height: 100vh;
  z-index: 10;
}

.dialog-box-container {
  height: 100vh;
}

.dialog-box {
  width: 80vw;
  margin-top: 2em;
  padding: 1em;
  background: #fff;
  border-radius: 10px;
}

.dialog-title {
  margin: 0 0 0.75em;
}

.detail-item {
  margin-bottom: 1em;
}

.detail-title {
  margin: 0 0 1em;
  font-size: 1em;
}

.detail-price {
  margin: 0;
}

.detail-price-total {
  color: #42b549;
}

.total-price {
  color: #42b549;
  font-weight: bold;
  margin: 0 0 1em;
}
</style>