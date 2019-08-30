<template>
  <div class="top-bar-layout">
    <Navbar :title="title">
      <slot name="nav"></slot>
    </Navbar>
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
  props: {
    title: {
      type: String,
      default: 'Untitled'
    },
  },
  computed: {
  }
}
</script>

<style scoped>

.top-bar-layout {
  height: 100vh;
}

/* .content {
  margin-top: 50px;
} */

</style>