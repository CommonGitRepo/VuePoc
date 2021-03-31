import axios from 'axios'
import { Patient } from '../models';



export abstract class PatientService {

    private static baseUrl:string = process.env.VUE_APP_SERVICE_URL;
   
    
    public static async getPatients():Promise<Patient[] | undefined> {
        try
        {
            var response:Patient[] =  await axios.get(this.baseUrl+'/Patient')
            return response.data as Patient[];
        }catch(e){
            console.log(e);
        }
       
    }

    public static async getPatientsById(id:string):Promise<Patient | undefined> {
        try
        {
            var response:Patient =  await axios.get(this.baseUrl+`/Patient/${id}`)
            return response.data as Patient;
        }catch(e){
            console.log(e);
        }
       
    }

    public static async create(patient:Patient):Promise<Patient | undefined> {
        try
        {
            var response:Patient =  await axios.post(this.baseUrl+`/Patient/create`,patient)
            return response.data as Patient;
        }catch(e){
            console.log(e);
        }
       
    }

    public static async update(patient:Patient):Promise<any> {
        try
        {
            var response:Patient =  await axios.put(this.baseUrl+`/Patient/${patient.id}`,patient)
            return response.data as any;
        }catch(e){
            console.log(e);
        }
       
    }
    public static async GetActivePatient():Promise<any> {
        try
        {
            var response:Patient =  await axios.get(this.baseUrl+`/Patient/GetActivePatient`)
            return response.data as Patient[];
        }catch(e){
            console.log(e);
        }
       
    }


}