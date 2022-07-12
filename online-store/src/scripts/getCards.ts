// import { IGoogleSheetsData } from './IGoogleSheetsData';

type TGoogleParam = number | string

// const table = {};


function getCards(): {[key: string]: string}[] {

	const cards: {[key: string]: string}[] = [];

	const sheetID = '11IF6n311xG3ycdE_mOQaZizL7NFzeynvFu2ni1sghQ0';
	const sheetTitle = 'base';
	const sheetRange = '';

	async function getGoogleSheetsData(sheetID: TGoogleParam, sheetTitle: TGoogleParam, sheetRange: TGoogleParam): Promise<void> {
		const url = 'https://docs.google.com/spreadsheets/d/' + sheetID + '/gviz/tq?tqx=out:json&sheet=' + sheetTitle + '&range=' + sheetRange;
		console.log(sheetID, sheetTitle, sheetRange);


		const res = await fetch(url);
		const textData = await res.text();

		const dataJson = JSON.parse(textData.substring(47).slice(0, -2));


		// *----- Get data from simpla table when first row is header -----
		const dataObj: {[key: string]: string[]} = {};
		const table = dataJson.table;
		console.log(table);
		const maxLengthOfColumn = table.rows[0].c.length;
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

		for (let i = 0; i < maxLengthOfColumn - 1; i++) {
			const card: {[key: string]: string} = {};
			Object.keys(dataObj).forEach(el => {
				card[el] = dataObj[el][i] || '';
			});
			cards.push (card);
		}
	}


	getGoogleSheetsData(sheetID, sheetTitle, sheetRange);

	return cards;
}
export default getCards;
