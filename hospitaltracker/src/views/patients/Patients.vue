<template>
    <section>
         <section v-if="optionsValues">
             <b-form-select @change="filterGrid()" v-model="filterValue" :options="optionsValues" class="w-20">

             </b-form-select>
            <div class="float-right mb-2">
                <router-link to="/dashboard/addEditPatient/0">Create</router-link>
            </div>
        </section>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col"></th>
                <th scope="col">Full Name</th>
                <th scope="col">Admitted On</th>
                <th scope="col">IsDischared</th>
                <th scope="col">Services</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredList">
                    <td scope="col">
                        <img :src="item.image" width="100" height="100">
                    </td>
                    <td>
                        <router-link :to="{ path:'/dashboard/patient/'+item.id}">{{item.firstName}} {{item.lastName}}</router-link>
                    </td>
                    <td>{{item.admittedDate}}</td>
                    <td>{{item.isDischarged ? "Yes":"No"}}</td>
                    <td>
                        <div v-for="innerItem in item.services">
                            {{innerItem}}
                        </div>
                    </td>
                    <td>
                        <Modal></Modal>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'
import { Patient } from '../../store/models'
import { PatientService } from '../../store/service/patient-service';
import Modal from '@/components/Modal.vue';


@Component({
    components:{Modal,}
})
export default class PatientView extends Vue {
    patients:Patient [] = [];
    filteredList :Patient[] = [];
    filterValue:string='true';
    optionsValues:[]=[
        {value:'true',text:'Active'},
        {value:'false',text:'Discharged'},
        {value:'',text:'All'}
    ]

    filterGrid(){

        console.log(this.filterValue);
        this.filteredList = this.patients.filter(x=>(!x.isDischarged)+'' == this.filterValue || this.filterValue == '');
    }
    async created() {
   
        await PatientService.getPatients()
        .then((e)=> {

            this.patients = (e) as  Patient []
            this.filteredList = this.patients.filter(x=>!x.isDischarged);
            console.log(this.patients);
            const count = this.patients.filter(x=>!x.isDischarged).length;
            this.$root.$emit("patientCount",count);
            
        })
    }

}

</script>