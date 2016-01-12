import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {EventChoice, EventChoiceService} from 'app/services/eventChoice-service';

const template: string = `
	<h1>Event Choices</h1>
	<table class="table">
		<thead>
			<tr>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#choice of eventChoices">
				<td>{{choice.description}}</td>
			</tr>
		</tbody>
	</table>
`;

@Component({
	selector: 'event-choices',
	providers: [EventChoiceService],
	template: template,
	directives: [NgFor]
})
export default class EventChoicesComponent {
	eventChoices: Array<EventChoice> = [];
	
	constructor(private eventChoiceService: EventChoiceService) {
		this.eventChoices = this.eventChoiceService.getEventChoices();
	}
}