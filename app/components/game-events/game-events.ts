import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {GameEventsService} from '../../services/game-events.service';
import EventChoicesComponent from '../game-events/event-choices/event-choices';
import GameEventFormComponent from '../game-events/game-event-form';

const template: string = `
	<h1>Game Events</h1>
	<button (click)="toggleEventEditor()">Toggle Event Editor</button>
	<table class="table" *ngIf="!displayEventEditor">
		<thead>
			<tr>
				<th>Title</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#event of gameEvents, #i = index">
				<td>
					<div (click)="event.expanded = !event.expanded">
						{{event.title}}
					</div>
					<div *ngIf="event.expanded">
						<event-choices 
							[choices]="event.choices"
							[eventIndex]="i"></event-choices>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	<game-event-form *ngIf="displayEventEditor"></game-event-form>
`;

@Component({
	selector: 'game-events',
	template: template,
	directives: [
		NgFor,
		EventChoicesComponent,
		GameEventFormComponent
	]
})
export default class GameEventsComponent {
	gameEvents: Object = [];
	displayEventEditor: boolean = false;
	
	constructor(gameEventsService: GameEventsService) {
		gameEventsService.gameEvents$.subscribe(updatedEvents => this.gameEvents = updatedEvents);
		gameEventsService.getGameEvents();
	}
	
	toggleEventEditor() {
		this.displayEventEditor = !this.displayEventEditor;
	}
}