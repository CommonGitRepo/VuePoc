<template>
<section>
  <section>
          <div class="float-right">
         	   <router-link :to="{ path:backToPath}">Cancel</router-link>
          </div>
      <h2>Patient Details</h2>
      <b-img class="float-right" v-if="uploadedImageToShow"  :src="uploadedImageToShow" fluid alt="Fluid image"></b-img>
  </section>
<ValidationObserver ref="observer">
    <b-form class="w-50" slot-scope="{ validate }" @submit.stop.prevent="validate().then(handleSubmit)" v-if="patient">
       <ValidationProvider rules="required" name="FirstName">
        <b-form-group slot-scope="{ valid, errors }" label="First Name">
            <b-form-input
              type="text"
              v-model="patient.firstName"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter first name">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
       </ValidationProvider>
       <ValidationProvider rules="required" name="Last Name">
        <b-form-group slot-scope="{ valid, errors }" label="Last Name">
            <b-form-input
              type="text"
               :state="errors[0] ? false : (valid ? true : null)"
              v-model="patient.lastName"
              placeholder="Enter last name">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
       </ValidationProvider>
       <ValidationProvider rules="required" name="Admitted Date">
        <b-form-group slot-scope="{ valid, errors }" label="Admitted Date">
            <b-form-input
              type="date"
               :state="errors[0] ? false : (valid ? true : null)"
              v-model="patient.admittedDate"
              placeholder="Enter admitted date">
            </b-form-input>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
       </ValidationProvider>
        <b-form-group>
           <b-form-checkbox 
               v-model="patient.isDischarged"
               name="IsDicharged"
           >
              Is patient discharged</b-form-checkbox>
        </b-form-group>
       <ValidationProvider rules="required" name="Type">
        <b-form-group slot-scope="{ valid, errors }" label="Type">
           <b-form-select 
           :state="errors[0] ? false : (valid ? true : null)"
           v-model="patient.type">
            <option value="">Choose</option>
            <option value="IPD">IPD</option>
            <option value="OPD">OPD</option>
          </b-form-select>
          <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
       </ValidationProvider>
        <ValidationProvider rules="required" name="Bed No">
        <b-form-group slot-scope="{ valid, errors }" label="Bed No">
           <b-form-select 
           :state="errors[0] ? false : (valid ? true : null)"
           v-model="patient.bedNo">
            <option value="">Choose</option>
            <option value="w-100">W-100</option>
            <option value="w-101">W-101</option>
            <option value="w-102">W-102</option>
            <option value="w-103">W-103</option>
          </b-form-select>
          <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
       </ValidationProvider>
       <ValidationProvider name="Services" rules="required|length:2">
        <b-form-group slot-scope="{ valid, errors }" label="Services">
          <b-form-checkbox-group 
            :state="errors[0] ? false : (valid ? true : null)" 
            v-model="patient.services">
            <b-form-checkbox value="Consultation">Consultation</b-form-checkbox>
            <b-form-checkbox value="X-Ray">X-Ray</b-form-checkbox>
            <b-form-checkbox value=">IPD">IPD</b-form-checkbox>
          </b-form-checkbox-group>
          <b-form-invalid-feedback>
            {{ errors[0] }}
          </b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider rules="required|ext:png|dimensions:65,65" name="Image">
        <b-form-group slot-scope="{ valid, errors }" label="Upload Image">
            <b-form-file
              type="text"
               :state="errors[0] ? false : (valid ? true : null)"
              v-model="imageFile"
              placeholder="select image"
              @change="showImage"
              >
            </b-form-file>
            <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </b-form-group>
        </ValidationProvider>

        <!-- <ValidationProvider rules="required" name="IsBillPaied">
          <b-form-group slot-scope="{ valid, errors }" label="Is Bill Paied ?">
            <b-form-radio-group
              :state="errors[0] ? false : (valid ? true : null)" 
              v-model="patient.isBillPaied"
              :options="optionsRadio"
              value-field="text"
              text-field="value"
              >
           </b-form-radio-group>
          </b-form-group>
          
          <b-form-invalid-feedback>
              {{ errors[0] }}
            </b-form-invalid-feedback>
        </ValidationProvider> -->
       

      <b-button block type="submit" variant="primary">Submit</b-button>
    </b-form>
    </ValidationObserver>
    </section>
</template>
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'
import { Patient } from '../../../store/models';
import { ValidationObserver, ValidationProvider,localize } from 'vee-validate';
import { PatientService } from '../../../store/service/patient-service';


@Component({})
export default class PatientView extends Vue 
{
    show:boolean=true;
    imageFile:File= null;
    uploadedImageToShow = '';
    // optionsRadio:[] = [
    // {
    //     text:"Yes",value:true,

    // },
    // {
    //   text:"Yes",value:true,
    // }]

    backToPath:string='/dashboard'

    patient :  Patient = {
      id:'',
      firstName : '',
      lastName : '',
      type : '',
      isDischarged : false,
      bedNo : '',
      services : [],
      image : '',
      isBillPaied : null

    };

     formCustomMessage()
      {

        const dict = {
            en: {
              fields: {
                FirstName: {
                  required: 'First Name cannot be empty!',
                },
                LastName: {
                  required: 'First Name cannot be empty!',
                },
                Type: {
                  required: 'Please select type',
                },
                Image: {
                  dimensions: 'Dimention of image should be 65 X 65',
                }
              }
            }
          }
        localize(dict);
      }

    showImage(e:any){
      console.log(e.srcElement.files[0]);
      this.getBase64(e.srcElement.files[0])
        .then(data=>{
          this.uploadedImageToShow = data as string;
        });
    }

    handleSubmit(isValid:any){
       const id = this.$route.params.id;
        if(!isValid)
            return;
        this.getBase64(this.imageFile)
          .then(data => {
            this.patient.image = data as string;
              if(id == '0'){
                PatientService.create(this.patient)
                .then(x=>{
                  this.$router.push('/dashboard');
                });
              }else{
                PatientService.update(this.patient)
                .then(x=>{
                  this.$router.push('/dashboard');
                });
              }
          });
    }
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  async created() {
        const id = this.$route.params.id
        if(id != "0"){
          PatientService.getPatientsById(id)
            .then(data=>{
              this.patient = data as Patient;
              this.backToPath = '/dashboard/patient/'+id
            })
        }
        this.formCustomMessage();
  }

}
</script>