import {Component, OnInit, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';

const template: string = `
	<h4>Results</h4>
	<table class="table">
		<thead>
			<tr>
				<th>Title</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#result of results">
				<td>{{result.title}}</td>
			</tr>
		</tbody>
	</table>
`;

@Component({
	selector: 'results-table',
	template: template,
	directives: [
		NgFor
	]
})

export default class ResultsTableComponent implements OnInit {
	@Input() results;
	@Input() eventIndex;
	@Input() choiceIndex;
	
	constructor() { }

	ngOnInit() { }
}