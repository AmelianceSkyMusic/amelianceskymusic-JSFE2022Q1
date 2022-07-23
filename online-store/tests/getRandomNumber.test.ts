import { getRandomNumber }from '../src/asm-scripts/getRandomNumber';


describe('getRandomNumber()', () => {
	const testCase = [
		{
			from: 10,
			to: 20,
		},
		{
			from: 100,
			to: 110,
		},
		{
			from: 1000,
			to: 2000,
		},
	];

	testCase.forEach( caseItem => {
		const randomNum = getRandomNumber(caseItem.from, caseItem.to);
		test('should return valid vale', () => {
			expect(randomNum).toBeDefined();
		});
		test(`should return random number from ${caseItem.from} to ${caseItem.to}`, () => {
			expect(randomNum).toBeGreaterThanOrEqual(caseItem.from);
			expect(randomNum).toBeLessThanOrEqual(caseItem.to);
		});
	});

});
