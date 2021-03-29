<template>
  <div id="app">
   <!-- <Navbar></Navbar>
   <div class="container-fluid"> 
     <div class="row">
      <LeftNavbar></LeftNavbar>
       <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4 content">
        
       </main>
     </div>
   </div> -->
   <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import  LeftNavbar  from '@/components/LeftNavbar.vue'
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    LeftNavbar,Navbar
  },
})
export default class App extends Vue {}

</script>

<style lang="scss">

.sidebar {
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    padding: 70px 0 0 10px;
}
.content{
  position: fixed;
  top: 75px!important;
}
</style>
