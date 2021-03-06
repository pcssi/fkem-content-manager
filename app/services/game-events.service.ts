import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class GameEventsService {
	headers = new Headers();

	dataStore: {
		gameEvents: Array<any>,
		choices: Array<any>,
		results: Array<any>
	};

	constructor(private http: Http) {
		this.headers.append('Content-Type', 'application/json');
		
		this.dataStore = { gameEvents: [], choices: [], results: [] };
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
    
    getEventChoices(guid) {
        this.http.get(`/get-event-choices/${guid}`)
			.map(res => res.json())
			.subscribe(data => {
				this.dataStore.choices = data;
				console.log('recieved choices', data);
			}, error => console.log('error loading choices', error));
    }
	
	getChoiceResults(guid) {
		this.http.get(`/get-choice-results/${guid}`)
			.map(res => res.json())
			.subscribe(data => {
				this.dataStore.results = data;
				console.log('recieved choices', data);
			}, error => console.log('error loading choices', error));
	}

	addGameEvent(gameEvent) {
		console.log('adding gameEvent', gameEvent);
		
		this.saveGameEvent(gameEvent);
	}

	addChoice(choice, eventGuid) {
		console.log('adding choice to eventIndex', choice, eventGuid);
        
        let jsonString = JSON.stringify(choice);
		this.http.post(`event/${eventGuid}/save-choice`, jsonString, { headers: this.headers })
			.map(res => res.json())
			.subscribe(data => {
				console.log('save choice successful', data);
				this.dataStore.choices.push(data);
			}, error => console.log('Could not add gameEvent', error));
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
			.map(res => res.json())
			.subscribe(data => {
				console.log('save event successful', data);
				this.dataStore.gameEvents.push(data);
				
			}, error => console.log('Could not add gameEvent', error));
	}
}