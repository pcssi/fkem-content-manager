import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {GameEventService} from '../../services/gameEvent-service';

const template: string = `
	<form #f="ngForm"
		(ngSubmit)="onSubmit(f.value)">
		
		<div>Title: <input type="text" ngControl="title"></div>
		<div>Description: <input type="text" ngControl="description"></div> 
		<button type="submit">Add Event</button>
		
	</form>
`;

@Component({
	selector: 'game-event-form',
	directives: [FORM_DIRECTIVES],
	providers: [GameEventService],
	template: template
})
export default class GameEventFormComponent {
	addEvent: Function; 
	
	constructor(private service: GameEventService){
		this.addEvent = this.service.addGameEvent;
	};
	
	onSubmit(formData) {
		console.log(formData);
		this.addEvent(formData);
	}
}