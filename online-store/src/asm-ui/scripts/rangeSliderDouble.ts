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
	step?: number[];
}

export class RangeSliderDouble {
	minGap?: number;
	range?: [number, number];
	startValues?: [number, number];
	labelPrefix1?: string;
	labelPostfix1?: string;
	labelPrefix2?: string;
	labelPostfix2?: string;
	label1?: boolean;
	label2?: boolean;
	step?: number[];
	siderComponent$: HTMLElement;

	slider1$: HTMLInputElement;
	slider2$: HTMLInputElement;
	labels$: HTMLSpanElement;
	label1$: HTMLSpanElement;
	label2$: HTMLSpanElement;
	sliderTrack$: HTMLDivElement;
	rgbaSliderTrackColorsArray: number[];

	constructor (
		siderComponent$: HTMLElement, {
			minGap = 1,
			range = [0, 100],
			startValues = [...range],
			labelPrefix1 = '',
			labelPostfix1 = '',
			labelPrefix2 = '',
			labelPostfix2 = '',
			label1 = true,
			label2 = true,
			step = []
		}: IRangeSliderDoubleObj) {

		this.minGap = minGap;
		this.range = range;
		this.startValues = startValues;
		this.labelPrefix1 = labelPrefix1;
		this.labelPostfix1 = labelPostfix1;
		this.labelPrefix2 = labelPrefix2;
		this.labelPostfix2 = labelPostfix2;
		this.label1 = label1;
		this.label2 = label2;
		this.step = step;

		this.siderComponent$ = siderComponent$;
		this.slider1$ = this.siderComponent$.querySelector('#range-slider-double__slider-1') as HTMLInputElement;
		this.slider2$ = this.siderComponent$.querySelector('#range-slider-double__slider-2') as HTMLInputElement;
		this.labels$ = this.siderComponent$.querySelector('#range-slider-double__labels') as HTMLSpanElement;
		this.label1$ = this.siderComponent$.querySelector('#range-slider-double__label-1') as HTMLSpanElement;
		this.label2$ = this.siderComponent$.querySelector('#range-slider-double__label-2') as HTMLSpanElement;
		this.sliderTrack$ = this.siderComponent$.querySelector('#range-slider-double__track') as HTMLDivElement;

		this.rgbaSliderTrackColorsArray = [];
	}

	getSliderColor() {
		const rgbaSliderTrackColor: string = window.getComputedStyle(this.sliderTrack$).backgroundColor;
		this.rgbaSliderTrackColorsArray = rgbaSliderTrackColor.split(',').map((elem): number => parseInt(elem.replace(/^\D+/g, '')));
		if (this.rgbaSliderTrackColorsArray.length <= 3) this.rgbaSliderTrackColorsArray.push(1);
	}
	render(): [HTMLInputElement, HTMLInputElement] {

		this.getSliderColor();

		const slider1$ = this.slider1$;
		const slider2$ = this.slider2$;
		const labels$ = this.labels$;
		const label1$ = this.label1$;
		const label2$ = this.label2$;


		const sliderTrack$ = this.siderComponent$.querySelector('#range-slider-double__track') as HTMLDivElement;
		const [r, g, b, a] = this.rgbaSliderTrackColorsArray;
		sliderTrack$.style.backgroundColor = 'none';

		const range = this.range as number[];
		const minGap = this.minGap as number;
		const step = this.step as number[];

		if (step?.length > 0) {
			slider1$.step = step[0].toString();
			slider2$.step = step[1].toString();
		}

		slider1$.dataset.max = (range[1] - minGap).toString();
		slider2$.dataset.min = (range[0] + minGap).toString();

		if (!this.label1 && !this.label2) {
			labels$.style.display = 'none';
		} else if (!this.label1) {
			label1$.style.visibility = 'hidden';
			label1$.style.userSelect = 'none';
		} else if (!this.label2) {
			label2$.style.visibility = 'hidden';
			label2$.style.userSelect = 'none';
		}

		const fillColor = (): void => {
			const percent1: number = Math.trunc((+slider1$.value - range[0]) * 100 / (range[1] - range[0]));
			const percent2: number = Math.trunc((+slider2$.value - range[0]) * 100 / (range[1] - range[0]));

			const linearGradient = `linear-gradient(to right, rgba(0, 0, 0, 0) ${percent1}%, rgba(${r}, ${g}, ${b}, ${a}) ${percent1}%,
									rgba(${r}, ${g}, ${b}, ${a}) ${percent2}%, rgba(0, 0, 0, 0) ${percent2}%)`;

			sliderTrack$.style.background = linearGradient;
		};

		const updateSlider1 = () => {
			if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
				slider1$.value = (parseInt(slider2$.value) - minGap) + '';
			}


			const labelValueNumb: number = +slider1$.value;
			let labelValue: string = labelValueNumb.toString();
			if (this.labelPrefix1) labelValue = this.labelPrefix1 + labelValue;
			if (this.labelPostfix1) labelValue = labelValue + this.labelPostfix1;

			label1$.textContent = labelValue;

			fillColor();
		};

