// --- Day 2: Rock Paper Scissors ---
// https://adventofcode.com/2022/day/2

const data = require('fs').readFileSync('./input.txt', 'utf-8').split('\n');

// --- Part One ---
// A, X - Rock
// B, Y - Paper
// C, Z - Scissors

let score = 0;

data.forEach((line) => {
	const pair = line.split(' ');
	switch (pair[1]) {
		case 'X':
			if (pair[0] === 'A') score = score + 3;
			if (pair[0] === 'C') score = score + 6;
			score = score + 1;
			break;
		case 'Y':
			if (pair[0] === 'A') score = score + 6;
			if (pair[0] === 'B') score = score + 3;
			score = score + 2;
			break;
		case 'Z':
			if (pair[0] === 'B') score = score + 6;
			if (pair[0] === 'C') score = score + 3;
			score = score + 3;
			break;
		default:
			break;
	}
});

console.log(`Total score is: ${score}`);

// --- Part Two ---

// A - Rock
// B - Paper
// C - Scissors

// X - Loss
// Y - Draw
// Z - Win

score = 0;

data.forEach((line) => {
	const pair = line.split(' ');
	switch (pair[1]) {
		case 'X':
			if (pair[0] === 'A') score = score + 3;
			if (pair[0] === 'B') score = score + 1;
			if (pair[0] === 'C') score = score + 2;
			break;
		case 'Y':
			if (pair[0] === 'A') score = score + 1;
			if (pair[0] === 'B') score = score + 2;
			if (pair[0] === 'C') score = score + 3;
			score = score + 3;
			break;
		case 'Z':
			if (pair[0] === 'A') score = score + 2;
			if (pair[0] === 'B') score = score + 3;
			if (pair[0] === 'C') score = score + 1;
			score = score + 6;
			break;
		default:
			break;
	}
});

console.log(`Total score after new instructions is: ${score}`);
