<template>
  <Card class="order-item" :padding="0">
    <p class="order-status">{{ order.statusText }}</p>
    <div class="order-head">
      <h3 class="order-user">{{ order.name }}</h3>
      <strong class="order-id">TR NO.{{ order.id }}</strong>
      <p class="order-ordered-at">{{ order.ordered_at }}</p>
      <p v-if="order.status === 'canceled'" class="order-ordered-at color-accent">
        Alasan Pembatalan: {{ order.notes }}
      </p>
    </div>
    <FlexContainer class="order-body" justifyContent="right" alignItems="center">
      <button class="plain" type="button" @click="showDetail">Detail</button>
      <NextOrderStateButton
        :status="order.status" 
        :id="order.id" 
        @done="handleStateChangeDone"
        :user="user"
      />
    </FlexContainer>
  </Card>
</template>

<script>
import Card from '@/components/Card'
import NextOrderStateButton from '@/components/NextOrderStateButton'
import FlexContainer from '@/components/FlexContainer'
import { statuses } from '@/config'

export default {
  components: {
    Card,
    FlexContainer,
    NextOrderStateButton,
  },
  props: {
    order: Object,
    user: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleStateChangeDone(newStatus) {
      alert(`Pesanan ${this.order.id} telah berubah menjadi ${stasuses[newStatus]}!`)
      this.$emit('change')
    },
    showDetail() {
      this.$emit('detail', this.order.id)
    }
  },
}
</script>

<style scoped>

.order-item {
  margin-bottom: 1em;
  font-size: 0.875em;
}

.order-user, .order-ordered-at, .order-status {
  margin: 0
}

.order-status {
  border-bottom: 1px solid #ddd;
  padding: 5px;
  text-align: center;
  font-size: 0.825em;
  background-color: #42b54944;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.order-head, .order-body {
  padding: 1em;
}

.order-head {
  border-bottom: 1px solid #ddd;
}

</style>