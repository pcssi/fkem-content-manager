import {Component} from 'angular2/core';
import EquipmentItemsComponent from '../equipment/equipment-items';
import GameEventsComponent from '../game-events/game-events';
import GameEventFormComponent from '../game-events/game-event-form';
import {GameEventsService} from '../../services/game-events.service';

var template: string = `
	<div class="container">
		<div class="row">
			<equipment-items></equipment-items>
			<game-events></game-events>
			<game-event-form></game-event-form>
		</div>
	</div>
`;

@Component({
	selector: 'app',
	template: template,
	directives: [
		EquipmentItemsComponent,
		GameEventsComponent,
		GameEventFormComponent
	],
	providers: [GameEventsService]
})
export default class ApplicationComponent {
	
	constructor(){};
}