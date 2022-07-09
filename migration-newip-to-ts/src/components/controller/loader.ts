import { HTTPStatusCode } from '../types/enum';
import { LoaderClass } from '../types/class';
import { DrawNewsData, DrawSourcesData, FilterOptions, RequestTopHeadlinesParameters } from '../types/interface';

class Loader implements LoaderClass {
    constructor(public baseLink: string, public options: { apiKey?: string }) {}

    getResp(
        {
            endpoint,
            options = {},
        }: { endpoint: string; options?: Partial<FilterOptions> | Partial<RequestTopHeadlinesParameters> },
        callback: (data: Partial<DrawNewsData> | Partial<DrawSourcesData>) => void
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === HTTPStatusCode.unauthorized || res.status === HTTPStatusCode.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: { sources?: string } = {}, endpoint: string): string {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key): void => {
            url += `${key}=${urlOptions[key]}&`; // https://newsapi.org/v2/sources?apiKey=2e5debdad61a4b9cb982ed04656c99f7&
        });
        return url.slice(0, -1);
    }

    private load<T>(
        method: Readonly<string>, // ? ONLY FOR TASK "Readonly": Readonly<string>
        endpoint: Readonly<string>, // ? ONLY FOR TASK "Readonly": Readonly<string>
        callback: (data: T) => void,
        options: { sources?: string } = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res): Promise<T> => res.json())
            .then((data): void => callback(data))
            .catch((err): void => console.error(err));
    }
}

export default Loader;
