import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {GameEvent, GameEventService} from 'app/services/gameEvent-service';
import EventChoicesComponent from 'app/components/game-events/event-choices/event-choices';

const template: string = `
	<h1>Game Events</h1>
	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#event of gameEvents">
				<td>
					<div>
						{{event.name}}
					</div>
					<div>
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