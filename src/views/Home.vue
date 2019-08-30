<template>
  <BottomBarLayout class="home">
    <FlexContainer 
      direction="column"  
      justifyContent="center"
      alignItems="center"
    >
      <h1 style="margin:2em 0 0.5em" class="color-accent">tokosemerta</h1>
      <img src="@/assets/tokopedia.jpeg" width="100">
      <p>Feature Demonstration</p>

      <FlexContainer style="padding:0 1em">
        <router-link to="/pembeli" class="act">
          <Card>Act as Buyer (Pembeli)</Card>
        </router-link>
        <router-link to="/mitra" class="act">
          <Card>Act as Seller (Mitra)</Card>
        </router-link>
      </FlexContainer>
    </FlexContainer>
  </BottomBarLayout>
</template>

<script>
// @ is an alias to /src
import BottomBarLayout from '@/components/layouts/BottomBarLayout'
import FlexContainer from '@/components/FlexContainer'
import Card from '@/components/Card'

export default {
  name: 'home',
  components: {
    BottomBarLayout,
    FlexContainer,
    Card,
  },
  computed: {
    
  }
}
</script>

<style>

.act {
  color: #42b549;
  text-decoration: none;
  flex: 1;
}

.act:first-child {
  margin-right:5px; 
}

/* .home {
  padding: 0.75em 1em;
} */

</style>
