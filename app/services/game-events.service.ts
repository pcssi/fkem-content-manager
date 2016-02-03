import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class GameEventsService {
	headers = new Headers();

	dataStore: {
		gameEvents: Array<any>
	};

	constructor(private http: Http) {
		this.headers.append('Content-Type', 'application/json');
		
		this.dataStore = { gameEvents: [] };
		this.getGameEvents();
	}

	getGameEvents() {
		this.http.get('/get-events')
			.map(res => res.json())
			.subscribe(data => {
				this.dataStore.gameEvents = data;
				console.log('recieved events', data);
			}, error => console.log('error loading events', error));
	}

	addGameEvent(gameEvent) {
		console.log('adding gameEvent', gameEvent);
		gameEvent.choices = [];
		this.dataStore.gameEvents.push(gameEvent);
		
		this.saveGameEvent(gameEvent);
	}

	addChoice(choice, eventIndex) {
		console.log('adding choice to eventIndex', choice, eventIndex);
		choice.results = [];
		let event = this.dataStore.gameEvents[eventIndex];
		event.choices.push(choice);
		
		this.saveGameEvents();
	}
	
	addResult(result, eventIndex, choiceIndex) {
		console.log('adding result to choiceIndex of eventIndex', choiceIndex, eventIndex);
		let event = this.dataStore.gameEvents[eventIndex];
		event.choices[choiceIndex].results.push(result);
		
		this.saveGameEvents();
	}

	private saveGameEvents() {
		let jsonString = JSON.stringify(this.dataStore.gameEvents);
		this.http.post('/save-events', jsonString, { headers: this.headers })
			.subscribe(data => {
				console.log('save events successful', data);
			}, error => console.log('Could not add gameEvent', error));
	}

	private saveGameEvent(event) {
		let jsonString = JSON.stringify(event);
		this.http.post('/save-event', jsonString, { headers: this.headers })
			.subscribe(data => {
				console.log('save events successful', data);
			}, error => console.log('Could not add gameEvent', error));
	}
}