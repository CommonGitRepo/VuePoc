<template>
    <section>
         <section>
            <div class="float-right mb-2">
                <router-link to="/dashboard/addEditPatient/0">Create</router-link>
            </div>
        </section>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Full Name</th>
                <th scope="col">Address</th>
                <th scope="col">Admitted On</th>
                <th scope="col">Status</th>
                <th scope="col">Bill Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        <router-link to="/dashboard/patient/1">Rakesh Singh</router-link>
                    </td>
                    <td>Nandanwan</td>
                    <td>22 June 2020</td>
                    <td>Admitted</td>
                    <td>In Progress</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
