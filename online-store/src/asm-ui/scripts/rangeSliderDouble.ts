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
	step?: [number, number];
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
	step?: [number, number];
	constructor(
		public siderComponentD: HTMLElement,
		{
			minGap = 1,
			range = [0, 100],
			startValues = [...range],
			labelPrefix1 = '',
			labelPostfix1 = '',
			labelPrefix2 = '',
			labelPostfix2 = '',
			label1 = true,
			label2 = true,
			step,
		}: IRangeSliderDoubleObj
	) {
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
	}

	render(): [HTMLInputElement, HTMLInputElement] {

		const slider1$ = this.siderComponentD.querySelector('#range-slider-double__slider-1') as HTMLInputElement;
		const slider2$ = this.siderComponentD.querySelector('#range-slider-double__slider-2') as HTMLInputElement;
		const labels$ = this.siderComponentD.querySelector('#range-slider-double__labels') as HTMLSpanElement;
		const label1$ = this.siderComponentD.querySelector('#range-slider-double__label-1') as HTMLSpanElement;
		const label2$ = this.siderComponentD.querySelector('#range-slider-double__label-2') as HTMLSpanElement;
		const sliderTrack$ = this.siderComponentD.querySelector('#range-slider-double__track') as HTMLDivElement;
		const rgbaSliderTrackColor: string = window.getComputedStyle(sliderTrack$).backgroundColor;
		sliderTrack$.style.backgroundColor = 'none';
		const range = this.range as number[];
		const minGap = this.minGap as number;

		if (this.step) {
			slider1$.step = this.step[0].toString();
			slider2$.step = this.step[1].toString();
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

			const rgbaSliderTrackColorArray: number[] = rgbaSliderTrackColor.split(',').map((elem): number => parseInt(elem.replace(/^\D+/g, '')));
			if (rgbaSliderTrackColorArray.length <= 3) rgbaSliderTrackColorArray.push(1);
			const [r, g, b, a] = rgbaSliderTrackColorArray;

			const linearGradient = `linear-gradient(to right, rgba(0, 0, 0, 0) ${percent1}%, rgba(${r}, ${g}, ${b}, ${a}) ${percent1}%,
									rgba(${r}, ${g}, ${b}, ${a}) ${percent2}%, rgba(0, 0, 0, 0) ${percent2}%)`;

			sliderTrack$.style.background = linearGradient;
		};

		const updateSlider1 = (): string => {
			if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
				slider1$.value = (parseInt(slider2$.value) - minGap) + '';
			}


			const labelValueNumb: number = +slider1$.value;
			let labelValue: string = labelValueNumb.toString();
			if (this.labelPrefix1) labelValue = this.labelPrefix1 + labelValue;
			if (this.labelPostfix1) labelValue = labelValue + this.labelPostfix1;

			label1$.textContent = labelValue;

			fillColor();

			return labelValue;
		};

		const updateSlider2 = (): string => {
			if (parseInt(slider2$.value) - parseInt(slider1$.value) <= minGap) {
				slider2$.value = (parseInt(slider1$.value) + minGap) + '';
			}

			const labelValueNumb: number = +slider2$.value;
			let labelValue: string = labelValueNumb.toString();
			if (this.labelPrefix2) labelValue = this.labelPrefix2 + labelValue;
			if (this.labelPostfix2) labelValue = labelValue + this.labelPostfix2;

			label2$.textContent = labelValue;

			fillColor();

			return labelValue;
		};

		slider1$.addEventListener('input', updateSlider1);
		slider2$.addEventListener('input', updateSlider2);

		updateSlider1();
		updateSlider2();

		fillColor();

		return [slider1$, slider2$];
	}

}
