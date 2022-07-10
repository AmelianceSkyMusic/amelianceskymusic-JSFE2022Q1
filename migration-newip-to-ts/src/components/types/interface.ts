export interface ArticleData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourcesData {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface NewsResponseData {
    status: string;
    totalResults: number;
    articles: ArticleData[];
}

export interface SourcesResponseData {
    status: string;
    sources: {
        category: string;
        country: string;
        description: string;
        id: string;
        language: string;
        name: string;
        url: string;
    }[];
}

export interface LoadCallbackData {
    body: ReadableStream;
    bodyUsed: boolean;
    headers: Headers;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}

export interface FilterOptions {
    q: string;
    searchIn: string;
    sources: string;
    domains: string;
    excludeDomains: string;
    from: string;
    to: string;
    language: string;
    sortBy: string;
    pageSize: number;
    page: number;
}

export interface RequestTopHeadlinesParameters {
    country: string;
    category: string;
    sources: string;
}