		const updateSlider2 = () => {
			if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
				slider2$.value = (parseInt(slider1$.value) + minGap) + '';
			}

			const labelValueNumb: number = +slider2$.value;
			let labelValue: string = labelValueNumb.toString();
			if (this.labelPrefix2) labelValue = this.labelPrefix2 + labelValue;
			if (this.labelPostfix2) labelValue = labelValue + this.labelPostfix2;

			label2$.textContent = labelValue;

			fillColor();
		};

		slider1$.addEventListener('input', updateSlider1);
		slider2$.addEventListener('input', updateSlider2);

		updateSlider1();
		updateSlider2();

		return [slider1$, slider2$];
	}

	update() {

		const slider1$ = this.slider1$;
		const slider2$ = this.slider2$;
		const label1$ = this.label1$;
		const label2$ = this.label2$;
		const sliderTrack$ = this.siderComponent$.querySelector('#range-slider-double__track') as HTMLDivElement;
		const [r, g, b, a] = this.rgbaSliderTrackColorsArray;
		const range = this.range as number[];
		const minGap = this.minGap as number;

		const fillColor = (): void => {
			const percent1: number = Math.trunc((+slider1$.value - range[0]) * 100 / (range[1] - range[0]));
			const percent2: number = Math.trunc((+slider2$.value - range[0]) * 100 / (range[1] - range[0]));

			const linearGradient = `linear-gradient(to right, rgba(0, 0, 0, 0) ${percent1}%, rgba(${r}, ${g}, ${b}, ${a}) ${percent1}%,
										rgba(${r}, ${g}, ${b}, ${a}) ${percent2}%, rgba(0, 0, 0, 0) ${percent2}%)`;

			sliderTrack$.style.background = linearGradient;
		};

		const updateSlider1 = () => {
			if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
				slider1$.value = (parseInt(slider2$.value) - minGap) + '';
			}

			const labelValueNumb: number = +slider1$.value;
			let labelValue: string = labelValueNumb.toString();
			if (this.labelPrefix1) labelValue = this.labelPrefix1 + labelValue;
			if (this.labelPostfix1) labelValue = labelValue + this.labelPostfix1;

			label1$.textContent = labelValue;

		};

		const updateSlider2 = () => {
			if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
				slider2$.value = (parseInt(slider1$.value) + minGap) + '';
			}

			const labelValueNumb: number = +slider2$.value;
			let labelValue: string = labelValueNumb.toString();
			if (this.labelPrefix2) labelValue = this.labelPrefix2 + labelValue;
			if (this.labelPostfix2) labelValue = labelValue + this.labelPostfix2;

			label2$.textContent = labelValue;

		};

		updateSlider1();
		updateSlider2();

		fillColor();

	}

}
