import { RangeSliderDouble } from '../asm-ui/scripts';
import { shuffleArray } from '../asm-scripts';
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
			size: []
		};
	}

	async start() {
		this.rangeFilters();
		this.checkboxFilter();
		this.resetFilters();
		const model = new AppModel(this.state);
		const data = await model.getCards();
		this.initData = shuffleArray(data);
		this.view = new AppView();
		this.view.render(this.initData);
		this.data = this.initData;

		this.search();
	}

	search() {
		const searchD = document.querySelector('.cards-search');
		searchD?.addEventListener('input', (event) => {
			const target = event.target as HTMLInputElement;
			const resultData: ICard[] = [];
			for (const cardObj of this.data) {
				if(cardObj.name?.toString().toLocaleLowerCase().includes(target.value.toLocaleLowerCase())) {
					resultData.push(cardObj);
				}
			}
			this.view.render(resultData);
		});
	}

	checkboxFilter() {

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
			this.applyFilters();
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

	rangeFilters() {

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

			this.applyFilters();
		};

		const siderStockPrice$ = document.querySelector('#range-slider-double__price') as HTMLDivElement;
		const siderYear$ = document.querySelector('#range-slider-double__year') as HTMLDivElement;
		const siderBalance$ = document.querySelector('#range-slider-double__balance') as HTMLDivElement;

		this.rangeSliderDoublePrice = new RangeSliderDouble (siderStockPrice$, {
			labelPrefix1: '$ ',
			labelPrefix2: '$ ',
			range: [60, 150],
			step: [10, 10],
			minGap: 10
		});
		this.rangeSliderDoubleYear = new RangeSliderDouble (siderYear$, {
			range: [2014, 2022],
			startValues: [2014, 2022],
			minGap: 1,
		});
		this.rangeSliderDoubleBalance = new RangeSliderDouble (siderBalance$, {
			range: [1, 61],
			startValues: [1, 61],
			step: [5, 5],
			minGap: 10,
		});

		this.rangeSliderDoublePrice.render();
		this.rangeSliderDoubleYear.render();
		this.rangeSliderDoubleBalance.render();

		siderStockPrice$.addEventListener('input', getRangeSliderDoubleFilter);
		siderYear$.addEventListener('input', getRangeSliderDoubleFilter);
		siderBalance$.addEventListener('input', getRangeSliderDoubleFilter);

	}

	applyFilters() {

		this.data = this.initData;

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

		this.view.render(this.data);
	}

	resetFilters() {
		const resetButton$ = document.querySelector('#filter__reset-button');
		resetButton$?.addEventListener('click', () => {
			this.data = this.initData;
			const filterBrand$ = document.querySelectorAll('.filter__brand [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			const filterPopularity$ = document.querySelectorAll('.filter__popularity [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			const filterColor$ = document.querySelectorAll('.filter__color [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			const filterSize$ = document.querySelectorAll('.filter__size [type="checkbox"]') as NodeListOf<HTMLInputElement>;
			filterBrand$.forEach(elem => elem.checked = false);
			filterPopularity$.forEach(elem => elem.checked = false);
			filterColor$.forEach(elem => elem.checked = false);
			filterSize$.forEach(elem => elem.checked = false);
			const siderStockPrice1$ = document.querySelector('#range-slider-double__price #range-slider-double__slider-1') as HTMLInputElement;
			const siderStockPrice2$ = document.querySelector('#range-slider-double__price #range-slider-double__slider-2') as HTMLInputElement;
			const siderYear1$ = document.querySelector('#range-slider-double__year #range-slider-double__slider-1') as HTMLInputElement;
			const siderYear2$ = document.querySelector('#range-slider-double__year #range-slider-double__slider-2') as HTMLInputElement;
			const siderBalance1$ = document.querySelector('#range-slider-double__balance #range-slider-double__slider-1') as HTMLInputElement;
			const siderBalance2$ = document.querySelector('#range-slider-double__balance #range-slider-double__slider-2') as HTMLInputElement;
			siderStockPrice1$.value = siderStockPrice1$.min;
			siderStockPrice2$.value = siderStockPrice2$.max;
			siderYear1$.value = siderYear1$.min;
			siderYear2$.value = siderYear2$.max;
			siderBalance1$.value = siderBalance1$.min;
			siderBalance2$.value = siderBalance2$.max;
			(this.rangeSliderDoublePrice as RangeSliderDouble).update();
			(this.rangeSliderDoubleYear as RangeSliderDouble).update();
			(this.rangeSliderDoubleBalance as RangeSliderDouble).update();
			this.view.render(this.data);
		});
	}
}
