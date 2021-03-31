import {VuexModule ,Module, getModule, Mutation, Action} from 'vuex-module-decorators'
import store from '@/store'
import { Patient } from '../models';
import { PatientService } from '../service/patient-service';


@Module({
    dynamic:true,
    namespaced:true,
    name:'patients',
    store
})
class PatientModule extends VuexModule {


}


export default getModule(PatientModule);