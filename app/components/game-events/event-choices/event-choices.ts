import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {GameEventsService} from '../../../services/game-events.service';
import ChoiceEditorComponent from './choice-editor';

const template: string = `
	<h4>Event Choices</h4>
	<table class="table">
		<thead>
			<tr>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#choice of datastore.choices, #i = index">
				<td [routerLink]="['Results', {choiceGuid: choice.guid}]">
					{{choice.description}}
				</td>
			</tr>
		</tbody>
	</table>
	<choice-editor [eventIndex]="eventIndex"></choice-editor>
`;

@Component({
	selector: 'event-choices',
	template: template,
	directives: [
		NgFor,
		ChoiceEditorComponent,
		ROUTER_DIRECTIVES
	]
})
export default class EventChoicesComponent {
    eventGuid: string;
	datastore: any;
	
	constructor(params: RouteParams, gameEventsService: GameEventsService) {
        console.log('guid', params.get('eventGuid'));
        this.eventGuid = params.get('eventGuid');
        this.datastore = gameEventsService.dataStore;
        gameEventsService.getEventChoices(this.eventGuid);
	}
}