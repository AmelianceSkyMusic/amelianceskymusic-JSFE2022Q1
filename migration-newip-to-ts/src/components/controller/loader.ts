import { HTTPStatusCode } from '../types/enum';
import { LoaderClass } from '../types/class';

// ? ONLY FOR TASK
interface Option {
    apiKey: string;
    nothing: null;
}

export type apikeyobj = Pick<Option, 'apiKey'> | null; // ? ONLY FOR TASK

class Loader implements LoaderClass {
    constructor(public baseLink: string, public options: apikeyobj | Partial<object>) {} // ? ONLY FOR TASK "Partial, union": apikeyobj | Partial<object>

    getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } },
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
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key): void => {
            url += `${key}=${urlOptions[key]}&`;
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
