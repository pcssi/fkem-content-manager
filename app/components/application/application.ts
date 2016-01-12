import {Component} from 'angular2/core';
import EquipmentItemsComponent from 'app/components/equipment/equipment-items';
import GameEventsComponent from 'app/components/game-events/game-events';
import EventChoicesComponent from 'app/components/game-events/event-choices/event-choices';

var template: string = `
	<div class="container">
		<div class="row">
			<equipment-items></equipment-items>
			<game-events></game-events>
			<event-choices></event-choices>
		</div>
	</div>
`;

@Component({
	selector: 'app',
	template: template,
	directives: [
		EquipmentItemsComponent,
		GameEventsComponent,
		EventChoicesComponent
	]
})
export default class ApplicationComponent {
	
	constructor(){};
}