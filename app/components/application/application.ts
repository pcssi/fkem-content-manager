import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Equipment, EquipmentService} from 'app/services/equipment-service'

var template: string = `
	<div *ngFor="#item of equipment">
		{{item.name}}
	</div>
`;

@Component({
	selector: 'app',
	providers: [EquipmentService],
	template: template,
	directives: [
		NgFor
	]
})
export default class ApplicationComponent {
	
	equipment: Array<Equipment> = [];
	
	constructor(private equipmentService: EquipmentService) {
		this.equipment = this.equipmentService.getEquipment();
	}
	
}