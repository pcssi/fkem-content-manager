import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS, Http, Headers} from 'angular2/http';

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
	providers: [HTTP_PROVIDERS],
	directives: [FORM_DIRECTIVES],
	template: template
})
export default class GameEventFormComponent {
	headers = new Headers();
	
	constructor(public http: Http){
		this.headers.append('Content-Type', 'application/json');
	};
	
	onSubmit(formData) {
		console.log('submitting form data', formData);
		var json = JSON.stringify(formData);
		this.http.post('/submit-event', json, {
				headers: this.headers
			})
			.map(res => res.json())
			.subscribe(
				data => console.log('response data', data),
				() => console.log('submition accepted')
			);
	}
}