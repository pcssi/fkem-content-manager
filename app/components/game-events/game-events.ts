import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {GameEventsService} from '../../services/game-events.service';
import EventChoicesComponent from '../game-events/event-choices/event-choices';
import GameEventFormComponent from '../game-events/game-event-form';
import {ROUTER_DIRECTIVES} from 'angular2/router';

const template: string = `
	<h1>Game Events</h1>
	<table class="table">
		<thead>
			<tr>
				<th>Title</th>
				<th>Tile Types</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#event of dataStore.gameEvents, #i = index">
				<td>
					<div (click)="toggleExpandedEvent(i)">
						{{event.title}}
					</div>
					<div *ngIf="expandedEventIndex === i">
						<event-choices 
							[choices]="event.choices"
							[eventIndex]="i"></event-choices>
					</div>
				</td>
				<td>
					<div *ngFor="#tile of event.tileTypes">
						{{tile}}
					</div>
				</td>
				<td>
					<a [routerLink]="['Event Editor', {eventIndex: i}]">Edit</a>
				</td>
			</tr>
		</tbody>
	</table>
`;

@Component({
	selector: 'game-events',
	template: template,
	directives: [
		NgFor,
		EventChoicesComponent,
		GameEventFormComponent,
		ROUTER_DIRECTIVES
	]
})
export default class GameEventsComponent {
	dataStore: any;
	expandedEventIndex: number = -1;
	
	constructor(gameEventsService: GameEventsService) {
		this.dataStore = gameEventsService.dataStore;
	}
	
	toggleExpandedEvent(i: number) {
		if(this.expandedEventIndex === i) {
			this.expandedEventIndex = -1;
			return;
		}
		this.expandedEventIndex = i;
	}
}