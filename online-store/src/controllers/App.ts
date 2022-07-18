import { RangeSliderDouble, addChangeThemeListener } from '../asm-ui/scripts';
import { shuffleArray, sortArrayOfObj } from '../asm-scripts';
import AppModel from '../models/AppModel';
import { ICard } from '../types/interfaces';
import AppView from '../views/AppView';

interface IFilters {
	price: number[],
	balance: number[],
	year: number[],
	brand: string[],
	popular: string[],
	color: string[],
	size: string[],
	sorting: string,
	search: string
}

export default class App {
	state: { [key: string]: string };
	initData: ICard[] = [];
	data: ICard[] = [];
	view: AppView;
	filters: IFilters;
	rangeSliderDoublePrice: RangeSliderDouble | undefined;
	rangeSliderDoubleYear: RangeSliderDouble | undefined;
	rangeSliderDoubleBalance: RangeSliderDouble | undefined;
	settings: { initData: ICard[], filters: IFilters, cart: string[] };
	cart: string[] = [];

	addChangeThemeListener = addChangeThemeListener;

	constructor() {
		this.state = {
			sheetID: '11IF6n311xG3ycdE_mOQaZizL7NFzeynvFu2ni1sghQ0',
			sheetTitle: 'base',
			sheetRange: '',
			get url() {
				return 'https://docs.google.com/spreadsheets/d/' + this.sheetID +
				'/gviz/tq?tqx=out:json&sheet=' + this.sheetTitle + '&range=' + this.sheetRange;
			}
		};

		this.view = new AppView();

		this.filters = {
			price: [],
			year: [],
			balance: [],
			brand: [],
			popular: [],
			color: [],
			size: [],
			sorting: 'default',
			search: ''
		};
		this.settings = { initData: this.initData, filters: this.filters, cart: this.cart };
	}

	async start() {
		this.addRangeFiltersListener();
		this.addCheckboxFiltersListener();
		this.addSearchListener();
		this.addSortingListener();
		this.addResetAllSettingsListener();

		this.addResetFiltersAndSearchListener();

		const model = new AppModel(this.state);
		const data = await model.getCards();
		this.initData = shuffleArray(data);
		this.view = new AppView();

		this.loadSettings();
		this.applyAll();
		this.addChangeThemeListener();
	}

	loadSettings() {
		if(localStorage.getItem('settings')) {
			this.settings = JSON.parse((localStorage.getItem('settings') as string));
			this.initData = this.settings.initData;
			this.filters = this.settings.filters;
			this.cart = this.settings.cart;
		}

		const filterBrand$ = document.querySelectorAll('.filter__brand [type="checkbox"]') as NodeListOf<HTMLInputElement>;
		const filterPopularity$ = document.querySelectorAll('.filter__popularity [type="checkbox"]') as NodeListOf<HTMLInputElement>;
		const filterColor$ = document.querySelectorAll('.filter__color [type="checkbox"]') as NodeListOf<HTMLInputElement>;
		const filterSize$ = document.querySelectorAll('.filter__size [type="checkbox"]') as NodeListOf<HTMLInputElement>;
		filterBrand$.forEach(elem => { if (this.filters.brand.includes(elem.value)) elem.checked = true; });
		filterPopularity$.forEach(elem => { if (this.filters.popular.includes(elem.value)) elem.checked = true; });
		filterColor$.forEach(elem => { if (this.filters.color.includes(elem.value)) elem.checked = true; });
		filterSize$.forEach(elem => { if (this.filters.size.includes(elem.value)) elem.checked = true; });

		const sliderStockPrice1$ = document.querySelector('#range-slider-double__price #range-slider-double__slider-1') as HTMLInputElement;
		const sliderStockPrice2$ = document.querySelector('#range-slider-double__price #range-slider-double__slider-2') as HTMLInputElement;
		const sliderYear1$ = document.querySelector('#range-slider-double__year #range-slider-double__slider-1') as HTMLInputElement;
		const sliderYear2$ = document.querySelector('#range-slider-double__year #range-slider-double__slider-2') as HTMLInputElement;
		const sliderBalance1$ = document.querySelector('#range-slider-double__balance #range-slider-double__slider-1') as HTMLInputElement;
		const sliderBalance2$ = document.querySelector('#range-slider-double__balance #range-slider-double__slider-2') as HTMLInputElement;
		if(this.filters.price.length > 1) {
			sliderStockPrice1$.value = (this.filters.price[0]).toString();
			sliderStockPrice2$.value = (this.filters.price[1]).toString();
		}
		if(this.filters.year.length > 1) {
			sliderYear1$.value = (this.filters.year[0]).toString();
			sliderYear2$.value = (this.filters.year[1]).toString();
		}
		if(this.filters.balance.length > 1) {
			sliderBalance1$.value = (this.filters.balance[0]).toString();
			sliderBalance2$.value = (this.filters.balance[1]).toString();
		}
		(this.rangeSliderDoublePrice as RangeSliderDouble).update();
		(this.rangeSliderDoubleYear as RangeSliderDouble).update();
		(this.rangeSliderDoubleBalance as RangeSliderDouble).update();

		const cardsSort$ = document.querySelector('.cards-sort') as HTMLSelectElement;
		cardsSort$.value = this.filters.sorting;
	}

