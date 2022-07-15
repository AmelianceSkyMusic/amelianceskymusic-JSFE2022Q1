import { shuffleArray } from '../asm-scripts';
import AppModel from '../models/AppModel';
import { ICard } from '../types/interfaces';
import AppView from '../views/AppView';
export default class App {
	state: { [key: string]: string };
	initData: ICard[] = [];
	data: ICard[] = [];
	view = new AppView();
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
	}

	async start() {
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
				if(cardObj.name?.toString().toLocaleLowerCase().includes((target.value.toLocaleLowerCase()))) {
					resultData.push(cardObj);
				}
			}
			this.view.render(resultData);
		});
	}
}
