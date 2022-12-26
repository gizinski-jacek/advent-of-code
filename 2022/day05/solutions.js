// --- Day 5: Supply Stacks ---
// https://adventofcode.com/2022/day/5

const data = require('fs').readFileSync('./dataInput.txt', 'utf-8').split('\n');
const moves = require('fs')
	.readFileSync('./movesInput.txt', 'utf-8')
	.split('\n');

// --- Part One ---

const stackCount = Math.max(
	...data[data.length - 1].match(/\d+/g).map((v) => parseInt(v))
);

function createStacks(data) {
	const stacks = [];
	for (let i = 0; i < stackCount; i++) {
		stacks.push([]);
	}

	for (let i = data.length - 2; i >= 0; i--) {
		let stackNumber = 0;
		let index = 0;
		while (index < data[i].length) {
			const crateStr = data[i].slice(index, index + 3).trim();
			if (crateStr) {
				stacks[stackNumber].push(crateStr.charAt(1));
			}
			stackNumber++;
			index += 4;
		}
	}
	return stacks;
}

function moveCrates(data, moves, multipleCratesAtOnce = false) {
	const stacks = createStacks(data);
	for (let move of moves) {
		const splitOnWhitespace = move.split(' ');
		const moveCount = splitOnWhitespace[1];
		const moveFrom = splitOnWhitespace[3] - 1;
		const moveTo = splitOnWhitespace[5] - 1;

		const cratesToMove = [];
		for (let i = 0; i < moveCount; i++) {
			cratesToMove.push(stacks[moveFrom].pop());
		}

		if (!multipleCratesAtOnce) {
			stacks[moveTo].push(...cratesToMove);
		} else {
			stacks[moveTo].push(...cratesToMove.reverse());
		}
	}

	let cratesOnTop = '';
	for (let stack of stacks) {
		cratesOnTop += stack[stack.length - 1];
	}

	return cratesOnTop;
}

console.log(`Crates on top: ${moveCrates(data, moves, false)}`);

// --- Part Two ---
console.log(
	`Crates on top after rearrangement procedure: ${moveCrates(
		data,
		moves,
		true
	)}`
);
