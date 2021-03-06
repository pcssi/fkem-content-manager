import {Component, OnInit, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {GameEventsService} from '../../../../services/game-events.service';
import ResultEditorComponent from './result-editor';

const template: string = `
	<h4>Results</h4>
	<table class="table">
		<thead>
			<tr>
				<th>Title</th>
				<th>Description</th>
				<th>Is Combat</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#result of results">
				<td>{{result.title}}</td>
				<td>{{result.description}}</td>
				<td>{{result.isCombat}}</td>
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
	choiceGuid: string;
	datastore: any;
	
	constructor(params: RouteParams, gameEventsService: GameEventsService) {
		console.log('guid', params.get('choiceGuid'));
        this.choiceGuid = params.get('choiceGuid');
		this.datastore = gameEventsService.dataStore;
		gameEventsService.getChoiceResults(this.choiceGuid);
	}
}