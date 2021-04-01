<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { localize } from 'node_modules/vee-validate/dist/types';
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class App extends Vue {
    
}

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
