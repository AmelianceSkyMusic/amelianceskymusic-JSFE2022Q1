import AppController from '../controller/controller';
import { DrawNewsData, DrawSourcesData } from '../types/interface';
import { AppView } from '../view/appView';
import { AppClass } from '../types/class';

class App implements AppClass {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector('.sources') as HTMLDivElement).addEventListener('click', (e): void =>
            this.controller.getNews(e, (data: DrawNewsData): void => this.view.drawNews(data))
        );
        this.controller.getSources((data: DrawSourcesData): void => this.view.drawSources(data));
    }
}

export default App;
