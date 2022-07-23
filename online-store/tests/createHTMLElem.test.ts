/**
 * @jest-environment jsdom
 */
import { createHTMLElem } from '../src/asm-scripts/createHTMLElem';

describe('createHTMLElem', () => {
	test('should be render', () => {
		expect(createHTMLElem(document.body, 'div', { class: 'test__class', id: 'test-id'}, 'some test text')).toMatchSnapshot();
	});
});
