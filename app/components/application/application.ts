import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import EquipmentItemsComponent from '../equipment/equipment-items';
import GameEventsComponent from '../game-events/game-events';
import {GameEventsService} from '../../services/game-events.service';

var template: string = `
	<div class="container">
		<div class="row">
			<nav>
				<a [routerLink]="['Events']">Events</a>
				<a [routerLink]="['Equipment']">Equipment</a>
			</nav>
			<router-outlet></router-outlet>
		</div>
	</div>
`;

@Component({
	selector: 'app',
	template: template,
	directives: [ROUTER_DIRECTIVES],
	providers: [GameEventsService]
})
@RouteConfig([
	{path: '/events', name: 'Events', component: GameEventsComponent},
	{path: '/equipment', name: 'Equipment', component: EquipmentItemsComponent}
])
export default class ApplicationComponent {
	
	constructor(){};
}