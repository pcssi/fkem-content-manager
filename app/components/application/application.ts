import {Component} from 'angular2/core';
import EquipmentItemsComponent from '../equipment/equipment-items';
import GameEventsComponent from '../game-events/game-events';

var template: string = `
	<div class="container">
		<div class="row">
			<equipment-items></equipment-items>
			<game-events></game-events>
		</div>
	</div>
`;

@Component({
	selector: 'app',
	template: template,
	directives: [
		EquipmentItemsComponent,
		GameEventsComponent
	]
})
export default class ApplicationComponent {
	
	constructor(){};
}