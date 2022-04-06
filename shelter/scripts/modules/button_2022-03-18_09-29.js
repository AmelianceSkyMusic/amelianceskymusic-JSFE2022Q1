'use strict';

import {createHTMLElem} from './createHTMLElem.js';






// >----------------------------------------------------------------<
// >                              INIT                              <
// >----------------------------------------------------------------<

const button = {

    // create(parent, label, buttonStyle, classes, action) {

    //     const parent   = this.parent;
    //     const label    = this.label;
    //     const style    = this.style;
    //     const classes  = this.classes;
    //     const action   = this.action;

    //     let buttonClasses = ['button'];

    //     if (buttonStyle.includes('big')) { buttonClasses.push('button__big'); }
    //     else if (buttonStyle.includes('medium')) { buttonClasses.push('button__medium'); }
    //     else if (buttonStyle.includes('small')) { buttonClasses.push('button__small'); }

    //     if (buttonStyle.includes('fill')) { buttonClasses.push('button__fill'); }
    //     else if (buttonStyle.includes('outline')) { buttonClasses.push('button__outline'); }
    //     else if (buttonStyle.includes('text')) { buttonClasses.push('button__text'); }
    //     else if (buttonStyle.includes('icon')) { buttonClasses.push('button__icon'); }

    //     for (let classItem of classes) {
    //         buttonClasses.push(classItem);
    //     }

    //     const button = createHTMLElem(parent, 'button', buttonClasses);

    //     if (buttonStyle.includes('icon') && (label === '' || label.length !== 1)) {
    //         const icon = createHTMLElem(button, 'div', ['icon']);
    //     }

    //     if (buttonStyle.includes('left') && !buttonStyle.includes('icon')) {
    //         const iconLeft = createHTMLElem(button, 'div', ['icon', 'icon__left']);
    //     }

    //     if (!buttonStyle.includes('icon') || label.length === 1) {
    //         const text = createHTMLElem(button, 'span', ['label'], label);
    //     }


    //     if (buttonStyle.includes('right') && !buttonStyle.includes('icon')) {
    //         const iconRight = createHTMLElem(button, 'div', ['icon', 'icon__right']);
    //     }

    //     button.addEventListener('click' , action);

    //     return button;
    // }
};

button.create = function create() {

        const parent        = this.parent;
        const label         = this.label;
        const buttonStyle   = this.style;
        const classes       = this.classes;
        const action        = this.action;

        let buttonClasses = ['button'];

        if (buttonStyle.includes('big')) { buttonClasses.push('button__big'); }
        else if (buttonStyle.includes('medium')) { buttonClasses.push('button__medium'); }
        else if (buttonStyle.includes('small')) { buttonClasses.push('button__small'); }

        if (buttonStyle.includes('fill')) { buttonClasses.push('button__fill'); }
        else if (buttonStyle.includes('outline')) { buttonClasses.push('button__outline'); }
        else if (buttonStyle.includes('text')) { buttonClasses.push('button__text'); }
        else if (buttonStyle.includes('icon')) { buttonClasses.push('button__icon'); }

        for (let classItem of classes) {
            buttonClasses.push(classItem);
        }

        const button = createHTMLElem(parent, 'button', buttonClasses);

        if (buttonStyle.includes('icon') && (label === '' || label.length !== 1)) {
            const icon = createHTMLElem(button, 'div', ['icon']);
        }

        if (buttonStyle.includes('left') && !buttonStyle.includes('icon')) {
            const iconLeft = createHTMLElem(button, 'div', ['icon', 'icon__left']);
        }

        if (!buttonStyle.includes('icon') || label.length === 1) {
            const text = createHTMLElem(button, 'span', ['label'], label);
        }


        if (buttonStyle.includes('right') && !buttonStyle.includes('icon')) {
            const iconRight = createHTMLElem(button, 'div', ['icon', 'icon__right']);
        }

        button.addEventListener('click' , action);

        return button;
};

button.parent   = document.querySelector('body');
button.label    = 'BUTTON';
button.style    = ['fill', 'big'];
button.classes  = ['click'];
button.action   = () => { console.log(`click ${button.label}`); };



// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

// function create() {
//     const zeroBlock = document.querySelector('.zero-block');
//     const label = this.label;
//     const popupTitle = createHTMLElem(zeroBlock, 'button', ['button', 'button__fill', 'button__big'], label);
// }






// >----------------------------------------------------------------<
// >                             COLECT                             <
// >----------------------------------------------------------------<

// button.create = create;






// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export {
    button,
};