	addResetAllSettingsListener() {
		document.querySelector('#filter__hard-reset-button')?.addEventListener('click', () => {
			this.resetAllSettings();
		});
	}

	saveSettings() {
		this.settings = {initData: this.initData, filters: this.filters, cart: this.cart};
		localStorage.setItem('settings', JSON.stringify(this.settings));
	}

	applyAll() {
		this.saveSettings();
		this.data = this.initData;
		this.applyFilters();
		this.applySorting();
		this.applySearch();
		this.view.render(this.data);
		this.addCardListeners();

		const cartCount$ = document.querySelector('#button__cart-count') as HTMLButtonElement;
		cartCount$.innerText = '0';
		this.cart.forEach(elem => {
			const card$ = document.querySelector(`#card-${elem}`) as HTMLDivElement;
			console.log(card$);
			if (card$) {
				const cardInCart$ = card$.querySelector('.card__in-cart') as HTMLParagraphElement;
				const buttonPlus$ = card$.querySelector('.card__button-plus') as HTMLButtonElement;
				cardInCart$.innerText = (+cardInCart$.innerText + 1).toString();
				buttonPlus$.classList.add('in-cart');
			}
			this.addToCart();
		});
	}

	resetAllSettings() {
		localStorage.removeItem('settings');
		document.location.reload();
	}

	applySorting() {
		switch (this.filters.sorting) {
		case 'az':    this.data = [...sortArrayOfObj(this.data, 'name', 'srt')]; break;
		case 'za':    this.data = [...sortArrayOfObj(this.data, 'name', 'str')].reverse(); break;
		case 'low':   this.data = [...sortArrayOfObj(this.data, 'price', 'num')]; break;
		case 'high':  this.data = [...sortArrayOfObj(this.data, 'price', 'num')].reverse(); break;
		case 'newest':this.data = [...sortArrayOfObj(this.data, 'year', 'num')].reverse(); break;
		case 'oldest':this.data = [...sortArrayOfObj(this.data, 'year', 'num')]; break;
		}
	}
	addSortingListener() {
		const cardsSort$ = document.querySelector('.cards-sort') as HTMLSelectElement;
		cardsSort$.addEventListener('input', () => {
			this.filters.sorting = cardsSort$.value;
			this.applyAll();
		});
	}

	resetSorting() {
		(document.querySelector('.cards-sort') as HTMLSelectElement).value = 'default';
	}

	applySearch() {
		(document.querySelector('.cards-search') as HTMLInputElement).value = this.filters.search;
		const resultData: ICard[] = [];
		for (const cardObj of this.data) {
			if(cardObj.name?.toString().toLocaleLowerCase().includes(this.filters.search.toLocaleLowerCase())) {
				resultData.push(cardObj);
			}
		}
		this.data = [...resultData];
	}
	addSearchListener() {
		const search$ = document.querySelector('.cards-search') as HTMLInputElement;
		search$.addEventListener('input', () => {
			this.filters.search = search$.value;
			this.applyAll();
		});
	}

	resetSearch() {
		(document.querySelector('.cards-search') as HTMLInputElement).value = '';
	}

	addCheckboxFiltersListener() {

		const getCheckboxFilter = (event: Event) => {
			const target = event.target as HTMLInputElement;
			const inputNameArr = target.name.split('__');
			const inputName = inputNameArr[inputNameArr.length - 1];
			const isChecked = target.checked;
			const params = this.filters[inputName as keyof IFilters] as string[];
			if (isChecked) {
				params.push(target.value);
			} else {
				params.splice(params.indexOf(target.value), 1);
			}
			this.applyAll();
		};

		const filterBrandD = document.querySelector('.filter__brand');
		const filterPopularityD = document.querySelector('.filter__popularity');
		const filterColorD = document.querySelector('.filter__color');
		const filterSizeD = document.querySelector('.filter__size');
		filterBrandD?.addEventListener('input', getCheckboxFilter);
		filterColorD?.addEventListener('input', getCheckboxFilter);
		filterPopularityD?.addEventListener('input', getCheckboxFilter);
		filterSizeD?.addEventListener('input', getCheckboxFilter);
	}

