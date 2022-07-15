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
	// filters: { {[key: string]: string[]}{}  };
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
			'price': [],
			'year': [],
			'balance': [],
			'brand': [],
			'popular': [],
			'color': [],
			'size': []
		};
	}

	async start() {
		const model = new AppModel(this.state);
		const data = await model.getCards();
		this.initData = shuffleArray(data);
		this.view = new AppView();
		this.view.render(this.initData);
		this.data = this.initData;

		this.search();
		this.filter();
		this.applyFilters();
	}

	applyFilters() {

		this.data = this.initData;

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
			} else {
				return dataArray;
			}
		};
		this.data = [...filterByValues(this.data, 'brand', this.filters.brand)];
		this.data = [...filterByValues(this.data, 'popular', this.filters.popular)];
		this.data = [...filterByValues(this.data, 'color', this.filters.color)];
		this.data = [...filterByValues(this.data, 'size', this.filters.size)];

		this.view.render(this.data);
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
	filter() {

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
}
