import { getRandomNumber } from './getRandomNumber';

export function shuffleArray<T>(array: T[]): T[] {
	for (let i = 0; i < array.length; i++) {
		const j = getRandomNumber(0, array.length - 1);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
