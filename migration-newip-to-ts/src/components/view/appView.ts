import News from './news/news';
import Sources from './sources/sources';

import { NewsResponseData, ArticleData, DrawSourcesData, SourcesData } from '../types/interface';
import { IAppView } from '../types/class';

export class AppView implements IAppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Partial<NewsResponseData>): void {
        // ? const values: NewsData[] = data.articles;
        const values: ArticleData[] = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: Partial<DrawSourcesData>): void {
        // ? const values: SourcesData[] = data?.sources;
        const values: SourcesData[] = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
