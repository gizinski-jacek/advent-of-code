// --- Day 3: Rucksack Reorganization ---
// https://adventofcode.com/2022/day/3

const data = require('fs').readFileSync('./input.txt', 'utf-8');

// --- Part One ---

const splitData = data.split('\n');

const commonItems = [];

splitData.forEach((rucksack) => {
	const firstCompartment = rucksack.slice(0, rucksack.length / 2).split('');
	const secondCompartment = rucksack.slice(rucksack.length / 2).split('');
	const firstCompartmentDuplicates = [];
	firstCompartment.forEach((char) => {
		if (firstCompartmentDuplicates.find((c) => c === char)) return;
		if (secondCompartment.find((c) => c === char)) {
			firstCompartmentDuplicates.push(char);
			commonItems.push(char);
		}
	});
});

const lowerCaseCodes = Array.from(Array(26)).map((e, i) => i + 97);
const upperCaseCodes = Array.from(Array(26)).map((e, i) => i + 65);
const lowerCaseChars = lowerCaseCodes.map((e) => String.fromCharCode(e));
const upperCaseChars = upperCaseCodes.map((e) => String.fromCharCode(e));
const joinedChars = [...lowerCaseChars, ...upperCaseChars];

const itemsPriorities = commonItems.map((item) => {
	return joinedChars.findIndex((char) => char === item) + 1;
});

const totalPriority = itemsPriorities.reduce((prev, cur) => prev + cur, 0);

console.log(`Sum of the item priorities is: ${totalPriority}`);

// --- Part Two ---

const elfGroups = [];

for (let i = 0; i < splitData.length; i = i + 3) {
	const group = splitData.slice(i, i + 3);
	elfGroups.push(group);
}

const groupItemType = elfGroups.map((group) => {
	let type;
	const groupItemLists = group.map((rucksack) => rucksack.split(''));
	groupItemLists[0].forEach((char1) => {
		if (groupItemLists[1].find((char2) => char2 === char1)) {
			if (groupItemLists[2].find((char3) => char3 === char1)) {
				type = char1;
				return;
			}
		}
	});
	return type;
});

const groupsItemPriorities = groupItemType.map((item) => {
	return joinedChars.findIndex((char) => char === item) + 1;
});

const totalGroupedPriority = groupsItemPriorities.reduce(
	(prev, cur) => prev + cur,
	0
);

console.log(`Sum of the groups items priorities is: ${totalGroupedPriority}`);
