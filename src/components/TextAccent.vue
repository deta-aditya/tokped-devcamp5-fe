<template>
  <span :style="style">
    <slot></slot>
  </span>
</template>

<script>

import { colors } from '@/config'

export default {
  computed: {
    style() {
      return {
        color: colors.accent
      }
    },
  }, 
}

</script>