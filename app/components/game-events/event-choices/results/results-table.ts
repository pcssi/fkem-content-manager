import {Component, OnInit, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import ResultEditorComponent from './result-editor';

const template: string = `
	<h4>Results</h4>
	<table class="table">
		<thead>
			<tr>
				<th>Title</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#result of results">
				<td>{{result.title}}</td>
				<td>{{result.description}}</td>
			</tr>
		</tbody>
	</table>
	<result-editor [eventIndex]="eventIndex" [choiceIndex]="choiceIndex"></result-editor>
`;

@Component({
	selector: 'results-table',
	template: template,
	directives: [
		NgFor,
		ResultEditorComponent
	]
})

export default class ResultsTableComponent {
	@Input() results;
	@Input() eventIndex;
	@Input() choiceIndex;
	
	constructor() { }
}