'use strict';

// import {name} from './name.js';







// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function removeKeysFromArray(array, keysToRemove) {
    return array.filter(item => {
        return !keysToRemove.includes(item);
    });
}






// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export {
    removeKeysFromArray,
};
