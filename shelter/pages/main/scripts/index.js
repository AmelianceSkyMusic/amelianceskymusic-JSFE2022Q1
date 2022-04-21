'use strict';

import {msg as Msg} from '../../../scripts/modules/asm.js';
// import * as asm from 'ASM_js-unctions.js';


const iconMenu = document.querySelector('.icon-random_navigation-menu');
const navigation = document.querySelector('.navigation');
const bodyСontainer = document.querySelector('.body-container');
const blackout = document.querySelector('.blackout');
const headerLogo = document.querySelector('.header__logo');

const toogleBUrgerMenu = () => {
    navigation.classList.toggle('show');
    headerLogo.classList.toggle('show');
    iconMenu.classList.toggle('show');
    blackout.classList.toggle('show');
    bodyСontainer.classList.toggle('scroll-lock');
};

iconMenu.addEventListener('click', toogleBUrgerMenu);
navigation.addEventListener('click', toogleBUrgerMenu);
blackout.addEventListener('click', toogleBUrgerMenu);
