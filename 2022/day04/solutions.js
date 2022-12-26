// --- Day 4: Camp Cleanup ---
// https://adventofcode.com/2022/day/4

const data = require('fs').readFileSync('./input.txt', 'utf-8').split('\n');

// --- Part One ---

const pairs = data.map((data) => data.split(','));

let fullOverlapCount = 0;

const pairsSections = pairs.map((pair) => {
	const firstElfSectionRange = pair[0].split('-').map((v) => parseInt(v));
	const secondElfSectionRange = pair[1].split('-').map((v) => parseInt(v));
	const firstElfSections = Array.from(Array(firstElfSectionRange[1]))
		.map((e, i) => i + 1)
		.slice(firstElfSectionRange[0] - 1);
	const secondElfSections = Array.from(Array(secondElfSectionRange[1]))
		.map((e, i) => i + 1)
		.slice(secondElfSectionRange[0] - 1);
	return [firstElfSections, secondElfSections];
});

pairsSections.forEach((pair) => {
	if (pair[0].length > pair[1].length) {
		if (pair[1].every((s) => pair[0].includes(s))) fullOverlapCount++;
	} else {
		if (pair[0].every((s) => pair[1].includes(s))) fullOverlapCount++;
	}
});

console.log(`Number of wholly overlapping sections: ${fullOverlapCount}`);

// --- Part Two ---

let anyOverlapCount = 0;

pairsSections.forEach((pair) => {
	if (pair[0].length > pair[1].length) {
		if (pair[1].some((s) => pair[0].includes(s))) anyOverlapCount++;
	} else {
		if (pair[0].some((s) => pair[1].includes(s))) anyOverlapCount++;
	}
});

console.log(`Number of any overlapping sections: ${anyOverlapCount}`);
