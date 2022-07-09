import AppLoader from './appLoader';
import { AppView } from '../view/appView';
import { AppControllerClass } from '../types/class';
import { DrawNewsData, DrawSourcesData, FilterOptions } from '../types/interface';
import { createHTMLElem } from '../scripts/_asm';

class AppController extends AppLoader implements AppControllerClass {
    view: AppView;
    constructor() {
        super();
        this.view = new AppView();
    }
    getSources(callback: (newsData: Partial<DrawSourcesData>) => void, optionData?: Partial<FilterOptions>): void {
        super.getResp({ endpoint: 'sources', options: optionData }, callback);
    }

    getNews(e: Event, callback: (newsData: Partial<DrawNewsData>) => void): void {
        let target = e.target as HTMLDivElement;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;

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

            const optionsFiltered: Partial<FilterOptions> = {
                language: filterLanguage$.value,
                sortBy: filterSortTypeChecked,
            };

            this.getSources((data: Partial<DrawSourcesData>): void => this.view.drawSources(data), optionsFiltered);
        });
    }

    addActions(): void {
        const btnArticle$ = document.querySelector('.button-source') as HTMLButtonElement;

        super.getResp(
            {
                endpoint: 'top-headlines',
                options: {
                    country: 'ua',
                },
            },
            (data: Partial<DrawNewsData>): void => this.view.drawNews(data)
        );

        btnArticle$.addEventListener('click', (): void => {
            const body$: HTMLBodyElement = document.querySelector('body') as HTMLBodyElement;

            const fragment$: DocumentFragment = new DocumentFragment() as DocumentFragment; // createvirtual fragment for compose no parent node
            const zeroBlock$: HTMLElement = createHTMLElem(fragment$, 'div', { class: 'zero-block' });

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

            this.getSources((data: Partial<DrawSourcesData>): void => this.view.drawSources(data));

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

            body$.prepend(fragment$);

            (document.querySelector('.sources__close') as HTMLParagraphElement).addEventListener('click', closeSource);
            (document.querySelector('.sources') as HTMLParagraphElement).addEventListener('click', closeSource);

            (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e): void =>
                this.getNews(e, (data: Partial<DrawNewsData>): void => this.view.drawNews(data))
            );
        });

        const btnTheme$ = document.querySelector('.button-theme') as HTMLButtonElement;

        btnTheme$.addEventListener('click', (): void => {
            if (btnTheme$.classList.contains('current-dark')) {
                btnTheme$.classList.remove('current-dark');
                btnTheme$.classList.add('current-light');
                (document.querySelector('link[href*="theme-dark"]') as HTMLLinkElement).media = 'not all';
                (document.querySelector('link[href*="theme-light"]') as HTMLLinkElement).media = 'all';
            } else {
                btnTheme$.classList.remove('current-light');
                btnTheme$.classList.add('current-dark');
                (document.querySelector('link[href*="theme-dark"]') as HTMLLinkElement).media = 'all';
                (document.querySelector('link[href*="theme-light"]') as HTMLLinkElement).media = 'not all';
            }
        });
    }
}

export default AppController;
