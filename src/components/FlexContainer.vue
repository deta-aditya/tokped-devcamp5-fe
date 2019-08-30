<template>
  <div class="flex-container" :style="style">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    direction: String,
    wrap: String,
    justifyContent: String,
    alignItems: String,
    alignContent: String,
  },
  computed: {
    style() {
      const { 
        direction: flexDirection,
        wrap: flexWrap,
        justifyContent,
        alignItems,
        alignContent
      } = this

      return {
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,  
      }
    }
  },
}

</script>

<style scoped>

.flex-container {
  display: flex;
}

</style>
