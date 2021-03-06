import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {GameEventsService} from '../../../services/game-events.service';

const template: string = `
	<form #f="ngForm"
		(ngSubmit)="onSubmit(f.value)">
		
		<div>Description: <input type="text" ngControl="description"></div> 
		<button type="submit">Add Choice</button>
		
	</form>
`;

@Component({
	selector: 'choice-editor',
	directives: [FORM_DIRECTIVES],
	template: template
})
export default class ChoiceEditorComponent {
	eventGuid: string;
    
	constructor(routeParams: RouteParams, public gameEventsService: GameEventsService){
        this.eventGuid = routeParams.get('eventGuid');
    };
	
	onSubmit(formData) {
		this.gameEventsService.addChoice(formData, this.eventGuid);
	}
}