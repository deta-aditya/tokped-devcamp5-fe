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

      <FlexContainer style="width:90%" justifyContent="space-around">
        <router-link to="/pembeli" class="act">
          <Card :padding="20">
            <FontAwesomeIcon icon="shopping-basket" size="3x" style="width:100%;margin-bottom:0.2em" />
            <span>Act as Buyer (Pembeli)</span>
          </Card>
        </router-link>
        <router-link to="/mitra" class="act">
          <Card :padding="20">
            <FontAwesomeIcon icon="user" size="3x" style="width:100%;margin-bottom:0.2em" />
            <span>Act as Seller (Mitra)</span>
          </Card>
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
  width: 40vw;
  /* flex: 1; */
}

.act .card {
  color: #fff;
  text-align: center;
}

.act:first-child .card {
  background: linear-gradient(25deg, #42b549, #e2d34b)
}

.act:last-child .card {
  background: linear-gradient(25deg, #e68d27, #f37454)
}

/* .home {
  padding: 0.75em 1em;
} */

</style>
