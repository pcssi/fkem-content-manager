import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {GameEventsService} from '../../services/game-events.service';
import EventChoicesComponent from '../game-events/event-choices/event-choices';

const template: string = `
	<h1>Game Events</h1>
	<table class="table">
		<thead>
			<tr>
				<th>Title</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#event of gameEvents" (click)="event.expanded = !event.expanded">
				<td>
					<div>
						{{event.title}}
					</div>
					<div *ngIf="event.expanded">
						<event-choices [choiceIds]="event.choices"></event-choices>
					</div>
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
		EventChoicesComponent
	]
})
export default class GameEventsComponent {
	gameEvents: Object = [];
	
	constructor(gameEventsService: GameEventsService) {
		gameEventsService.gameEvents$.subscribe(updatedEvents => this.gameEvents = updatedEvents);
		gameEventsService.getGameEvents();
	}
}