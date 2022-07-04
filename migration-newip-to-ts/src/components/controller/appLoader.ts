import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '2e5debdad61a4b9cb982ed04656c99f7', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
