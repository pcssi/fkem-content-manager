import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class GameEventsService {
	headers = new Headers();
	gameEvents$: Observable<Array<any>>;
	private _gameEventsObserver: any;
	private _dataStore: {
		gameEvents: Array<any>
	};
	
	constructor(private http: Http) {
		this.headers.append('Content-Type', 'application/json');
		this.gameEvents$ = new Observable(observer => 
			this._gameEventsObserver = observer).share();
		
		this._dataStore = { gameEvents: [] };
	}
	
	getGameEvents() {
		this.http.get('/events')
			.map(res => res.json())
			.subscribe(data => {
				this._dataStore.gameEvents = data;
				
				this._gameEventsObserver.next(this._dataStore.gameEvents);
			}, error => console.log('error loading events', error));
	}
	
	addGameEvent(gameEvent) {
		console.log('adding gameEvent', gameEvent);
		var jsonString = JSON.stringify(gameEvent);
		this.http.post('/submit-event', jsonString, { headers: this.headers })
			.map(res => res.json())
			.subscribe(data => {
				console.log('add successful', data);
				this._dataStore.gameEvents.push(gameEvent);
				this._gameEventsObserver.next(this._dataStore.gameEvents);
			}, error => console.log('Could not add gameEvent', error));
	}
}