import AppController from '../controller/controller';
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
        this.controller.addActions();
    }
}

export default App;
