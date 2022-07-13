import {  createHTMLElem } from '../asm-scripts/';
import { ICard } from '../types/interfaces';

export default class AppView {
	constructor(public data: ICard[]) {}

	render() {
		const data = this.data;
		const fragment$: DocumentFragment = new DocumentFragment() as DocumentFragment;

		data.forEach(obj => {
			const card$: HTMLElement = createHTMLElem(fragment$, 'div', { class: 'card', id: 'card-${obj.image}'});
			createHTMLElem(card$, 'h3', { class: 'h3' }, `${obj.name}`);
			createHTMLElem(card$, 'p1', { class: 'p1' }, `${obj.stockBalance}`);
			createHTMLElem(card$, 'p1', { class: 'p1' }, `${obj.releseYear}`);
			createHTMLElem(card$, 'p1', { class: 'p1' }, `${obj.color}`);
			createHTMLElem(card$, 'p1', { class: 'p1' }, `${obj.size}`);
			createHTMLElem(card$, 'p1', { class: 'p1' }, `${obj.popular}`);
			createHTMLElem(card$, 'p1', { class: 'p1' }, `${obj.brand}`);
			createHTMLElem(card$, 'p1', { class: 'p1' }, `${obj.image}`);
		});

		const cards$ = document.querySelector('.cards') as HTMLDivElement;
		cards$.innerHTML = '';
		cards$.prepend(fragment$);
	}
}
