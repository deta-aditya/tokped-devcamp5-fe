<template>
  <FlexContainer v-if="status === 'pending'">
    <button @click="process('confirmed')" style="margin:0 5px">
      Konfrimasi
    </button>
    <button @click="cancel">
      Batalkan
    </button>
  </FlexContainer>
  <button v-else-if="status === 'confirmed'" @click="process('process')">
    Proses
  </button>
  <button v-else-if="status === 'process'" @click="process('ready')">
    Sudah Siap
  </button>
</template>

<script>
import { updateOrderStatus, cancelOrder } from '@/api'
import FlexContainer from '@/components/FlexContainer'

export default {
  components: {
    FlexContainer,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  methods: {
    async process(status) {
      await updateOrderStatus(this.id, status)
      this.$emit('done', status)
    },
    async cancel() {
      const notes = prompt('Tuliskan catatan pembatalan')

      if (notes !== null) {
        await cancelOrder(this.id, notes, 1)
        this.$emit('done', 'canceled')
      }
    }
  },
}
</script>