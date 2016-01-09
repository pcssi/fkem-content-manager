export class Equipment {
	constructor(
		public name: string
	) {
		
	}
}

export class EquipmentService {
	getEquipment(): Array<Equipment> {
		return equipment.map(e => new Equipment(e.name));
	}
}

var equipment = [
	{
		name: 'Sword',
		type: 'WEAPON',
		attackPower: 3,
		defensePower: 0,
		magicPower: 0
	}, {
		name: 'Leather Tunic',
		type: 'ARMOUR',
		attackPower: 0,
		defensePower: 2,
		magicPower: 0
	}, {
		name: 'Magic Ring',
		type: 'ACCESSORY',
		attackPower: 0,
		defensePower: 0,
		magicPower: 2
	}, {
		name: 'Iron Sword',
		type: 'WEAPON',
		attackPower: 5,
		defensePower: 0,
		magicPower: 0
	}, {
		name: 'Chain Mail',
		type: 'ARMOUR',
		attackPower: 0,
		defensePower: 4,
		magicPower: 0
	}, {
		name: 'Golden Ring',
		type: 'ACCESSORY',
		attackPower: 0,
		defensePower: 0,
		magicPower: 4
	}, {
		name: 'Magic Sword',
		type: 'WEAPON',
		attackPower: 4,
		defensePower: 0,
		magicPower: 2
	}, {
		name: 'Wizard Robe',
		type: 'ARMOUR',
		attackPower: 0,
		defensePower: 1,
		magicPower: 3
	}
];
