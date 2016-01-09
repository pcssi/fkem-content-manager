import {Component} from 'angular2/core';
import {Equipment} from 'app/services/equipment-service';

var template: string = `
	{{equipment.name}}
`;

@Component({
	selector: 'equipment-item',
	properties: ['equipment'],
	template: template
})
export default class EquipmentItemComponent {
	equipment: Equipment;
}