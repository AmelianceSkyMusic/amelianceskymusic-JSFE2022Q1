interface IRangeSliderDoubleObj {
	minGap?: number,
	range?: [number, number],
	startValues?: [number, number],
	labelPrefix1?: string,
	labelPostfix1?: string,
	labelPrefix2?: string,
	labelPostfix2?: string,
	label1?: boolean,
	label2?: boolean,
	step?: number,
}

export function rangeSliderDouble (
	siderComponent$: HTMLElement, {
		minGap = 10,
		range = [0, 100],
		startValues = [30, 70],
		labelPrefix1 = '',
		labelPostfix1 = '',
		labelPrefix2 = '',
		labelPostfix2 = '',
		label1 = true,
		label2 = true,
		step = 1
	}: IRangeSliderDoubleObj = {}): void
{

	const slider1$ = siderComponent$.querySelector('#range-slider-double__slider-1') as HTMLInputElement;
	const slider2$ = siderComponent$.querySelector('#range-slider-double__slider-2') as HTMLInputElement;
	const label1$ = siderComponent$.querySelector('#range-slider-double__label-1') as HTMLSpanElement;
	const label2$ = siderComponent$.querySelector('#range-slider-double__label-2') as HTMLSpanElement;
	const labels$ = siderComponent$.querySelector('#range-slider-double__labels') as HTMLSpanElement;
	const sliderTrack$ = siderComponent$.querySelector('#range-slider-double__track') as HTMLDivElement;
	const rgbaSliderTrackColor: string = window.getComputedStyle(sliderTrack$).backgroundColor;
	sliderTrack$.style.backgroundColor = 'none';

	const labelValuePerPersent: number = (range[1] - range[0]) / 100;
	const converRangeValueToLavelValue = (rangeValue: number): number => {
		return Math.ceil((labelValuePerPersent * rangeValue) + range[0]);
	};
	const converLavelValueToRangeValue = (labelValue: number): number => {
		return Math.ceil((labelValue) / labelValuePerPersent);
	};

	slider1$.value = converLavelValueToRangeValue(startValues[0] - range[0]).toString();
	slider2$.value = converLavelValueToRangeValue(startValues[1] - range[0]).toString();


	if (!label1 && !label2) {
		labels$.style.display = 'none';
	} else if (!label1) {
		label1$.style.visibility = 'hidden';
		label1$.style.userSelect = 'none';
	} else if (!label2) {
		label2$.style.visibility = 'hidden';
		label2$.style.userSelect = 'none';
	}

	function fillColor(): void {
		const percent1: number = Math.trunc(+slider1$.value);
		const percent2: number = Math.trunc(+slider2$.value);

		const rgbaSliderTrackColorArray: number[] = rgbaSliderTrackColor.split(',').map((elem): number => parseInt(elem.replace(/^\D+/g, '')));
		if (rgbaSliderTrackColorArray.length <= 3) rgbaSliderTrackColorArray.push(1);
		const [r, g, b, a] = rgbaSliderTrackColorArray;

		const linearGradient = `linear-gradient(to right, rgba(0, 0, 0, 0) ${percent1}%, rgba(${r}, ${g}, ${b}, ${a}) ${percent1}%, rgba(${r}, ${g}, ${b}, ${a}) ${percent2}%, rgba(0, 0, 0, 0) ${percent2}%)`;

		sliderTrack$.style.background = linearGradient;
	}

	const updateSlider1 = (): void => {
		if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
			slider1$.value = (parseInt(slider2$.value) - minGap) + '';
		}


		const labelValueNumb: number = converRangeValueToLavelValue(+slider1$.value);
		let labelValue: string = (labelValueNumb - (labelValueNumb % step)).toString();
		if (labelPrefix1) labelValue = labelPrefix1 + labelValue;
		if (labelPostfix1) labelValue = labelValue + labelPostfix1;

		label1$.textContent = labelValue;

		fillColor();
	};

	const updateSlider2 = (): void => {
		if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
			slider2$.value = (parseInt(slider1$.value) + minGap) + '';
		}


		const labelValueNumb: number = converRangeValueToLavelValue(+slider2$.value);
		let labelValue: string = (labelValueNumb - (labelValueNumb % step)).toString();
		if (labelPrefix2) labelValue = labelPrefix2 + labelValue;
		if (labelPostfix2) labelValue = labelValue + labelPostfix2;


		label2$.textContent = labelValue;

		fillColor();
	};

	slider1$.addEventListener('input', updateSlider1);
	slider2$.addEventListener('input', updateSlider2);

	updateSlider1();
	updateSlider2();

	fillColor();
}
