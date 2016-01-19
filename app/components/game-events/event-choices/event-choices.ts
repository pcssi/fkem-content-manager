import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {EventChoice, EventChoiceService} from '../../../services/choices.service';

const template: string = `
	<h4>Event Choices</h4>
	<table class="table">
		<thead>
			<tr>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#choice of choicesArray">
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
	eventChoiceService: EventChoiceService;
	@Input() choiceIds;
	choicesArray: Array<EventChoice> = [];
	
	constructor(private eventChoiceService2: EventChoiceService) {
		this.eventChoiceService = this.eventChoiceService2;
	}
	ngOnInit() {
		this.choicesArray = this.eventChoiceService.getEventChoices(this.choiceIds);
	}
}