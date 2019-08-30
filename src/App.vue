<template>
  <div id="app" :style="style">
    <router-view/>
  </div>
</template>

<script>

import { font } from "./config";
import { createFontLink } from "./utils"

export default {
  computed: {
    style() {
      return {
        fontFamily: font.family,
      }
    },
  },

  created() {
    createFontLink(font.url)
  },
}

</script>
