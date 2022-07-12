import AppController from '../controller/controller';
import AppView from '../view/appView';
import News from '../view/news/news';
import Sources from '../view/sources/sources';
import { NewsResponseData, SourcesResponseData, ArticleData, SourcesData } from './interface';

export interface ILoader {
    getResp<T>(
        { endpoint, options }: { endpoint: string; options?: { sources?: string } },
        callback: (data: T) => void
    ): void;
}

export interface IAppController extends Partial<ILoader> {
    getSources(callback: (newsData: Partial<SourcesResponseData>) => void): void;
    getNews(e: Event, callback: (someData: Partial<NewsResponseData>) => void): void;
}

export interface AppClass {
    controller: AppController;
    view: AppView;
    start(): void;
}

export interface INews {
    draw(data: ArticleData[]): void;
}
export interface ISources {
    draw(data: SourcesData[]): void;
}

export interface IAppView {
    news: News;
    sources: Sources;
    drawNews(data: NewsResponseData): void;
    drawSources(data: SourcesResponseData): void;
}
