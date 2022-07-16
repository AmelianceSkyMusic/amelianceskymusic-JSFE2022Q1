import { createHTMLElem } from '../../asm-scripts';
import { ICard } from '../../types/interfaces';

export default class AppView {

	render(data: ICard[]) {

		const fragmentD: DocumentFragment = new DocumentFragment() as DocumentFragment;

		if(data.length > 0){

			data.forEach(obj => {
				const cardD = createHTMLElem(fragmentD, 'div', { class: 'card', id: `card-${obj.id}`});

				const cardBrandBlockD = createHTMLElem(cardD, 'div', { class: 'card__brand-block' }) as HTMLDivElement;
				createHTMLElem(cardBrandBlockD, 'div', { class: `card__brand-logo ${obj.brand}` }) as HTMLDivElement;
				createHTMLElem(cardBrandBlockD, 'h3', { class: 'h3' }, obj.popular === 'top' ? 'TOP' : '');
				const cardImgD = createHTMLElem(cardD, 'img', { class: 'card__img' }) as HTMLImageElement;
				cardImgD.src = `./assets/img/${obj.image}.png`;
				cardImgD.alt = `${obj.image}`;

				const cardInfoBlockD = createHTMLElem(cardD, 'div', { class: 'card__info' }) as HTMLDivElement;
				createHTMLElem(cardInfoBlockD, 'h4', { class: 'h4 card__info-title' }, `${(obj.name)}`);
				const cardInfoBlock1D = createHTMLElem(cardInfoBlockD, 'div', { class: 'card__info-block' }) as HTMLDivElement;
				createHTMLElem(cardInfoBlock1D, 'p', { class: `p2 card__price-${obj.price}` }, `$${obj.price}`);
				createHTMLElem(cardInfoBlock1D, 'p', { class: `p2 card__year-${obj.year}` }, `${obj.year}`);
				const cardInfoBlock2D = createHTMLElem(cardInfoBlockD, 'div', { class: 'card__info-block' }) as HTMLDivElement;
				createHTMLElem(cardInfoBlock2D, 'p', { class: `p2 card__color-${obj.color?.split('/').join('-')}` }, `${obj.color}`);
				createHTMLElem(cardInfoBlock2D, 'p', { class: `p2 card__size-${obj.size?.split('').join('-')}` }, `${obj.size?.split('').join('/')}`);

				const cardCountBlockD = createHTMLElem(cardD, 'div', { class: 'card__count-block' }) as HTMLDivElement;
				createHTMLElem(cardCountBlockD, 'button', { class: 'p2 button card__button-plus' }, '-');
				createHTMLElem(cardCountBlockD, 'p', { class: 'p2 card__in-cart' }, '0');
				createHTMLElem(cardCountBlockD, 'p', { class: 'p2' }, '/');
				createHTMLElem(cardCountBlockD, 'p', { class: 'p2 card__balance' }, `${obj.balance}`);
				createHTMLElem(cardCountBlockD, 'button', { class: 'p2 button card__button-plus' }, '+');
			});
		} else {
			createHTMLElem(fragmentD, 'h3', { class: 'h3 filter__messaga'}, 'No matching items found...');
		}

		const cardsD = document.querySelector('.cards') as HTMLDivElement;
		cardsD.innerHTML = '';
		cardsD.prepend(fragmentD);
	}
}
