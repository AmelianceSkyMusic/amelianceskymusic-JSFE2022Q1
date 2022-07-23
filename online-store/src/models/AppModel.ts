import { devs } from '../asm-scripts';
import { IGoogleSheetsData } from '../types/IGoogleSheetsData';
import { ICard } from '../types/interfaces';

export default class AppModel {

	constructor(public state: {[key: string]: string}) {}

	static convertDataFromTableWithFirstRowHeading(data: IGoogleSheetsData) {
		const dataObj: { [key: string]: string[] } = {};
		const table = data.table;
		const maxLengthOfColumn: number = table.rows[0].c.length;
		for (let i = 0; i < maxLengthOfColumn; i++) {
			const colDate = [];
			for (let j = 1; j < table.rows.length; j++) {
				if (table.rows[j].c[i]) {
					colDate[j-1] = table.rows[j].c[i].v ?? '';
				} else {
					colDate[j] = '';
				}
			}
			dataObj[table.rows[0].c[i].v] = colDate;
		}
		return dataObj;
	}

	static async getGoogleSheetsData(url: string): Promise<{ [key: string]: string[]; }> {

		const response = await fetch(url);

		let dataObj: { [key: string]: string[] } = {};

		if (response.status === 404) {
			devs.error('getGoogleSheetsData() get 404');

		} else {
			const textData = await response.text();
			const dataJson = JSON.parse(textData.substring(47).slice(0, -2));

			dataObj = { ...AppModel.convertDataFromTableWithFirstRowHeading(dataJson)};
		}

		return dataObj;
	}

	static convertDataWithFirstRowHeadingToCardsArray(dataObj: {[key: string]: string[]}) {
		const cards: ICard[] = [];
		for (let i = 0; i < dataObj.id.length; i++) {
			const card: { [key: string]: string | number } = {};
			Object.keys(dataObj).forEach(el => {
				card[el] = dataObj[el][i];
			});

			card['inCart'] = 0;

			cards.push(card);
		}
		return cards;
	}
	async getCards() {
		const { url } = this.state;
		const dataObj = await AppModel.getGoogleSheetsData(url);
		const cards: ICard[] = [...AppModel.convertDataWithFirstRowHeadingToCardsArray(dataObj)];
		return cards;
	}
}
