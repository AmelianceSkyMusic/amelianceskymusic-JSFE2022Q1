'use strict';

import {createHTMLElem} from './createHTMLElem.js';






// >----------------------------------------------------------------<
// >                              INIT                              <
// >----------------------------------------------------------------<

const popup = {};






// >----------------------------------------------------------------<
// >                          FUNCTIONS                             <
// >----------------------------------------------------------------<

function create(title, text, button = '', action = () => {}) {

    function closePopup(element, popup, action) {
        element.addEventListener('click', () => {
            popup.classList.remove('show'); // hide popup with animation

            // hideBlackout(); // hide blackout with aniamtion
            action();
            setTimeout(() => {
                popup.remove(); // remove popup
            }, 300);
        });
    }

    const zeroBlock = document.querySelector('.zero-block');

    const popup = createHTMLElem(zeroBlock, 'div', ['popup']);

    const popupTitle = createHTMLElem(popup, 'h3', ['h3', 'popup__title'], title);

    const popuptext = createHTMLElem(popup, 'p1', ['p1', 'popup__text'], text);

    if (button !== '') {
        const popupButton = createHTMLElem(popup, 'button', ['button', 'popup__button'], button);
        closePopup(popupButton, popup, action);
    }

    // showBlackout();
    setTimeout(() => {
        popup.classList.add('show');
    }, 0);


}






// >----------------------------------------------------------------<
// >                             COLECT                             <
// >----------------------------------------------------------------<

popup.create = create;






// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export {
    popup
};
