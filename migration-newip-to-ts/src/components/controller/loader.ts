import { LoadCallbackData } from '../types/interface';
class Loader {
    constructor(public baseLink: string, public options: { apiKey: string }) {}

    getResp(
        { endpoint, options }: { endpoint: string; options: { sources: string } },
        // (data) => this.view.drawNews(data)
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        console.log('res', res);
        return res;
    }

    makeUrl(options: { sources: string }, endpoint: string) {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        // console.log('urlOptions', urlOptions);
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: string,
        callback: (someData: LoadCallbackData) => void,
        options: { sources: string }
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