	addRangeFiltersListener() {

		const getRangeSliderDoubleFilter = (event: Event, ) => {
			const target$ = event.currentTarget as HTMLInputElement;
			const slider1$ = target$.querySelector('#range-slider-double__slider-1') as HTMLInputElement;
			const slider2$ = target$.querySelector('#range-slider-double__slider-2') as HTMLInputElement;
			const max = slider1$.dataset.max as string;
			const min = slider2$.dataset.min as string;

			if(slider1$ && slider2$){
				const inputNameArr1 = slider1$.name.split('__');
				const inputName1 = inputNameArr1[inputNameArr1.length - 1];

				const params = this.filters[inputName1 as keyof IFilters] as string[];

				params[0] = +slider1$.value >= +max ? max : slider1$.value.toString();
				params[1] = +slider2$.value <= +min ? min : slider2$.value.toString();
			}

			this.applyAll();
		};

		const sliderStockPrice$ = document.querySelector('#range-slider-double__price') as HTMLDivElement;
		const sliderYear$ = document.querySelector('#range-slider-double__year') as HTMLDivElement;
		const sliderBalance$ = document.querySelector('#range-slider-double__balance') as HTMLDivElement;

		this.rangeSliderDoublePrice = new RangeSliderDouble (sliderStockPrice$, {
			labelPrefix1: '$ ',
			labelPrefix2: '$ ',
			range: [60, 150],
			step: [10, 10],
			minGap: 10
		});
		this.rangeSliderDoubleYear = new RangeSliderDouble (sliderYear$, {
			range: [2014, 2022],
			startValues: [2014, 2022],
			minGap: 1,
		});
		this.rangeSliderDoubleBalance = new RangeSliderDouble (sliderBalance$, {
			range: [1, 61],
			startValues: [1, 61],
			step: [5, 5],
			minGap: 10,
		});

		this.rangeSliderDoublePrice.render();
		this.rangeSliderDoubleYear.render();
		this.rangeSliderDoubleBalance.render();

		sliderStockPrice$.addEventListener('input', getRangeSliderDoubleFilter);
		sliderYear$.addEventListener('input', getRangeSliderDoubleFilter);
		sliderBalance$.addEventListener('input', getRangeSliderDoubleFilter);

	}

	applyFilters() {

		const filterByRange = (dataArray: ICard[], property: string, valuesArray: number[]): ICard[] => {
			const resultData: ICard[] = [];
			if (valuesArray.length > 0) {
				for (const cardObj of dataArray) {
					const prop = (cardObj[property as keyof ICard])?.toString() || '';
					if(Number(prop) >= valuesArray[0] && Number(prop) <= valuesArray[1]) {
						resultData.push(cardObj);
					}
				}
				return resultData;
			}
			return dataArray;


		};

		const filterByValues = (dataArray: ICard[], property: string, valuesArray: string[]): ICard[] => {
			const resultData: ICard[] = [];
			if (valuesArray.length > 0) {
				valuesArray.forEach( value => {
					for (const cardObj of dataArray) {
						const isInData = Boolean(resultData.find(item => {
							return cardObj.id === item.id;
						}));

						const prop = cardObj[property as keyof ICard] || [];
						if(!isInData && prop.toString().toLocaleLowerCase().includes((value).toLocaleLowerCase())) {
							resultData.push(cardObj);
						}
					}
				});
				return resultData;
			}
			return dataArray;

		};

		this.data = [...filterByRange(this.data, 'price', this.filters.price)];
		this.data = [...filterByRange(this.data, 'balance', this.filters.balance)];
		this.data = [...filterByRange(this.data, 'year', this.filters.year)];
		this.data = [...filterByValues(this.data, 'brand', this.filters.brand)];
		this.data = [...filterByValues(this.data, 'popular', this.filters.popular)];
		this.data = [...filterByValues(this.data, 'color', this.filters.color)];
		this.data = [...filterByValues(this.data, 'size', this.filters.size)];
	}

