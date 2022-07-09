// ? file realize classe's interfases

import AppController from '../controller/controller';
import AppView from '../view/appView';
import News from '../view/news/news';
import Sources from '../view/sources/sources';
import { DrawNewsData, DrawSourcesData, NewsData, SourcesData } from './interface';

export interface ILoader {
    getResp(
        { endpoint, options }: { endpoint: string; options?: { sources?: string } },
        callback: (data: Partial<DrawNewsData> | Partial<DrawSourcesData>) => void
    ): void;
}

export interface IAppController extends Partial<ILoader> {
    getSources(callback: (newsData: Partial<DrawSourcesData>) => void): void;
    getNews(e: Event, callback: (someData: Partial<DrawNewsData>) => void): void;
}

export interface AppClass {
    controller: AppController;
    view: AppView;
    start(): void;
}

export interface INews {
    draw(data: NewsData[]): void;
}
export interface ISources {
    draw(data: SourcesData[]): void;
}

export interface IAppView {
    news: News;
    sources: Sources;
    drawNews(data: DrawNewsData): void;
    drawSources(data: DrawSourcesData): void;
}
