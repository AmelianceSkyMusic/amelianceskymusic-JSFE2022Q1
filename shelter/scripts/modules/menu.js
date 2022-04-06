'use strict';
import {createHTMLElem} from './createHTMLElem.js';

const menu = {};






// >----------------------------------------------------------------<
// >                          FUNCTIONS                             <
// >----------------------------------------------------------------<

menu.list = {};

// ^------------------------ List Menu ------------------------

// menu.list.create(<Menu title>, <list items>, <[actions for item]>, <button element>, <[actions for button]>)

function listCreate(title, list = '', itemActions = [], button = '', buttomActions = []) {

    // *----- remove menu -----
    function removeMenu(timeOut) {
        setTimeout(() => {
            menu.remove(); // remove menu instanse
        }, timeOut);
    }

    // *----- button action -----
    const buttonMenuAction = (menu, buttomActions) => {

        const doAction = (event) => {
            menu.classList.remove('show'); // hide menu with animation

            // hideBlackout(); // hide blackout with aniamtion
            for (const action of buttomActions) {
                action(event);
            }
            removeMenu(300);
            button.removeEventListener('click', doAction);
        };

        button.addEventListener('click', doAction);

    };


    // *----- menu items action -----
    const menuAction = (menuItem, menu, itemActions) => {

        const doAction = (event) => {
           menu.classList.remove('show'); // hide menu with animation

            // hideBlackout(); // hide blackout with aniamtion
            for (const action of itemActions) {
                action(event);
            }
            removeMenu(300);
            // menuItem.removeEventListener('click', doAction);
            // button.removeEventListener('click', doAction);
        };

        menuItem.addEventListener('click', doAction, true);

    };


    // *----- create elements -----

    const zeroBlock = document.querySelector('.zero-block'); // get zero block

    const menu = createHTMLElem(zeroBlock, 'div', ['menu-list']); // create menu block

    const menuContainer = createHTMLElem(menu, 'div', ['menu-list__container']); // create title + items block

    const menuTitle = createHTMLElem(menuContainer, 'h3', ['h3', 'menu-list__title'], title); // add title

    const menuItemsContainer = createHTMLElem(menuContainer, 'div', ['menu-list__items-container']); // create items block


    // *----- add menu items -----
    for (const item of list) {
        const menuItem = createHTMLElem(menuItemsContainer, 'p1', ['p1', 'menu-list__item'], item); // create menu item
        menuAction(menuItem, menu, itemActions); // add action on menu item
        // menuItem.addEventListener('click', action);
    }


    if (button !== '') {
        // const menuButton = createHTMLElem(menu, 'button', ['button', 'menu__button'], button);
        buttonMenuAction(menu, buttomActions); // add action for specital button
    }

    // showBlackout();


    // *----- show menu -----
    setTimeout(() => {
        menu.classList.add('show');
    }, 0);
}






// >----------------------------------------------------------------<
// >                             COLECT                             <
// >----------------------------------------------------------------<

menu.list.create = listCreate;






// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export {
    menu
};
