<template>
    
<div id="activityDetailsContainer" v-if="patient">
  <section>
          <div class="float-right">
         	   <router-link :to="{ path:'/dashboard/addEditPatient/'+patient.id}">Edit</router-link>
          </div>
      <h2>Patient Details</h2>
  </section>
	<section id="previewConditionDetails">
		<section class="mb-2">
			<img :src="patient.image" width="150" height="150"/>
		</section>
		<table class="table w-100">
			<tbody v-if="patient">
				<tr>
					<td class="w-50"><strong>First Name</strong></td>
					<td>{{patient.firstName}}</td>
				</tr>
				<tr>
					<td class="w-50"><strong>Last Name</strong></td>
					<td>{{patient.lastName}}</td>
				</tr>
				<tr>
					<td class="w-50"><strong>Admitted Date</strong></td>
					<td>{{patient.admittedDate}}</td>
				</tr>
				<tr>
					<td class="w-50"><strong>Is Patient Dischared</strong></td>
					<td class="w-50">{{patient.IsDischarged ? "Yes" : "No"}} </td>
				</tr>
				<tr>
					<td class="w-50"><strong>Bed No</strong></td>
					<td>{{patient.bedNo}}</td>
				</tr>
				<tr>
					<td class="w-50"><strong>Add Payment</strong></td>
					<td>
						<div v-for="item in patient.services">
							{{item}}
						</div>
					</td>
				</tr>
				<tr>
					<td class="w-50"><strong>Services</strong></td>
					<td>
						<router-link to="/dashboard/bill/1">Payment Link</router-link>
					</td>
				</tr>
			</tbody>
		</table>

	</section>
</div>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'
import { Patient } from '../../../store/models';
import { PatientService } from '../../../store/service/patient-service';


@Component({})
export default class ProfileView extends Vue {
    patient?:Patient | undefined =  {
      id:'',
      firstName : '',
      lastName : '',
      type : '',
      admittedDate : '',
      isDischarged : false,
      bedNo : '',
      services : [],
      image : ''

      };

    async created() {

        await PatientService.getPatientsById(this.$route.params.id)
        .then((e)=> {
            this.patient = (e) as Patient;
        })
    }

}

</script>