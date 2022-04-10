// 'use strict';

// import {Msg} from './ASM_js-functions.js';
// import * as asm from './ASM_js-functions.js';

class Button {
    constructor(param) {
        this.text = param.text;
        this.iconUrl = param.iconUrl;
    }

    addButton() {
        console.log('add button');
    }
}


const button = new Button({
    text: 'clik me',
    iconUrl: './assets/svg/image-24.svg'
});
