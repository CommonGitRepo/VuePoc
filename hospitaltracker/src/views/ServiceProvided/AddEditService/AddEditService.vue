<template>
    <section id="" class="">
        <form >
            <table class="table w-100">
                <thead>
                    <tr>
                        <th>
                            <div class="h4 mb-0">Service Detail</div>
                        </th>
                        <th class="text-right">
                            <a class="btn btn-link pr-0" href="#">Cancel</a>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="form-group">
                        <td><label class="col-form-label">First Name</label></td>
                        <td>
                            <input placeholder="Please enter First Name" class="form-control"  />
                            <span class="invalid-feedback">
                                <span class="text-danger field-validation-valid"></span>
                            </span>
                        </td>
                    </tr>
                    <tr class="form-group">
                        <td><label class="col-form-label">Last Name</label></td>
                        <td>
                            <input placeholder="Please enter a Last Name" class="form-control" />
                            <span class="invalid-feedback">
                                <span class="text-danger field-validation-valid"></span>
                            </span>
                        </td>
                    </tr>

                    <tr class="form-group">
                        <td class="border-top-0"><label class="col-form-label"> Type</label></td>
                        <td class="border-top-0">
                            <select class="form-control">
                                <option value="">Select a Type</option>
                                <option value="Home Address">Surgon</option>
                                <option value="Shipping Address">Consultant</option>
                            </select>
                            <span class="invalid-feedback">
                                <span class="text-danger field-validation-valid"></span>
                            </span>
                        </td>
                    </tr>
                     <tr class="form-group">
                        <td><label class="col-form-label">Joined Date</label></td>
                        <td>
                            <input placeholder="Please enter a joined date" class="form-control" />
                            <span class="invalid-feedback">
                                <span class="text-danger field-validation-valid"></span>
                            </span>
                        </td>
                    </tr>
                      <tr class="form-group">
                        <td><label class="col-form-label">Address</label></td>
                        <td>
                            <textarea rows="3" placeholder="Please enter a address" class="form-control" />
                            <span class="invalid-feedback">
                                <span class="text-danger field-validation-valid"></span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>


            <hr>

            <div class="row">
                <div class="col-md-12">
                    <a class="btn btn-success link-collapse float-right" href="#" id="btnParticipantAddAddress">
                        <i class="hidden fas fa-spinner fa-spin" aria-hidden="true"></i> Save Changes
                    </a>
                </div>
            </div>

        </form>
    </section>
</template>