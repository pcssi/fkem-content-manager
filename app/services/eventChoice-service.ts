export class EventChoice {
	constructor(
		public description: string
	) {}
}

export class EventChoiceService {
	getEventChoices(choiceIds: Array<string>): Array<EventChoice> {
		let choices: Array<EventChoice> = [];
		
		choiceIds.forEach(id => {
			for(var choice in eventChoices) {
				if(id === choice) {
					choices.push(new EventChoice(eventChoices[choice].description));
					return;
				}
			}
		});
		
		return choices;
	}
}

var eventChoices = {
	ec001: {
		description: 'choice 1'
	}, 
	ec002: {
		description: 'choice 2'
	}, 
	ec003: {
		description: 'choice 3'
	}, 
	ec004: {
		description: 'choice 4'
	}, 
	ec005: {
		description: 'choice 5'
	}, 
	ec006: {
		description: 'choice 6'
	}
};