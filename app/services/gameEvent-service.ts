export class GameEvent {
	constructor(
		public title: string,
		public description: string,
		public choices: Array<string>
	) {}
}

export class GameEventService {
	getGameEvents(): Array<GameEvent> {
		return gameEvents.map(e => new GameEvent(e.title, e.description, e.choices));
	}
	
	addGameEvent(event) {
		event.choices = [];
		gameEvents.push(event);
	}
}

var gameEvents = [
	{
		title: 'The First Event',
		description: `
			After you have read the description choose from 
			one of the options below
		`,
		choices: [
			'ec001',
			'ec002',
			'ec003',
		]
	}, {
		title: 'The Second Event',
		description: `
			You should know what to do now
		`,
		choices: [
			'ec004',
			'ec005',
			'ec006',
		]
	}
];