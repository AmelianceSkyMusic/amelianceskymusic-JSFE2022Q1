import './scss/_themes/dark.scss';
import './style.scss';

import rangeSliderDouble from './scripts/rangeSliderDouble';

const siderStockBalance$ = document.querySelector('#range-slider-double-stock-balance') as HTMLDivElement;
rangeSliderDouble(siderStockBalance$, {
	labelPrefix1: '$ ',
	labelPrefix2: '$ ',
	range: [10, 300],
	startValues: [20, 100],
	step: 5,
});

const siderYear$ = document.querySelector('#range-slider-double-year') as HTMLDivElement;
rangeSliderDouble(siderYear$, {
	range: [2014, 2022],
	startValues: [2020, 2022],
});
