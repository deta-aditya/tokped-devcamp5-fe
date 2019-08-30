<template>
  <div class="bottom-bar-layout">
    <Navbar position="bottom">
      <FlexContainer
        :style="style" 
        justifyContent="space-between"
        alignItems="center">
        <NavItem 
          v-for="(nav, idx) in navigation" 
          :key="idx" 
          :text="nav.text"
          :icon="nav.icon"
          :active="'Beranda' === nav.text" 
        />
        <!-- <div class="">Beranda</div>
        <div class="">Transaksi</div>
        <div class="">Bantuan</div>
        <div class="">Akun Saya</div> -->
      </FlexContainer>
    </Navbar>
    <slot></slot>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import FlexContainer from '@/components/FlexContainer'
import NavItem from '@/components/NavItem'

export default {
  components: {
    Navbar,
    FlexContainer,
    NavItem,
  },
  data: () => ({
    navigation: [
      {text: 'Beranda', icon: 'home'},
      {text: 'Transaksi', icon: 'file-alt'},
      {text: 'Bantuan', icon: 'question-circle'},
      {text: 'Akun Saya', icon: 'smile'},

    ]
  }),
  computed: {
    style() {
      return {
        height: '100%',
      }
    }
  }
}
</script>