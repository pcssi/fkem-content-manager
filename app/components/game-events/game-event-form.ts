import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';
import {GameEventsService} from '../../services/game-events.service';
import MutliSelectDropdownComponent from '../utils/multiselect';

const template: string = `
	<form #f="ngForm"
		(ngSubmit)="onSubmit(f.value)">
		
		<div>Title: <input type="text" ngControl="title"></div>
		<div>Description: <input type="text" ngControl="description"></div> 
		<div>
			Tile Types: 
			<multi-select-dropdown 
				(selectionModelChange)="onTileSelect($event)" 
				[items]="tileTypeOptions" 
				[selectionModel]="selectedTileTypes"></multi-select-dropdown>
		</div>
		<button type="submit">Add Event</button>
		
	</form>
`;

@Component({
	selector: 'game-event-form',
	directives: [
		FORM_DIRECTIVES,
		NgFor,
		MutliSelectDropdownComponent
	],
	template: template
})
export default class GameEventFormComponent {
	selectedTileTypes: Array<string> = [];
	selectedOut: Array<string>;
	tileTypeOptions: Array<string> = [
		'any',
		'forest',
		'desert',
		'plains',
		'boss'
	];
	constructor(public gameEventsService: GameEventsService){};
	
	onSubmit(formData) {
		formData.tileTypes = this.selectedOut;
		this.gameEventsService.addGameEvent(formData);
	}
		
	onTileSelect(selectedItems: Array<string>) {
		this.selectedOut = selectedItems;
	}
}