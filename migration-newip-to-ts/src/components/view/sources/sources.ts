import { SourcesData } from '../../types/interface';
import { ISources } from '../../types/class';

class Sources implements ISources {
    draw(data: SourcesData[]): void {
        const suorseItems = document.querySelectorAll('.source__item') as NodeListOf<HTMLDivElement>;
        if (suorseItems) {
            for (const item of suorseItems) {
                if (item) item.remove();
            }
        }

        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;
