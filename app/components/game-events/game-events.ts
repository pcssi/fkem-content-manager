import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {GameEvent, GameEventService} from '../../services/gameEvent-service';
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
	providers: [GameEventService],
	template: template,
	directives: [
		NgFor,
		EventChoicesComponent
	]
})
export default class GameEventsComponent {
	gameEvents: Array<GameEvent> = [];
	
	constructor(private gameEventService: GameEventService) {
		this.gameEvents = this.gameEventService.getGameEvents();
	}
}