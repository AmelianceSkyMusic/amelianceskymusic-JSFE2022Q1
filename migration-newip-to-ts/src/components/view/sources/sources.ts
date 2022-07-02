import './sources.css';

import { SourcesData } from '../../types/interface';
import { SourcesClass } from '../../types/class';

class Sources implements SourcesClass {
    draw(data: SourcesData[]): void {
        const fragment = document.createDocumentFragment(); // ? as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        // ? QUESTION TO MENTOR: The cleaner way would be to not use .forEach. It's almost never needed if you're using TypeScript or a modern version of JavaScript
        data.forEach((item): void => {
            // console.log('forEach', item);
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
