import { shuffleArray } from '../src/asm-scripts/shuffleArray';





describe('shuffleArray:', () => {
	let array;

	beforeEach ( () => {
		array = [1, 2, 3, 4, 5];
	});

	test('should return shuffled array', () => {
		expect(shuffleArray(array)).not.toStrictEqual( [1, 2, 3, 4, 5] );
	});

	test('should return array', () => {
		expect(shuffleArray(array).length).toBe(5);
		expect(shuffleArray(array)).not.toBe(null);
		expect(shuffleArray(array)).toBeDefined();
		expect(shuffleArray(array)).toBeInstanceOf(Array);
	});

});
