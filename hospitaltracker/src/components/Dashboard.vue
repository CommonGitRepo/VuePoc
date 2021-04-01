<template>
   <div class="container-fluid"> 
    <Navbar></Navbar>
    <div class="row">
      <LeftNavbar></LeftNavbar>
       <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4 content">
        <router-view></router-view>
        <router-view name="helper"></router-view>
       </main>
     </div>
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
export default class Dashboard extends Vue{

}
</script>