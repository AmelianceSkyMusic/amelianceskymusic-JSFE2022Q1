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

export interface DrawNewsData {
    status: string;
    totalResults: number;
    articles: ArticleData[];
}

export interface DrawSourcesData {
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
    body: ReadableStream; // ?
    bodyUsed: boolean;
    headers: Headers; // ?
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
}

export interface FilterOptions {
    // apiKey: string; // REQUIRED Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
    q: string; // Keywords or phrases to search for in the article title and body. Advanced search is supported here: Surround phrases with quotes (") for exact match. Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin Prepend words that must not appear with a - symbol. Eg: -bitcoin Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin. The complete value for q must be URL-encoded. Max length: 500 chars.
    searchIn: string; // Default: all fields are searched. | The fields to restrict your q search to. The possible options are: title, description, content, Multiple options can be specified by separating them with a comma, for example: title,content. This parameter is useful if you have an edge case where searching all the fields is not giving the desired outcome, but generally you should not need to set this.
    sources: string; // A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.
    domains: string; // A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.
    excludeDomains: string; // A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.
    from: string; // Default: the oldest according to your plan. | A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2022-07-02 or 2022-07-02T17:40:49)
    to: string; // Default: the newest according to your plan | A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2022-07-02 or 2022-07-02T17:40:49)
    language: string; // Default: all languages returned. | The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ar de en es fr he it nl no pt ru sv ud zh.
    sortBy: string; // Default: publishedAt | The order to sort the articles in. Possible options: relevancy, popularity, publishedAt. relevancy = articles more closely related to q come first. popularity = articles from popular sources and publishers come first. publishedAt = newest articles come first.
    pageSize: number; // Default: 100. Maximum: 100 | The number of results to return per page
    page: number; // Default: 1 | Use this to page through the results
}

export interface RequestTopHeadlinesParameters {
    // apiKey: string;
    country: string;
    category: string;
    sources: string;

    //...
}
