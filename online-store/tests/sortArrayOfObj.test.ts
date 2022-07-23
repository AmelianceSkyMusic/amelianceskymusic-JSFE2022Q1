import { sortArrayOfObj } from '../src/asm-scripts/sortArrayOfObj';





describe('Test array sorting function:', () => {
	let array;

	beforeEach ( () => {
		array = [
			{
				price: 80,
				brand: 'adidas'
			},
			{
				price: 75,
				brand: 'nike',

			},
			{
				price: 100,
				brand: 'reebok'
			},
		];
	});

	test('should return array sorted by passed key', () => {
		expect(sortArrayOfObj(array, 'price', 'num')).toStrictEqual(
			[
				{
					price: 75,
					brand: 'nike'
				},
				{
					price: 80,
					brand: 'adidas'
				},
				{
					price: 100,
					brand: 'reebok'
				},
			]
		);
		expect(sortArrayOfObj(array, 'brand', 'str')).toStrictEqual(
			[
				{
					price: 80,
					brand: 'adidas'
				},
				{
					price: 75,
					brand: 'nike'
				},
				{
					price: 100,
					brand: 'reebok'
				},
			]
		);
	});

	test('should return array', () => {
		expect(sortArrayOfObj(array , 'price', 'num')).not.toBe(null);
		expect(sortArrayOfObj(array , 'price', 'num')).toBeDefined();
	});

});
