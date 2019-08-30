<template>
  <Card class="order-item" :padding="0">
    <p class="order-status">{{ order.statusText }}</p>
    <div class="order-head">
      <h3 class="order-user">{{ order.name }}</h3>
      <p class="order-ordered-at">{{ order.ordered_at }}</p>
      <strong class="order-id">TR NO.{{ order.id }}</strong>
    </div>
    <FlexContainer class="order-body" justifyContent="right" alignItems="center">
      <button class="plain" type="button" @click="showDetail">Detail</button>
      <NextOrderStateButton 
        :status="order.status" 
        :id="order.id" 
        @done="handleStateChangeDone"
      />
    </FlexContainer>
  </Card>
</template>

<script>
import Card from '@/components/Card'
import NextOrderStateButton from '@/components/NextOrderStateButton'
import FlexContainer from '@/components/FlexContainer'

export default {
  components: {
    Card,
    FlexContainer,
    NextOrderStateButton,
  },
  props: {
    order: Object,
  },
  methods: {
    handleStateChangeDone(newStatus) {
      alert(`Status changed to ${newStatus}!`)
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