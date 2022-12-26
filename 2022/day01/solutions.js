// --- Day 1: Calorie Counting ---
// https://adventofcode.com/2022/day/1

const data = require('fs').readFileSync('./input.txt', 'utf-8').split('\n\n');

// --- Part One ---

const allElves = [];

data.forEach((elf) => {
	const carrying = elf
		.split('\n')
		.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
	allElves.push(carrying);
});

const sorted = allElves.sort((a, b) => b - a);

console.log(`Elf carrying most calories has ${sorted[0]} calories.`);

//--- Part Two ---

const topThree = sorted[0] + sorted[1] + sorted[2];

console.log(`Top three elves are carrying ${topThree} calories in total.`);
