'use strict';






import {Button}                 from './Button.js';
import {Time}                   from './Time.js';

import {menu}                   from './menu.js';
import {popup}                  from './popup.js';
import {createHTMLElem}         from './createHTMLElem.js';
import {createHTMLElemPrep}     from './createHTMLElemPrep.js';
import {createHTMLElemAfter}    from './createHTMLElemAfter.js';
import {createHTMLElemBefore}   from './createHTMLElemBefore.js';
import {msg, msgG, msgGV, msgV} from './msg.js';
import {sortAB} from './sortAB.js';
import {addTimeForwardZero}     from './addTimeForwardZero.js';
import {getUserDate}            from './getUserDate.js';


// export const asm = {
//     popup,
// };

// asm.nov = 'let';






// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export {
    Button,
    Time,

    menu,
    popup,
    createHTMLElem,
    createHTMLElemPrep,
    createHTMLElemAfter,
    createHTMLElemBefore,
    msg, msgG, msgGV, msgV,
    sortAB,
    addTimeForwardZero,
    getUserDate,
};
