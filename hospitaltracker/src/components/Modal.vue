<template>
    <div>
        <!-- Using value -->
        <b-button variant="primary" v-b-modal="'my-modal'">Show Modal</b-button>

        <!-- The modal -->
        <b-modal id="my-modal">Are you sure you want to discharge the patient</b-modal>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {

  },
})
export default class Modal extends Vue{
   
}
</script>