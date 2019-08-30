<template>
  <TopBarLayout title="Scan QR Code">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </TopBarLayout>
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'

export default {
  components: {
    TopBarLayout,
  },
  methods: {
    onDecode(decodedString) {
      console.log(decodedString)
    }
  }
}
</script>

<style scoped>

</style>