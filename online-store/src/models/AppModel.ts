import { devs } from '../asm-scripts';
import { ICard } from '../types/interfaces';

export default class AppModel {
	constructor(public state: {[key: string]: string}) {}

	static async getGoogleSheetsData(url: string): Promise<{ [key: string]: string[]; }> {

		const response = await fetch(url);

		const dataObj: { [key: string]: string[] } = {};

		if (response.status === 404) {
			devs.error('getGoogleSheetsData() get 404');

		} else {
			const textData = await response.text();
			const dataJson = JSON.parse(textData.substring(47).slice(0, -2));

			// *----- convert data from simple table when detect first row as heading -----
			const table = dataJson.table;
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
		}

		return dataObj;
	}

	async getCards() {
		const { url } = this.state;

		const dataObj = await AppModel.getGoogleSheetsData(url);

		const cards: ICard[] = [];

		// *----- convert data object heading based to cards array index based-----
		for (let i = 0; i < dataObj.id.length; i++) {
			const card: { [key: string]: string | number } = {}; // TODO: rewrite to ICard
			Object.keys(dataObj).forEach(el => {
				card[el] = dataObj[el][i];
			});

			card['inCart'] = 0;

			cards.push(card);
		}

		return cards;

	}
}
