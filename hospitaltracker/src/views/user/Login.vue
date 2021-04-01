<template>
    <section class="container-fluid bg">
        <section class="row justify-content-center">
            <section class="col-12 col-sm-6 col-md-3 form-indentation">
                <form class="form-container bg-light p-4 border-radius-10">
                    <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text">Globalization</label>
                </div>
                    <select v-model="selectedLaguage" @change="changeLocale()" class="custom-select" id="inputGroupSelect01">
                        <option :value="{}" selected>Choose...</option>
                        <option  v-for="item in languages" :value="item.language">{{item.title}}</option>
                    </select>   
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">{{$t('emailAddress')}}</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">{{$t('password')}}</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                    <button @click="loadDashbord()" type="button" class="btn btn-primary btn-block">Submit</button>
                </form>
            </section>
        </section>
        
    </section>
</template>

<script lang="ts">
import VueRouter from 'vue-router';
import { Component,Vue } from 'vue-property-decorator';
@Component({
})
export default class Login extends Vue {
    selectedLaguage:string = 'en';
    languages:Array<any> = [
            {  language: 'en', title: 'English' },
            {  language: 'es', title: 'Español' },
            {  language: 'hi', title: 'हिन्दी' }
        ]
    public loadDashbord() {
        this.$router.push({ path: '/dashboard' });
    }

    changeLocale(){
        
        this.$i18n.locale = this.selectedLaguage;
    }

}
</script>

<style>
.border-radius-10
{
    border-radius:  10px!important;
}
.bg
{
    background : url('../../assets/images/doctor.jpg') no-repeat;
    widows: 100%;
    height: 100vh;
    background-size: 100%;
}
.form-indentation
{
    top: 250px!important;
}
</style>