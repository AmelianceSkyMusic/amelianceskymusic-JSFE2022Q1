import { createHTMLElem, shuffleArray } from '../../asm-scripts';
import { ICard } from '../../types/interfaces';

export default class AppView {
	constructor(public data: ICard[]) {}

	render() {
		const data = shuffleArray(this.data);
		const fragment$: DocumentFragment = new DocumentFragment() as DocumentFragment;

		data.forEach(obj => {
			const card$: HTMLElement = createHTMLElem(fragment$, 'div', { class: 'card', id: `card-${obj.id}`});

			const cardBrandBlock$ = createHTMLElem(card$, 'div', { class: 'card__brand-block' }) as HTMLDivElement;
			createHTMLElem(cardBrandBlock$, 'div', { class: `card__brand-logo ${obj.brand}` }) as HTMLDivElement;
			createHTMLElem(cardBrandBlock$, 'h3', { class: 'h3' }, obj.popular !== '0' ? 'TOP' : '');
			const cardImg$ = createHTMLElem(card$, 'img', { class: 'card__img' }) as HTMLImageElement;
			cardImg$.src = `./assets/img/${obj.image}.png`;
			cardImg$.alt = `${obj.image}`;

			const cardInfoBlock$ = createHTMLElem(card$, 'div', { class: 'card__info' }) as HTMLDivElement;
			createHTMLElem(cardInfoBlock$, 'h4', { class: 'h4 card__info-title' }, `${(obj.name)}`);
			const cardInfoBlock1$ = createHTMLElem(cardInfoBlock$, 'div', { class: 'card__info-block' }) as HTMLDivElement;
			createHTMLElem(cardInfoBlock1$, 'p', { class: `p2 card__year-${obj.price}` }, `${obj.price}`);
			createHTMLElem(cardInfoBlock1$, 'p', { class: `p2 card__year-${obj.year}` }, `${obj.year}`);
			const cardInfoBlock2$ = createHTMLElem(cardInfoBlock$, 'div', { class: 'card__info-block' }) as HTMLDivElement;
			createHTMLElem(cardInfoBlock2$, 'p', { class: `p2 card__color-${obj.color?.split('/').join('-')}` }, `${obj.color}`);
			createHTMLElem(cardInfoBlock2$, 'p', { class: `p2 card__size-${obj.size?.split('').join('-')}` }, `${obj.size?.split('').join('/')}`);

			const cardCountBlock$ = createHTMLElem(card$, 'div', { class: 'card__count-block' }) as HTMLDivElement;
			createHTMLElem(cardCountBlock$, 'button', { class: 'p2 button card__button-plus' }, '-');
			createHTMLElem(cardCountBlock$, 'p', { class: 'p2 card__in-cart' }, '0');
			createHTMLElem(cardCountBlock$, 'p', { class: 'p2' }, '/');
			createHTMLElem(cardCountBlock$, 'p', { class: 'p2 card__balance' }, `${obj.balance}`);
			createHTMLElem(cardCountBlock$, 'button', { class: 'p2 button card__button-plus' }, '+');
		});

		const cards$ = document.querySelector('.cards') as HTMLDivElement;
		cards$.innerHTML = '';
		cards$.prepend(fragment$);
	}
}
