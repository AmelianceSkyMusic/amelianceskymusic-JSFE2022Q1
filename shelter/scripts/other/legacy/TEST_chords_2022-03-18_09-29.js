'use strict';

import {msg as Msg, button} from './modules/asm.js';
// import * as asm from 'ASM_js-unctions.js';
const main = document.querySelector('.main .container');

// button.parent = 'UP';
// button.label = 'UP';
// button.style = 'UP';
// button.classes = 'UP';
// button.action = 'UP';

// const btnDown = button.create(main, '-', ['fill', 'big'], ['chorsd__down'], () => {console.log('minus');});
// button.label = 'DOWN';
// const btnUp = button.create(main, '+', ['fill', 'big'], ['chorsd__up'], () => {console.log('plus');});
button.parent = main;
button.label = 'DOWN';
button.style = ['outline', 'big'];
button.classes = ['chorsd__down'];
button.action = () => {console.log('minus');};
const btnDown = button.create();

button.parent = main;
button.label = 'UP';
button.style = ['outline', 'big'];
button.classes = ['chorsd__up'];
button.action = () => {console.log('plus');};
const btnUp = button.create();

// Msg(btnDown);
// Msg(btnUp);
// Msg(button);
