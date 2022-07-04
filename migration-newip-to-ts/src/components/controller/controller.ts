import AppLoader from './appLoader';
import { AppView } from '../view/appView';
import { AppControllerClass } from '../types/class';
import { DrawNewsData, DrawSourcesData, RequestParameters } from '../types/interface';
import { createHTMLElem } from '../scripts/_asm';

class AppController extends AppLoader implements AppControllerClass {
    view: AppView;
    constructor() {
        super();
        this.view = new AppView();
    }
    getSources<T>(callback: (someData: T) => void, optionData?: Partial<RequestParameters>): void {
        // super.getResp({ endpoint: 'sources' }, callback);
        super.getResp({ endpoint: 'sources', options: optionData }, callback);
    }

    getNews<T>(e: Event, callback: (someData: T) => void): void {
        let target = e.target as HTMLDivElement;
        // let target = e.target;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                console.log('sourceId', sourceId);

                // if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLDivElement;
        }
    }

    getFiler(): void {
        this.view = new AppView();
        const btnShowNews$ = document.querySelector('.button#show-news') as HTMLButtonElement;
        btnShowNews$.addEventListener('click', (): void => {
            const filterLanguage$ = document.querySelector('.language__selection') as HTMLSelectElement;
            const filterSortType$ = document.querySelectorAll('.sort__type') as NodeListOf<HTMLInputElement>;
            let filterSortTypeChecked: string; // ?
            filterSortTypeChecked = 'publishedAt';
            for (const item of filterSortType$) {
                if (item.checked) filterSortTypeChecked = item.value;
            }

            const optionsFiltered: Partial<RequestParameters> = {
                language: filterLanguage$.value,
                sortBy: filterSortTypeChecked,
            };

            this.getSources((data: DrawSourcesData): void => this.view.drawSources(data), optionsFiltered);
            console.log('click');
        });
    }

    addActions(): void {
        const btnArticle$ = document.querySelector('.button-source') as HTMLButtonElement;

        super.getResp(
            {
                endpoint: 'top-headlines',
                options: {
                    country: 'pl',
                },
            },
            (data: DrawNewsData): void => this.view.drawNews(data)
        );

        btnArticle$.addEventListener('click', (): void => {
            console.log('btnArticle');

            //
            //
            //
            //
            //
            //
            //
            const body$: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;

            const fragment$: DocumentFragment = new DocumentFragment() as DocumentFragment; // createvirtual fragment for compose no parent node
            const zeroBlock$: HTMLElement = createHTMLElem(fragment$, 'div', { class: 'zero-block' });
            // zeroBlock$.style.position = 'relative';
            const blackout$: HTMLElement = createHTMLElem(zeroBlock$, 'div', { class: 'blackout' });

            const containerSources$: HTMLElement = createHTMLElem(zeroBlock$, 'div', { class: 'container__sources' });
            const sources$: HTMLElement = createHTMLElem(containerSources$, 'div', {
                class: 'sources scroll-transparent',
            });
            const sourcesHeader$: HTMLElement = createHTMLElem(sources$, 'div', {
                class: 'sources__header',
            });
            createHTMLElem(sourcesHeader$, 'h3', { class: 'h3' }, 'Source List');
            const sourcesClose$: HTMLElement = createHTMLElem(sourcesHeader$, 'button', {
                class: 'sources__close button-theme button button__medium button__text',
            });
            createHTMLElem(sourcesClose$, 'span', { class: 'label' }, '×');
            sourcesHeader$.addEventListener('click', () => console.log('close'));
            // const sourceItemTemp$: HTMLElement = createHTMLElem(body$, 'div', { id: 'sourceItemTemp' });
            // sourceItemTemp$.innerHTML = `<div class="source__item button button__medium button__fill">
            //                                 <span class="label source__item-name"></span>
            //                             </div>`;

            this.getSources((data: DrawSourcesData): void => this.view.drawSources(data));

            // sources$.innerHTML +=
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae0"><span class="label source__item-name">Infobae1</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae2"><span class="label source__item-name">Infobae2</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae4"><span class="label source__item-name">Infobae3</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae6"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae8"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae10"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae12"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae14"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae16"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae18"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae20"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae22"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae24"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae26"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae28"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae30"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae32"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae34"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae36"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae38"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae40"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae42"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae44"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae46"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae48"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae50"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae52"><span class="label source__item-name">Infobae</span></div>' +
            //     '<div class="source__item button button__medium button__fill" data-source-id="infobae54"><span class="label source__item-name">Infobae0000</span></div>';

            // sourceItemTemp$.remove();
            const closeSource = (): void => {
                sources$.classList.remove('show');
                blackout$.classList.remove('show');
                blackout$.addEventListener('animationend', (): void => {
                    zeroBlock$.remove();
                });
            };
            blackout$.classList.add('show');
            sources$.classList.add('show');
            blackout$.addEventListener('click', closeSource);

            // const htmlTemp$: DocumentFragment = new DocumentFragment() as DocumentFragment;
            body$.prepend(fragment$);

            // const sourcesClose$: HTMLElement = createHTMLElem(sourcesHeader$, 'p', { class: 'p1 sources__close' }, '×');
            (document.querySelector('.sources__close') as HTMLParagraphElement).addEventListener('click', closeSource);
            (document.querySelector('.sources') as HTMLParagraphElement).addEventListener('click', closeSource);

            (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e): void =>
                this.getNews(e, (data: DrawNewsData): void => this.view.drawNews(data))
            );
            //
            //
            //
            //
            //
            //
        });
        const btnTheme$ = document.querySelector('.button-theme') as HTMLButtonElement;
        btnTheme$.addEventListener('click', (): void => {
            if (btnTheme$.classList.contains('current-dark')) {
                btnTheme$.classList.remove('current-dark');
                btnTheme$.classList.add('current-light');
                (document.querySelector('link[href*="theme-dark"]') as HTMLLinkElement).media = 'not all';
                (document.querySelector('link[href*="theme-light"]') as HTMLLinkElement).media = 'all';
                console.log('set drk');
            } else {
                btnTheme$.classList.remove('current-light');
                btnTheme$.classList.add('current-dark');
                (document.querySelector('link[href*="theme-dark"]') as HTMLLinkElement).media = 'all';
                (document.querySelector('link[href*="theme-light"]') as HTMLLinkElement).media = 'not all';
                console.log('set light');
            }
        });
    }
}

export default AppController;
