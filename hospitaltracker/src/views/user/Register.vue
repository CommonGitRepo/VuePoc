<template>
    <section class="container-fluid bg">
        <section class="row justify-content-center">
            <section class="col-12 col-sm-6 col-md-3 form-indentation">
                <form class="form-container bg-light p-4 border-radius-10">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Type</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Doctor</option>
                            <option>Nurse</option>
                            <option>Receptionaist</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </section>
        </section>
        
    </section>
</template>
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