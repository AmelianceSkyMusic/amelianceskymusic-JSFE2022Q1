import AppModel from '../models/AppModel';
// import AppView from '../views/AppView';
export default class App {
	state: { [key: string]: string };
	constructor() {
		this.state = {
			sheetID: '11IF6n311xG3ycdE_mOQaZizL7NFzeynvFu2ni1sghQ0',
			sheetTitle: 'base',
			sheetRange: '',
			get url() {
				return 'https://docs.google.com/spreadsheets/d/' + this.sheetID + '/gviz/tq?tqx=out:json&sheet=' + this.sheetTitle + '&range=' + this.sheetRange;
			}
		};
	}

	async start() {
		const model = new AppModel(this.state);
		const data = await model.getCards();
		console.log('->', data);

		// const view = new AppView(data);
		// view.render();
	}
}
