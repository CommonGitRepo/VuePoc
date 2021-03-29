<template>
<div class="col-md-2 bg-light d-none d-md-block position-fixed sidebar">
   <div class="left-sidebar">
        <ul class="nav flex-column">
            <li class="nav-item mb-3">
                <router-link to="/dashboard" >Patients</router-link>
            </li>
            <li class="nav-item mb-3">
                <router-link to='/dashboard/doctor' >Doctor</router-link>
            </li>
            <li class="nav-item mb-3">
                <router-link to="/dashboard/services" >Services</router-link>
            </li>
            <li class="nav-item mb-3">
                <router-link to="/dashboard/bill" >Bill & Accounting</router-link>
            </li>
        </ul>
    </div>
 </div>
</template>
