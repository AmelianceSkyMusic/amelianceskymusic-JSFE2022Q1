import { HTTPStatusCode } from '../types/enum';
import { LoaderClass } from '../types/class';
import { RequestParameters, RequestTopHeadlinesParameters } from '../types/interface';

// ? ONLY FOR TASK
interface Option {
    apiKey: string;
    nothing: null;
}

export type apikeyobj = Pick<Option, 'apiKey'> | null; // ? ONLY FOR TASK

class Loader implements LoaderClass {
    constructor(public baseLink: string, public options: apikeyobj | Partial<object>) {} // ? ONLY FOR TASK "Partial, union": apikeyobj | Partial<object>

    getResp<T>(
        {
            endpoint,
            options = {},
        }: { endpoint: string; options?: Partial<RequestParameters> | Partial<RequestTopHeadlinesParameters> },
        callback: (data: T) => void
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
        console.log(this.options); // ! apikey
        console.log(options); // ! options {sources }
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key): void => {
            url += `${key}=${urlOptions[key]}&`; // https://newsapi.org/v2/sources?apiKey=2e5debdad61a4b9cb982ed04656c99f7&
        });
        console.log('url slice', url.slice(0, -1)); // https://newsapi.org/v2/everything?apiKey=2e5debdad61a4b9cb982ed04656c99f7&sources=abc-news
        return url.slice(0, -1); // ! remove & in end of link
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
