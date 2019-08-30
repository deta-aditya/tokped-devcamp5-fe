<template>
  <div class="card" :style="style">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    padding: {
      type: [Number, String],
      default: '0.75em',
    },
    borderRadius: {
      type: Number,
      default: 5,
    }
  },
  computed: {
    style() {
      return {
        padding: typeof this.padding === 'number'
          ? `${this.padding}px`
          : this.padding,
        borderRadius: `${this.borderRadius}px`,
      }
    },
  },
}

</script>

<style scoped>

.card {
  background: #fff;
  box-shadow: 1px 1px 5px #ccc;
}

</style>