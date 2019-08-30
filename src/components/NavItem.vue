<template>
  <FlexContainer 
    direction="column"
    alignItems="center"
    class="nav-item" 
    :style="style"
  >
    <FontAwesomeIcon 
      class="icon" 
      :icon="icon" 
      fixed-width 
    />
    <span class="text">{{ text }}</span>
  </FlexContainer>
</template>

<script>
import { colors } from '@/config'
import FlexContainer from '@/components/FlexContainer'

export default {
  components: {
    FlexContainer,
  },
  props: {
    icon: String,
    text: String,
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      return {
        color: this.active ? colors.accent : '#666',
        fontWeight: this.active ? 'bold': 'normal',
      }
    },
  },
}
</script>

<style scoped>

.icon {
  display: block;
  padding-bottom: 5px;
}

.text {
  /* font-weight: bold; */
  font-size: 0.6em;
}

</style>