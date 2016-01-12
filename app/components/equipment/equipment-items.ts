import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Equipment, EquipmentService} from '../../services/equipment-service';

var template: string = `
	<h1>Equipment</h1>
	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Type</th>
				<th>Atk</th>
				<th>Def</th>
				<th>Mag</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#item of equipment">
				<td>{{item.name}}</td>
				<td>{{item.type}}</td>
				<td>{{item.attackPower}}</td>
				<td>{{item.defensePower}}</td>
				<td>{{item.magicPower}}</td>
			</tr>
		</tbody>
	</table>
	
`;

@Component({
	selector: 'equipment-items',
	providers: [EquipmentService],
	template: template,
	directives: [
		NgFor
	]
})
export default class EquipmentItemsComponent {

	equipment: Array<Equipment> = [];

	constructor(private equipmentService: EquipmentService) {
		this.equipment = this.equipmentService.getEquipment();
	}

}