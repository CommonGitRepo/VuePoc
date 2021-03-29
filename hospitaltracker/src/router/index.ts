import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children:[
      {
        path: '',
        name: 'patients',
        component: () => import(/* webpackChunkName: "patients" */ '@/views/patients/Patients.vue'),
      },
      {
        path: 'patient/:id',
        name: 'patientDetail',
        component: () => import(/* webpackChunkName: "patientDetail" */ '@/views/patients/Readonly/Profile.vue'),
      },
      {
        path: 'addEditPatient/:id',
        name: 'addEditPatient',
        component: () => import(/* webpackChunkName: "addEditPatient" */ '@/views/patients/AddEditPatient/AddEditPatients.vue'),
      },
      {
        path: 'doctor',
        name: 'doctor',
        component: () => import(/* webpackChunkName: "doctor" */ '@/views/Doctor/Doctor.vue'),
      },
      {
        path: 'doctor/:id',
        name: 'doctorDetail',
        component: () => import(/* webpackChunkName: "doctorDetail" */ '@/views/Doctor/Readonly/Profile.vue'),
      },
      {
        path: 'addEditDoctor/:id',
        name: 'addEditDoctor',
        component: () => import(/* webpackChunkName: "addEditDoctor" */ '@/views/Doctor/AddEditDoctor/AddEditDoctor.vue'),
      },
      {
        path: 'services',
        name: 'services',
        component: () => import(/* webpackChunkName: "services" */ '@/views/ServiceProvided/Services.vue'),
      },
      {
        path: 'services/:id',
        name: 'servicesDetail',
        component: () => import(/* webpackChunkName: "services" */ '@/views/ServiceProvided/Readonly/ServicesReadonly.vue'),
      },
      {
        path: 'addEditService/:id',
        name: 'addEditService',
        component: () => import(/* webpackChunkName: "addEditService" */ '@/views/ServiceProvided/AddEditService/AddEditService.vue'),
      },
      {
        path: 'bill',
        name: 'bill',
        component: () => import(/* webpackChunkName: "bill" */ '@/views/Billing/Billing.vue'),
      },
      {
        path: 'bill/:id',
        name: 'billDetail',
        component: () => import(/* webpackChunkName: "billDetail" */ '@/views/Billing/Readonly/BillingReadonly.vue'),
      },
      {
        path: 'edit/:id',
        name: 'editBill',
        component: () => import(/* webpackChunkName: "editBill" */ '@/views/Billing/Edit/EditBilling.vue'),
      }
      
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue'),
  },
  {
    path: '/register',
    name: 'registerUser',
    component: () => import(/* webpackChunkName: "register" */ '@/views/user/Register.vue'),
  },
  {
    path: '',
    name: 'default',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue'),
  },
];
const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;


