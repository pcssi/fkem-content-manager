import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';
import {GameEventsService} from '../../services/game-events.service';

const template: string = `
	<form #f="ngForm"
		(ngSubmit)="onSubmit(f.value)">
		
		<div>Title: <input type="text" ngControl="title"></div>
		<div>Description: <input type="text" ngControl="description"></div> 
		<div>
			Tile Types: 
			<select ngControl="tileTypes">
				<option *ngFor="#type of tileTypeOptions" value="{{type}}">{{type}}</option>
			</select>
		</div>
		<button type="submit">Add Event</button>
		
	</form>
`;

@Component({
	selector: 'game-event-form',
	directives: [
		FORM_DIRECTIVES,
		NgFor
	],
	template: template
})
export default class GameEventFormComponent {
	tileTypeOptions: Array<string> = [
		'any',
		'forest',
		'desert',
		'plains',
		'boss'
	];
	constructor(public gameEventsService: GameEventsService){};
	
	onSubmit(formData) {
		this.gameEventsService.addGameEvent(formData);
	}
}