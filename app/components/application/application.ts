import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import EquipmentItemsComponent from '../equipment/equipment-items';
import GameEventsComponent from '../game-events/game-events';
import GameEventFormComponent from '../game-events/game-event-form';
import {GameEventsService} from '../../services/game-events.service';
import {EquipmentService} from '../../services/equipment.service';

var template: string = `
	<div class="container">
		<div class="row">
			<nav class="navbar navbar-default">
				<ul class="nav navbar-nav">
					<li><a [routerLink]="['Events']">Events</a></li>
					<li><a [routerLink]="['Equipment']">Equipment</a></li>
				</ul>
			</nav>
			<router-outlet></router-outlet>
		</div>
	</div>
`;

@Component({
	selector: 'app',
	template: template,
	directives: [ROUTER_DIRECTIVES],
	providers: [
		GameEventsService,
		EquipmentService
	]
})
@RouteConfig([
	{path: '/events', name: 'Events', component: GameEventsComponent},
	{path: '/event-editor/:eventIndex/', name: 'Event Editor', component: GameEventFormComponent},
	{path: '/equipment', name: 'Equipment', component: EquipmentItemsComponent}
])
export default class ApplicationComponent {
	
	constructor(){};
}