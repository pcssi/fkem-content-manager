export class GameEvent {
	constructor(
		public name: string,
		public description: string,
		public choices: Array<string>
	) {}
}

export class GameEventService {
	getGameEvents(): Array<GameEvent> {
		return gameEvents.map(e => new GameEvent(e.name, e.description, e.choices));
	}
}

var gameEvents = [
	{
		name: 'The First Event',
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
		name: 'The Second Event',
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