import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import EquipmentItemComponent from 'app/components/equipment/equipment-item';
import {Equipment, EquipmentService} from 'app/services/equipment-service'

var template: string = `
	<div class="container">
		<div class="row">
			<h1>Equipment</h1>
			<table class="table">
				<thead>
					<tr>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="#item of equipment">
						<td>
							<equipment-item [equipment]="item"></equipment-item>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
`;

@Component({
	selector: 'app',
	providers: [EquipmentService],
	template: template,
	directives: [
		NgFor,
		EquipmentItemComponent
	]
})
export default class ApplicationComponent {
	
	equipment: Array<Equipment> = [];
	
	constructor(private equipmentService: EquipmentService) {
		this.equipment = this.equipmentService.getEquipment();
	}
	
}