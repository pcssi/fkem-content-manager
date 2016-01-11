import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {GameEvent, GameEventService} from 'app/services/gameEvent-service';

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
				<td>{{event.name}}</td>
			</tr>
		</tbody>
	</table>
`;

@Component({
	selector: 'game-events',
	providers: [GameEventService],
	template: template,
	directives: [NgFor]
})
export default class GameEventsComponent {
	gameEvents: Array<GameEvent> = [];
	
	constructor(private gameEventService: GameEventService) {
		this.gameEvents = this.gameEventService.getGameEvents();
	}
}