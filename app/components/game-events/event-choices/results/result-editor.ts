import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {GameEventsService} from '../../../../services/game-events.service';

const template: string = `
	<form #f="ngForm"
		(ngSubmit)="onSubmit(f.value)">
		
		<div>Title: <input type="text" ngControl="title"></div> 
		<div>Description: <input type="textarea" ngControl="description"></div> 
		<div>is Combat: <input type="checkbox" ngControl="isCombat"></div> 
		<button type="submit">Add Result</button>
		
	</form>
`;

@Component({
	selector: 'result-editor',
	directives: [FORM_DIRECTIVES],
	template: template
})

export default class ResultEditorComponent {
	@Input() eventIndex;
	@Input() choiceIndex;
	
	constructor(public gameEventsService: GameEventsService) { }
	
	onSubmit(formData) {
		this.gameEventsService.addResult(formData, this.eventIndex, this.choiceIndex);
	}

}