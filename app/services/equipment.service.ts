import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class EquipmentService {
	headers = new Headers();
	equipment$: Observable<Array<any>>;
	private _equipmentObserver: any;
	private _dataStore: {
		equipment: Array<any>
	};
	
	constructor(private http: Http) {
		this.headers.append('Content-Type', 'application/json');
		this.equipment$ = new Observable(observer =>
			this._equipmentObserver = observer).share();

		this._dataStore = { equipment: [] };
	}
	
	getEquipment() {
		this.http.get('/get-equipment')
			.map(res => res.json())
			.subscribe(data => {
				this._dataStore.equipment = data;

				this._equipmentObserver.next(this._dataStore.equipment);
			}, error => console.log('error loading events', error));
	}
}