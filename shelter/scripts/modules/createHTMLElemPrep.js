'use strict';






// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function createHTMLElemPrep(parent, elementType, classNames = '', text = '') { // create element
    const elName = document.createElement(elementType);
    elName.classList.add(...classNames);
    elName.innerText = text;
    parent.prepend(elName);

    return elName;
}






// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export {
    createHTMLElemPrep,
};
