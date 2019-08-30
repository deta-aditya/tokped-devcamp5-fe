<template>
  <TopBarLayout title="Scan QR Code">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </TopBarLayout>
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'
import { updateOrderStatus } from '@/api'

export default {
  components: {
    TopBarLayout,
  },
  methods: {
    onDecode(decodedString) {
      const decodedId = Number(decodedString)
      if (isNaN(decodedId)) {
        return
      }

      this.process(decodedId, 'done')
        .then(() => this.$router.push('/mitra/pesanan'))
    },

    async process(id, status) {
      await updateOrderStatus(id, status)

    },
  }
}
</script>

<style scoped>

</style>