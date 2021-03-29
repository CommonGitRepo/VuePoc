<template>
    
<div id="activityDetailsContainer">
  <section>
          <div class="float-right">
              <a href="#" class="btn btn-link" id="btnEditConditionDetails"><span class="fas fa-fw fa-edit"></span>Edit</a>
          </div>
      <h2>Patient Details</h2>
  </section>

<section id="previewConditionDetails">
	<table class="table w-100">
		<tbody>
			<tr>
				<td class="w-50"><strong>First Name</strong></td>
				<td>Rakesh</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Last Name</strong></td>
				<td>Singh</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Type</strong></td>
				<td>IPD</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Admitted Date</strong></td>
				<td>
					10/03/2019
				</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Dischared Date</strong></td>
				<td class="w-50">19/02/2019 </td>
			</tr>
			<tr>
				<td class="w-50"><strong>Address</strong></td>
				<td>Dalal Street</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Bed No</strong></td>
				<td>W-1001</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Insuran Id</strong></td>
				<td>10001</td>
			</tr>
		</tbody>
	</table>

	<h3>Services Used</h3>
	<table class="table w-100">
		<tbody>

			<tr>
				<td class="w-50"><strong>Dr Consultation</strong></td>
				<td class="w-50">
					Regular Checkup
				</td>
			</tr>
			<tr>
				<td class="w-50"><strong>X-ray</strong></td>
				<td class="w-50">
					Leg
				</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Bed </strong></td>
				<td class="w-50">
					Normal
				</td>
			</tr>

		</tbody>
	</table>
	<h3>Bill Amount Patient</h3>
	<table class="table w-100">
		<tbody>

			<tr>
				<td class="w-50"><strong>Amoun Paid by Insurance</strong></td>
				<td class="w-50">
					10000
				</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Amount Paid By Patient</strong></td>
				<td class="w-50">
					20000
				</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Total</strong></td>
				<td class="w-50">
					30000
					<button type="button" class="btn btn-link">Calculate again</button>
				</td>
			</tr>

		</tbody>
	</table>
	<h3>Bill Amount Doctor</h3>
	<table class="table w-100">
		<tbody>

			<tr>
				<td class="w-50"><strong>Fixed Amount</strong></td>
				<td class="w-50">
					40000
				</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Incentive Amount</strong></td>
				<td class="w-50">
					2000
				</td>
			</tr>
			<tr>
				<td class="w-50"><strong>Total</strong></td>
				<td class="w-50">
					42000
					<button type="button" class="btn btn-link">Calculate again</button>
				</td>
			</tr>

		</tbody>
	</table>
</section>

</div>
 </template>