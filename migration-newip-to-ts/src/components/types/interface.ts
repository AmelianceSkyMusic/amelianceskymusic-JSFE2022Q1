export interface NewsData {
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
    articles: [
        {
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
    ];
}

export interface DrawSourcesData {
    status: string;
    sources: [
        {
            category: string;
            country: string;
            description: string;
            id: string;
            language: string;
            name: string;
            url: string;
        }
    ];
}

// export interface DrawSourcesValueFromData {
//     length: number;
//     [index: number]: {
//         category: string;
//         country: string;
//         description: string;
//         id: string;
//         language: string;
//         name: string;
//         url: string;
//     };
// }
