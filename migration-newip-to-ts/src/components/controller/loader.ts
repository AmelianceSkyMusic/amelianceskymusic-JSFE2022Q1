import { HTTPStatusCode } from '../types/enum';

class Loader {
    constructor(public baseLink: string, public options: { apiKey: string }) {}

    getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } },
        callback: (data: T) => void // getResp( //     { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } }, //     // (data) => this.view.drawNews(data) //     callback = () => { //         console.error('No callback for GET response'); //     } // )
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            // 401 Unauthorized 404 Not Found
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

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options: { sources?: string } = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res): Promise<T> => res.json())
            .then((data): void => callback(data))
            .catch((err): void => console.error(err));
    }
}

export default Loader;
