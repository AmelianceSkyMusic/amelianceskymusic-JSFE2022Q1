'use strict';

import {msg as Msg, button} from './modules/asm.js';
// import * as asm from 'ASM_js-unctions.js';
const main = document.querySelector('.main .container');

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
