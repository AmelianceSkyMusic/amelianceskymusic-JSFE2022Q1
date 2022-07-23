import AppModel from '../src/models/AppModel';

describe('Function convertDataWithFirstRowHeadingToCardsArray', () => {
	let result = [];
	const data = {
		balance: ['0', '1', '2', '3'],
		id: ['0', '1', '2', '3'],
	};

	beforeEach( () => {
		result = [...AppModel.convertDataWithFirstRowHeadingToCardsArray(data)];
	});

	test('should return array', () => {
		expect(result).toBeInstanceOf(Array);
	});

	test('should convert correctly', () => {
		expect(result[0].id).toEqual(result[0].balance);
		expect(result[1].id).toEqual(result[1].balance);
		expect(result[2].id).toEqual(result[2].balance);
		expect(result[3].id).toEqual(result[3].balance);
	});

	test('should generate init inCart count value', () => {
		expect(result[0].inCart).toBe(0);
		expect(result[1].inCart).toBe(0);
		expect(result[2].inCart).toBe(0);
		expect(result[3].inCart).toBe(0);
	});

});
