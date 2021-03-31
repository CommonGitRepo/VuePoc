<template>
    <nav class="navbar navbar-dark bg-primary fixed-top flex-md-nowrap p0">
    <a class="navbar-brand col-sm-2 pl-n1" href="#">Hospital Management System</a>
    <ul class="navbar-nav px-3">
      <li class="nav-item">
        <a class="nav-link" href="#">
        <span class="badge badge-light">{{patientCount}}</span>
          Logout
        </a>
      </li>
    </ul>    
   </nav>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {

  },
})
export default class Dashboard extends Vue{
    patientCount : string = '0';
    created() {
      this.$root.$on('patientCount',message=>{
          console.log(message);
          this.patientCount = message;
      })
    };

}
</script>

