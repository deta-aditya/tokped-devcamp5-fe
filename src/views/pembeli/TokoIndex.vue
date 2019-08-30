<template>  
  <TopBarLayout title="Pilih Toko">
    <template #nav>
      <router-link to="/pembeli/pesanan">
        <FontAwesomeIcon icon="history" />
      </router-link>
    </template>
    <FlexContainer class="content">
      <Card
        v-for="store in stores"
        :key="store.id"
        class="store-item"
        :padding="0"
      >
        <div @click="selectStore(store.id)">
          <img :src="store.img_header" :alt="store.name">
          <div style="padding:0.7em">
            <h2>{{ store.name }}</h2>
          </div>
        </div>
      </Card>
    </FlexContainer>
  </TopBarLayout>
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'
import FlexContainer from '@/components/FlexContainer'
import Card from '@/components/Card'
import { getStores } from '@/api'

export default {
  components: {
    FlexContainer,
    TopBarLayout,
    Card,
  },

  data: () => ({
    stores: [],
  }),

  async created() {
    this.stores = await getStores()
  },

  methods: {
    selectStore(id) {
      this.$root.$data.store = id
      this.$router.push('/pembeli/store')
    },
  },
}
</script>

<style scoped>
.content {
  padding: 1em;
  width: calc(100% - 2em);
}

.store-item {
  width: 50%;
  cursor: pointer;
}

.store-item:first-child {
  margin-right: 1em;
}

.store-item img {
  width: 100%;
}

.store-item h2 {
  margin: 0;
  font-size: 1.125em;
}
</style>