	addResetFiltersAndSearchListener() {
		const resetButton$ = document.querySelector('#filter__reset-button');
		resetButton$?.addEventListener('click', () => {
			this.data = this.initData;
			this.filters.price = [];
			this.filters.year = [];
			this.filters.balance = [];
			this.filters.brand = [];
			this.filters.popular = [];
			this.filters.color = [];
			this.filters.size = [];
			const filterBrand$ = document.querySelectorAll('.filter__brand [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			const filterPopularity$ = document.querySelectorAll('.filter__popularity [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			const filterColor$ = document.querySelectorAll('.filter__color [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			const filterSize$ = document.querySelectorAll('.filter__size [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			filterBrand$.forEach(elem => elem.checked = false);
			filterPopularity$.forEach(elem => elem.checked = false);
			filterColor$.forEach(elem => elem.checked = false);
			filterSize$.forEach(elem => elem.checked = false);
			const sliderStockPrice1$ = document.querySelector('#range-slider-double__price #range-slider-double__slider-1') as HTMLInputElement;
			const sliderStockPrice2$ = document.querySelector('#range-slider-double__price #range-slider-double__slider-2') as HTMLInputElement;
			const sliderYear1$ = document.querySelector('#range-slider-double__year #range-slider-double__slider-1') as HTMLInputElement;
			const sliderYear2$ = document.querySelector('#range-slider-double__year #range-slider-double__slider-2') as HTMLInputElement;
			const sliderBalance1$ = document.querySelector('#range-slider-double__balance #range-slider-double__slider-1') as HTMLInputElement;
			const sliderBalance2$ = document.querySelector('#range-slider-double__balance #range-slider-double__slider-2') as HTMLInputElement;
			sliderStockPrice1$.value = sliderStockPrice1$.min;
			sliderStockPrice2$.value = sliderStockPrice2$.max;
			sliderYear1$.value = sliderYear1$.min;
			sliderYear2$.value = sliderYear2$.max;
			sliderBalance1$.value = sliderBalance1$.min;
			sliderBalance2$.value = sliderBalance2$.max;
			(this.rangeSliderDoublePrice as RangeSliderDouble).update();
			(this.rangeSliderDoubleYear as RangeSliderDouble).update();
			(this.rangeSliderDoubleBalance as RangeSliderDouble).update();
			this.applyAll();
		});
	}

	addCardListeners() {

		const cardsList$ = document.querySelectorAll('.card') as NodeListOf<HTMLButtonElement>;
		cardsList$.forEach(card$ => {
			const cardId = card$.id.split('-')[1];
			const buttonPlus$ = card$.querySelector('.card__button-plus') as HTMLButtonElement;
			const buttonMinus$ = card$.querySelector('.card__button-minus') as HTMLButtonElement;

			buttonPlus$.addEventListener('click', () => {
				const cardInCart$ = card$.querySelector('.card__in-cart') as HTMLParagraphElement;
				const cardBalance$ = card$.querySelector('.card__balance') as HTMLParagraphElement;
				const cartCount$ = document.querySelector('#button__cart-count') as HTMLButtonElement;
				if (+cartCount$.innerText === 20) alert('Hey! Did you have enough money?\nCart has limited to 20 items to save your money!');
				if (+cardInCart$.innerText < +cardBalance$.innerText && +cartCount$.innerText < 20) {
					cardInCart$.innerText = (+cardInCart$.innerText + 1).toString();
					buttonPlus$.classList.add('in-cart');
					this.addToCart();
					this.collectCardsInCart(cardId);
				}

			});

			buttonMinus$.addEventListener('click', () => {
				const cardInCart$ = card$.querySelector('.card__in-cart') as HTMLParagraphElement;
				if (+cardInCart$.innerText > 0) {
					cardInCart$.innerText = (+cardInCart$.innerText - 1).toString();
					this.removeFormCart();
					this.removeCardsInCart(cardId);
				}
				if (+cardInCart$.innerText === 0) buttonPlus$.classList.remove('in-cart');
			});
		});
	}

	addToCart() {
		const buttonCart$ = document.querySelector('#button__cart') as HTMLButtonElement;
		const cartCount$ = document.querySelector('#button__cart-count') as HTMLButtonElement;
		if (+cartCount$.innerText < 20) {
			cartCount$.innerText = (+cartCount$.innerText + 1).toString();
			buttonCart$.classList.add('in-cart');
		}
	}
	removeFormCart() {
		const buttonCart$ = document.querySelector('#button__cart') as HTMLButtonElement;
		const cartCount$ = document.querySelector('#button__cart-count') as HTMLButtonElement;
		if (+cartCount$.innerText > 0) {
			cartCount$.innerText = (+cartCount$.innerText - 1).toString();
		}
		if (+cartCount$.innerText === 0) buttonCart$.classList.remove('in-cart');
	}

	collectCardsInCart(id: string) {
		this.cart.push(id);
		this.saveSettings();
	}
	removeCardsInCart(id: string) {
		this.cart.splice(this.cart.indexOf(id), 1);
		this.saveSettings();
	}
}
