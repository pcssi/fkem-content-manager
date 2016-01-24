import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import ChoiceEditorComponent from './choice-editor';
import ResultsTableComponent from './results/results-table';

const template: string = `
	<h4>Event Choices</h4>
	<table class="table">
		<thead>
			<tr>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#choice of choices, #i = index">
				<td>
					<div>
						{{choice.description}}
					</div>
					<div>
						<results-table 
							[results]="choice.results"
							[eventIndex]="eventIndex"
							[choiceIndex]="i"></results-table>
					</div>
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
		ResultsTableComponent
	]
})
export default class EventChoicesComponent {
	@Input() choices;
	@Input() eventIndex;
	
	constructor() {
	}
}