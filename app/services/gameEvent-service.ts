export class GameEvent {
	constructor(
		public name: string,
		public description: string
	) {}
}

export class GameEventService {
	getGameEvents(): Array<GameEvent> {
		return gameEvents.map(e => new GameEvent(e.name, e.description));
	}
}

var gameEvents = [
	{
		name: 'The First Event',
		description: `
			After you have read the description choose from one of the options below
		`
	}, {
		name: 'The Second Event',
		description: `
			You should know what to do now
		`
	}
];