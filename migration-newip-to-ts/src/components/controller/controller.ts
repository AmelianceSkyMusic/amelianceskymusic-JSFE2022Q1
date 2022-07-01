import AppLoader from './appLoader';
// import { LoadCallbackData } from '../types/interface';
class AppController extends AppLoader {
    getSources<T>(callback: (someData: T) => void): void {
        super.getResp({ endpoint: 'sources' }, callback);
    }

    getNews<T>(e: Event, callback: (someData: T) => void): void {
        let target = e.target as HTMLDivElement;
        // let target = e.target;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;

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
}

export default AppController;
