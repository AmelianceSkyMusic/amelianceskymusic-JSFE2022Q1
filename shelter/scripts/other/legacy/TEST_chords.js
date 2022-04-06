'use strict';

import {msg as Msg, Button} from './modules/asm.js';
// import * as asm from 'ASM_js-unctions.js';
const main = document.querySelector('.main .container');

// button.parent = main;
// button.label = 'DOWN';
// button.style = ['outline', 'big'];
// button.classes = ['chorsd__down'];
// button.action = () => {console.log('minus');};
// const btnDown = button.create();
// //
// button.parent = main;
// button.label = 'UP';
// button.style = ['outline', 'big'];
// button.classes = ['chorsd__up'];
// button.action = () => {console.log('plus');};
// const btnUp = button.create();


// button.parent = main;
// button.label = 'DOWN';
// button.style = ['outline', 'big'];
// button.classes = ['chords__down'];
// button.action = () => { Msg('minus'); };
// const butttonDown = button.create();

const button = new Button({
    style: ['fill', 'big'],
});

const line = 'Dm-A7     F#7-Bm      A7      Dm';

const transposeChords = (line, changeTune) => {
    Msg(line);
    // const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    // const notes = [[ABCDEFG](b|#)?];
};

const downChords = () => {
    transposeChords(line, -1);
};

const upChords = () => {
    transposeChords(line, 1);
};

const buttonDown =  button.create(
    'DOWN',
    'chorsd__down',
    downChords,
    main
);

const buttonUp =  button.create(
    'UP',
    'chorsd__up',
    upChords,
    main
);
