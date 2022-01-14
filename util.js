import { readFileSync } from 'fs';
import S from 'sanctuary';

export const runProgram = day => parse => compute =>
	S.pipe([parse, compute])(readFileSync(`./day-${day}/input.txt`, 'utf8'));

export const runTestProgram = day => parse => compute =>
	S.pipe([parse, compute])(readFileSync(`./day-${day}/testInput.txt`, 'utf8'));

export const range = (size, startAt) =>
	[...Array(size).keys()].map(i => i + startAt);

export const create2dArray = (x, y, defaultState = 0) =>
	Array(y)
		.fill('_')
		.map(_ => Array(x).fill(defaultState));

export const consoleBar = (x = '') =>
	console.log(x, '\n==================================== \n\n') || x;

export const replaceAll = (toBeReplaced, replacedBy) => array =>
	array.map(x => (x === toBeReplaced ? replacedBy : x));
