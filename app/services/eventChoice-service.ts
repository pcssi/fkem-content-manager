export class EventChoice {
	constructor(
		public description: string
	) {}
}

export class EventChoiceService {
	getEventChoices(): Array<EventChoice> {
		return eventChoices.map(e => new EventChoice(e.description));
	}
}

var eventChoices = [
	{
		description: 'choice 1'
	}, {
		description: 'choice 2'
	}, {
		description: 'choice 3'
	}
];