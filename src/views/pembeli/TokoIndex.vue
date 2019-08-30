<template>  
  <TopBarLayout title="Pilih Toko">
    <template #nav>
      <router-link to="/pembeli/pesanan">
        <FontAwesomeIcon icon="history" />
      </router-link>
    </template>
    <div class="content">
      <Card class="user-info">
        <FlexContainer justifyContent="space-between">
          <strong>{{ user.name }}</strong>
          <span>Rp{{ user.balance }}</span>
        </FlexContainer>
      </Card>
      <FlexContainer>
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
    </div>
  </TopBarLayout>
</template>

<script>
import TopBarLayout from '@/components/layouts/TopBarLayout'
import FlexContainer from '@/components/FlexContainer'
import Card from '@/components/Card'
import { getStores, getUserById } from '@/api'

export default {
  components: {
    FlexContainer,
    TopBarLayout,
    Card,
  },

  data: () => ({
    stores: [],
    user: {},
  }),

  created() {
    getStores().then(stores => this.stores = stores)
    getUserById(1).then(user => this.user = user)
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

.user-info {
  margin-bottom: 1em;
  color: #fff;
  background: linear-gradient(#20a049, #67ac40)
}

.user-info p {
  margin: 0;
}
</style>