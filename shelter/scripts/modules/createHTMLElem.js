'use strict';






// >----------------------------------------------------------------<
// >                            FUNCTION                            <
// >----------------------------------------------------------------<

function createHTMLElem(parent, elementType, classNames = '', text = '') { // create element
    const elName = document.createElement(elementType);
    elName.classList.add(...classNames);
    elName.innerText = text;
    parent.append(elName);

    return elName;
}






// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export {
    createHTMLElem,
};
