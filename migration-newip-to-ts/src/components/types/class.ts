// ? file realize classe's interfases

import AppController from '../controller/controller';
import AppView from '../view/appView';
import News from '../view/news/news';
import Sources from '../view/sources/sources';
import { DrawNewsData, DrawSourcesData, NewsData, SourcesData } from './interface';

export interface LoaderClass {
    baseLink: string;
    options: { apiKey?: string };
    getResp<T>(
        { endpoint, options }: { endpoint: string; options?: { sources?: string } },
        callback: (data: T) => void
    ): void;
    makeUrl(options: { sources?: string }, endpoint: string): string;
}

export interface AppControllerClass extends Partial<LoaderClass> {
    getSources<T>(callback: (someData: T) => void): void;
    getNews<T>(e: Event, callback: (someData: T) => void): void;
}

export interface AppClass {
    controller: AppController;
    view: AppView;
    start(): void;
}

export interface NewClass {
    draw(data: NewsData[]): void;
}
export interface SourcesClass {
    draw(data: SourcesData[]): void;
}

export interface AppViewClass {
    news: News;
    sources: Sources;
    drawNews(data: DrawNewsData): void;
    drawSources(data: DrawSourcesData): void;
}
