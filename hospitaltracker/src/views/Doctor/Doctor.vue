<template>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Doctor</th>
                <th scope="col">Joined</th>
                <th scope="col">Category</th>
                <th scope="col">Bill Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>
                    <router-link to="/dashboard/doctor/1">Dr. Ramesh Agrawal</router-link>
                </td>
                <td>23-10-2019</td>
                <td>Consultant</td>
                <td>Pending</td>
            </tr>
               <tr>
                    <th scope="row">2</th>
                    <td>
                        <router-link to="/dashboard/doctor/1">Dr. Smitha Agrawal</router-link>
                    </td>
                    <td>23-10-2019</td>
                    <td>Permanent</td>
                    <td>Pending</td>
                </tr>
        </tbody>
    </table>
</template>
