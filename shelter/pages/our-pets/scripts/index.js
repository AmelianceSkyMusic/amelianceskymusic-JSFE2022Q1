'use strict';

import {
    msg as Msg,
    getRandomNumber,
    createHTMLElem,
    createHTMLElemPrep,
    removeKeysFromArray,
} from '../../../scripts/modules/asm.js';
// import * as asm from 'ASM_js-unctions.js';




// >----------------------------------------------------------------<
// >                          BURRGER MENU                          <
// >----------------------------------------------------------------<

const iconMenu = document.querySelector('.icon-random_navigation-menu');
const navigation = document.querySelector('.navigation');
const bodyСontainer = document.querySelector('.body-container');
// const blackout = document.querySelector('.blackout'); // TODO: add blackout
const headerLogo = document.querySelector('.header__logo');

const toogleBurgerMenu = () => {
    navigation.classList.toggle('show');
    headerLogo.classList.toggle('show');
    iconMenu.classList.toggle('show');
    // blackout.classList.toggle('show'); // TODO: add blackout
    bodyСontainer.classList.toggle('scroll-lock');
    const blackout = document.querySelector('.blackout');
    if (blackout) {
        blackout.classList.remove('show');
        setTimeout(() => {
            blackout.remove();
        }, 500);
    } else {
        const zeroBlock = document.querySelector('.zero-block');
        const blackout = createHTMLElem(zeroBlock, 'div', ['blackout']);
        blackout.classList.add('show');
        blackout.addEventListener('click', toogleBurgerMenu);
    }

};


iconMenu.addEventListener('click', toogleBurgerMenu);
navigation.addEventListener('click', toogleBurgerMenu);




// >----------------------------------------------------------------<
// >                           GET DATA                             <
// >----------------------------------------------------------------<

const dataUrl = '/shelter/data/pets.json';
// const dataUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/markups/level-2/shelter/pets.json';

let PETS_DATA = [];
let PETS_CARD = [];
let PETS_ARRAY = [];

async function getDataFromServer(url) {

    const res = await fetch(url);
    const fetchDate = await res.json();
    await fetchDate.forEach(item => PETS_DATA.push(item));
    // Msg('fetchDatem', fetchDate);
    PETS_CARD = generateCards(PETS_DATA);
    PETS_ARRAY = generatePetsArray(PETS_DATA);

}


getDataFromServer(dataUrl);

function generateCards (data) {
    const cards = {};
    for (let i = 0; i < 8; i++) {
        cards[data[i].name] = data[i];
    }
    return cards;
}

function generatePetsArray(data) {

    const petsArray = [];

    let prevArr = [];
    for (let i = 0; i < 6; i++) {
        const curNum = new Set();
        while (curNum.size < 8) {
            const randomNum = getRandomNumber(0, 7);

            if (curNum.size >= 2 || (randomNum !== prevArr[6] && randomNum !== prevArr[7])) {
                curNum.add(randomNum);
            }
        }
        petsArray.push(...curNum);
        prevArr = [...curNum];
    }
    return petsArray;
}




// >----------------------------------------------------------------<
// >                             POPUP                              <
// >----------------------------------------------------------------<

const petsCardsNode = document.querySelectorAll('.pets__card');

for (const card of petsCardsNode) {
    card.addEventListener('click', showInfo);
}


function showInfo(event) {
    const el = event.target;
    const currentCard = el.closest('.pets__card');
    const name = currentCard.querySelector('.h4').innerText;
    generatePopUp(name);
}

function generatePopUp(name) {
    const cardData = PETS_CARD[name]; // get data ftom global variable

    const zeroBlock = document.querySelector('.zero-block');
    zeroBlock.style.zIndex = '10000';

    const blackout = createHTMLElem(zeroBlock, 'div', ['blackout']);
        blackout.style.zIndex = '10000';
        blackout.classList.add('show');



    const popup = createHTMLElem(zeroBlock, 'div', ['popup']);
        popup.style.zIndex = '10000';
        const buttonClose = createHTMLElem(popup, 'div', ['popup__button-close', 'button', 'button__icon-outline', 'button__big']);
            const buttonCloseIcon = createHTMLElem(buttonClose, 'span', ['icon-random', 'icon-random_close']);

        const popupImgContainer = createHTMLElem(popup, 'div', ['popup__img-container']);
            const popupImg = createHTMLElem(popupImgContainer, 'img', ['popup__img']);
                popupImg.src = cardData.img;
                popupImg.alt = cardData.name;


        const popupInfo = createHTMLElem(popup, 'div', ['popup__info']);

            const popupHeading   = createHTMLElem(popupInfo, 'div', ['popup__heading']);
                const popuptitle        = createHTMLElem(popupHeading, 'h3', ['h3', 'popup__title'], `${cardData.name}`);
                const popupSubtitle     = createHTMLElem(popupHeading, 'h4', ['h4', 'popup__subtitle'], `${cardData.type} - ${cardData.breed}`);
            const popupDescription  = createHTMLElem(popupInfo, 'h5', ['h5', 'popup__description'], `${cardData.description}`);

            const characteristics   = createHTMLElem(popupInfo, 'ul', ['popup__characteristics', 'characteristics']);
                const itemAge             = createHTMLElem(characteristics, 'h5', ['h5', 'characteristics__item'], `<b>Age:</b> ${cardData.age}`);
                const itemInoculations    = createHTMLElem(characteristics, 'h5', ['h5', 'characteristics__item'], `<b>Inoculations:</b> ${cardData.inoculations.join(', ')}`);
                const itemDiseases        = createHTMLElem(characteristics, 'h5', ['h5', 'characteristics__item'], `<b>Diseases:</b> ${cardData.diseases.join(', ')}`);
                const itemParasites       = createHTMLElem(characteristics, 'h5', ['h5', 'characteristics__item'], `<b>Parasites:</b> ${cardData.parasites.join(', ')}`);

    popup.classList.add('show');




    const closePopup = () => {
        blackout.classList.remove('show');
        popup.classList.remove('show');
        setTimeout(() => {
            blackout.remove();
            popup.remove('show');
            zeroBlock.style.zIndex = '400';
        }, 500);
    };

    buttonClose.addEventListener('click', closePopup);
    blackout.addEventListener('click', closePopup);
}
