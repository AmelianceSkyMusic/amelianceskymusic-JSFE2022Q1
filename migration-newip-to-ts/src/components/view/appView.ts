import News from './news/news';
import Sources from './sources/sources';

import { DrawNewsData, NewsData, DrawSourcesData, SourcesData } from '../types/interface';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DrawNewsData) {
        // ? const values: NewsData[] = data.articles;
        const values: NewsData[] = data.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DrawSourcesData) {
        // ? const values: SourcesData[] = data?.sources;
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
