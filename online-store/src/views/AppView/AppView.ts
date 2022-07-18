import { createHTMLElem } from '../../asm-scripts';
import { ICard } from '../../types/interfaces';

export default class AppView {

	render(data: ICard[]) {

		const fragment$: DocumentFragment = new DocumentFragment() as DocumentFragment;

		if(data.length > 0){

			data.forEach(obj => {
				const card$ = createHTMLElem(fragment$, 'div', { class: 'card', id: `card-${obj.id}`});

				const cardBrandBlock$ = createHTMLElem(card$, 'div', { class: 'card__brand-block' }) as HTMLDivElement;
				createHTMLElem(cardBrandBlock$, 'div', { class: `card__brand-logo ${obj.brand}` }) as HTMLDivElement;
				createHTMLElem(cardBrandBlock$, 'h3', { class: 'h3' }, obj.popular === 'top' ? 'TOP' : '');
				const cardImg$ = createHTMLElem(card$, 'img', { class: 'card__img' }) as HTMLImageElement;
				cardImg$.src = `./assets/img/${obj.image}.png`;
				cardImg$.alt = `${obj.image}`;

				const cardInfoBlock$ = createHTMLElem(card$, 'div', { class: 'card__info' }) as HTMLDivElement;
				createHTMLElem(cardInfoBlock$, 'h4', { class: 'h4 card__info-title' }, `${(obj.name)}`);
				const cardInfoBlock1$ = createHTMLElem(cardInfoBlock$, 'div', { class: 'card__info-block' }) as HTMLDivElement;
				createHTMLElem(cardInfoBlock1$, 'p', { class: `p2 card__price-${obj.price}` }, `$${obj.price}`);
				createHTMLElem(cardInfoBlock1$, 'p', { class: `p2 card__year-${obj.year}` }, `${obj.year}`);
				const cardInfoBlock2$ = createHTMLElem(cardInfoBlock$, 'div', { class: 'card__info-block' }) as HTMLDivElement;
				createHTMLElem(cardInfoBlock2$, 'p', { class: `p2 card__color-${obj.color?.split('/').join('-')}` }, `${obj.color}`);
				createHTMLElem(cardInfoBlock2$, 'p', { class: `p2 card__size-${obj.size?.split('').join('-')}` }, `${obj.size?.split('').join('/')}`);

				const cardCountCartBlock$ = createHTMLElem(card$, 'div', { class: 'card__count-cart-block' }) as HTMLDivElement;
				createHTMLElem(cardCountCartBlock$, 'button', { class: 'p2 button card__button-minus' }, '-');
				const cardCountBlock$ = createHTMLElem(cardCountCartBlock$, 'div', { class: 'card__count-block' }) as HTMLDivElement;
				createHTMLElem(cardCountBlock$, 'p', { class: 'p2 card__in-cart' }, '0');
				createHTMLElem(cardCountBlock$, 'p', { class: 'p2' }, '/');
				createHTMLElem(cardCountBlock$, 'p', { class: 'p2 card__balance' }, `${obj.balance}`);
				createHTMLElem(cardCountCartBlock$, 'button', { class: 'p2 button card__button-plus' }, '+');
			});
		} else {
			createHTMLElem(fragment$, 'h3', { class: 'h3 filter__messaga'}, 'No matching items found...');
		}

		const cards$ = document.querySelector('.cards') as HTMLDivElement;
		cards$.innerHTML = '';
		cards$.prepend(fragment$);
	}
}
