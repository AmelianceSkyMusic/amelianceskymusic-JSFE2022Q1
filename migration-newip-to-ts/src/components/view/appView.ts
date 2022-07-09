import News from './news/news';
import Sources from './sources/sources';

import { DrawNewsData, NewsData, DrawSourcesData, SourcesData } from '../types/interface';
import { AppViewClass } from '../types/class';

export class AppView implements AppViewClass {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Partial<DrawNewsData>): void {
        // ? const values: NewsData[] = data.articles;
        const values: NewsData[] = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: Partial<DrawSourcesData>): void {
        // ? const values: SourcesData[] = data?.sources;
        const values: SourcesData[] = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
