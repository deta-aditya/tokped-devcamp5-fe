<template> 
  <header :class="classes" :style="style">
    <FlexContainer
      style="height:100%"
      v-if="position === 'top'"
      alignItems="center"
      justifyContent="space-between"
    >
      <FlexContainer alignItems="center">
        <FontAwesomeIcon v-if="back" icon="arrow-left" style="margin-right:15px;cursor:pointer" @click="goBack" />
        <h1 class="navbar-title">
          {{ title }}
        </h1>
      </FlexContainer>
      <slot></slot>
    </FlexContainer>
    <slot v-else></slot>
  </header>
</template>

<script>
import FlexContainer from '@/components/FlexContainer'

export default {
  components: {
    FlexContainer,
  },
  props: {
    title: String,
    position: {
      type: String,
      default: 'top',
    },
    paddingless: {
      type: Boolean,
      default: false,
    },
    back: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      return {
        bottom: this.position === 'bottom',
        navbar: true,
      }
    },
    style() {
      return {
        padding: this.paddingless ? '0' : '0 1em',
      }
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
}

</script>

<style scoped>

.navbar {
  height: 50px;
  box-shadow: 0 1px 8px #ccc;
}

.navbar-title {
  margin: 0;
  font-size: 1em;
}

.bottom {
  position: absolute;
  width: calc(100% - 2em);
  bottom: 0;
  /* outline: 1px solid #000; */
}

</style>