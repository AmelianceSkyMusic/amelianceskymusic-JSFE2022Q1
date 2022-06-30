import AppController from '../controller/controller';
import { DrawNewsData, DrawSourcesData } from '../types/interface';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: DrawNewsData) => this.view.drawNews(data))
        );
        this.controller.getSources((data: DrawSourcesData) => this.view.drawSources(data));
    }
}

export default App;
