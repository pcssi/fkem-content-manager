import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

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
	template: template
})
export default class GameEventFormComponent {
	constructor(){};
	
	onSubmit(formData) {
		console.log(formData);
	}
}