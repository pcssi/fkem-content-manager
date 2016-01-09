import {Component} from 'angular2/core';
import EquipmentItemsComponent from 'app/components/equipment/equipment-items';

var template: string = `
	<div class="container">
		<div class="row">
			<equipment-items></equipment-items>
		</div>
	</div>
`;

@Component({
	selector: 'app',
	template: template,
	directives: [
		EquipmentItemsComponent
	]
})
export default class ApplicationComponent {
	
	constructor(){};
}