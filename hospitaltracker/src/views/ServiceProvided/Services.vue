<template>
    <section>
         <section>
            <div class="float-right mb-2">
                <router-link to="/dashboard/addEditService/0">Create</router-link>
            </div>
        </section>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Charges</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>
                    <router-link to="/dashboard/services/1">X-Ray</router-link>
                </td>
                <td>Bosy Test</td>
                <td>250</td>
            </tr>
            <tr>
                <th scope="row">1</th>
                <td>
                    <router-link to="/dashboard/services/1">Dr Consultation</router-link>
                </td>
                <td>Consultation</td>
                <td>1000</td>
            </tr>

        </tbody>
    </table>
    </section>
</template>
