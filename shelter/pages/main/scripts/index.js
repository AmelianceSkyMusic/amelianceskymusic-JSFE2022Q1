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



const navigationLink = document.querySelectorAll('.navigation .link');

const closeBurgerMenu = () => {
    navigation.classList.remove('show');
    headerLogo.classList.remove('show');
    iconMenu.classList.remove('show');
    // blackout.classList.toggle('show'); // TODO: add blackout
    bodyСontainer.classList.remove('scroll-lock');
    const blackout = document.querySelector('.blackout');

    blackout.classList.remove('show');
    setTimeout(() => {
        blackout.remove();
    }, 500);

};

for (const link of navigationLink) {
    link.addEventListener('click', closeBurgerMenu);
}





// >----------------------------------------------------------------<
// >                           GET DATA                             <
// >----------------------------------------------------------------<

const dataUrl = '../../data/pets.json';
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
// >                           SLIDER                               <
// >----------------------------------------------------------------<

const PETS_BACKWARD = document.querySelector('.pets__icon-button_left');
const PETS_FORWARD = document.querySelector('.pets__icon-button_right');
const PETS_CONTAINER = document.querySelector('.pets-cards__container');

const VISIBLE_CARDS = document.querySelectorAll('.pets__layout .visible');




// ^------------------------ Move Slider Backward ------------------------

function moveSliderBackward() {
    PETS_BACKWARD.removeEventListener('click', moveSliderBackward);

    PETS_CONTAINER.classList.add('move-left');

    const visibleCards = document.querySelectorAll('.pets__layout .visible');
    const leftCards = document.querySelectorAll('.pets__layout .left');
    const rightCards = document.querySelectorAll('.pets__layout .right');


    const visibleCardsIds = [];

    for (const card of leftCards) { // add left cards id for generate newunique cards
        visibleCardsIds.push(+card.id);
    }


    const curNum = new Set();
    while (curNum.size < 8) {
        const randomNum = getRandomNumber(0, 7);
        curNum.add(randomNum);
    }

    const validPetsId = removeKeysFromArray([...curNum], visibleCardsIds);


    Msg(validPetsId, visibleCardsIds);

    PETS_CONTAINER.addEventListener('animationend', () => {
        PETS_CONTAINER.classList.remove('move-left');
        PETS_BACKWARD.addEventListener('click', moveSliderBackward);

        for (let i = 0; i < 3; i++) {
            rightCards[i].innerHTML = visibleCards[i].innerHTML;
            rightCards[i].id = visibleCards[i].id;
        }

        for (let i = 0; i < 3; i++) {
            visibleCards[i].innerHTML = leftCards[i].innerHTML;
            visibleCards[i].id = leftCards[i].id;
        }

        for (let i = 0; i < 3; i++) {
            const newCard = generateCard(PETS_CONTAINER, validPetsId[i]);
            leftCards[i].innerHTML = newCard.innerHTML;
            leftCards[i].id = newCard.id;
            newCard.remove();
        }
    });
}

PETS_BACKWARD.addEventListener('click', moveSliderBackward);




// ^------------------------ Move Slider Forward ------------------------

function moveSliderForward() {

    PETS_FORWARD.removeEventListener('click', moveSliderForward);

    PETS_CONTAINER.classList.add('move-right');

    const visibleCards = document.querySelectorAll('.pets__layout .visible');
    const rightCards = document.querySelectorAll('.pets__layout .right');
    const leftCards = document.querySelectorAll('.pets__layout .left');


    const visibleCardsIds = [];

    for (const card of rightCards) { // add right cards id for generate newunique cards
        visibleCardsIds.push(+card.id);
    }


    const curNum = new Set();
    while (curNum.size < 8) {
        const randomNum = getRandomNumber(0, 7);
        curNum.add(randomNum);
    }

    const validPetsId = removeKeysFromArray([...curNum], visibleCardsIds);

    Msg(validPetsId, visibleCardsIds);

    PETS_CONTAINER.addEventListener('animationend', () => {
        PETS_CONTAINER.classList.remove('move-right');
        PETS_FORWARD.addEventListener('click', moveSliderForward);

        for (let i = 0; i < 3; i++) {
            leftCards[i].innerHTML = visibleCards[i].innerHTML;
            leftCards[i].id = visibleCards[i].id;
        }

        for (let i = 0; i < 3; i++) {
            visibleCards[i].innerHTML = rightCards[i].innerHTML;
            visibleCards[i].id = rightCards[i].id;
        }


        for (let i = 0; i < 3; i++) {
            const newCard = generateCard(PETS_CONTAINER, validPetsId[i]);
            rightCards[i].innerHTML = newCard.innerHTML;
            rightCards[i].id = newCard.id;
            newCard.remove();
        }
    });
}

PETS_FORWARD.addEventListener('click', moveSliderForward);




// ^------------------------ Generate Cards ------------------------

function generateCard(parent, id) {
    const cardData = PETS_DATA[id];
    const card = createHTMLElemPrep(parent, 'div', ['card', 'pets__card']);
    card.id = id;
    card.style.display = 'none';
    const cardImg = createHTMLElem(card, 'img', ['card__image']);
    cardImg.src = cardData.img;
    cardImg.alt = cardData.name;
    const cardHeading = createHTMLElem(card, 'h4', ['h4'], cardData.name);
    const cardLink = createHTMLElem(card, 'a', ['pets__button', 'button', 'button__outline', 'button__big']);
    const cardLinkLabel = createHTMLElem(cardLink, 'span', ['label'], 'Learn more');
    return card;
}

function generateLeftCard(parent, id) {
    const cardData = PETS_DATA[id];
    const card = createHTMLElemPrep(parent, 'div', ['card', 'pets__card', 'left']);
    card.id = id;
    const cardImg = createHTMLElem(card, 'img', ['card__image']);
    cardImg.src = cardData.img;
    cardImg.alt = cardData.name;
    const cardHeading = createHTMLElem(card, 'h4', ['h4'], cardData.name);
    const cardLink = createHTMLElem(card, 'a', ['pets__button', 'button', 'button__outline', 'button__big']);
    const cardLinkLabel = createHTMLElem(cardLink, 'span', ['label'], 'Learn more');
    return card;
}

function generateRightCard(parent, id) {
    const cardData = PETS_DATA[id];
    const card = createHTMLElem(parent, 'div', ['card', 'pets__card', 'right']);
    card.id = id;
    const cardImg = createHTMLElem(card, 'img', ['card__image']);
    cardImg.src = cardData.img;
    cardImg.alt = cardData.name;
    const cardHeading = createHTMLElem(card, 'h4', ['h4'], cardData.name);
    const cardLink = createHTMLElem(card, 'a', ['pets__button', 'button', 'button__outline', 'button__big']);
    const cardLinkLabel = createHTMLElem(cardLink, 'span', ['label'], 'Learn more');
    return card;
}




// ^------------------------ Generate Cards ------------------------

function generateStartCards() {
    const visibleCardsIds = [];
    for (const card of VISIBLE_CARDS) {
        visibleCardsIds.push(+card.id);
    }

    let curNum = new Set();
    while (curNum.size < 8) {
        const randomNum = getRandomNumber(0, 7);
        curNum.add(randomNum);
    }

    const validLeftPetsId = removeKeysFromArray([...curNum], visibleCardsIds);

    for (let i = 0; i < 3; i++) {
        generateLeftCard(PETS_CONTAINER, validLeftPetsId[i]);
    }

    curNum = new Set();
    while (curNum.size < 8) {
        const randomNum = getRandomNumber(0, 7);
        curNum.add(randomNum);
    }

    const validRightPetsId = removeKeysFromArray([...curNum], visibleCardsIds);
    for (let i = 0 ; i < 3; i++) {
        generateRightCard(PETS_CONTAINER, validRightPetsId[i]);
    }

}

window.addEventListener('load', generateStartCards);




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

    const blackout = createHTMLElem(zeroBlock, 'div', ['blackout']);
    blackout.classList.add('show');



    const popup = createHTMLElem(zeroBlock, 'div', ['popup']);
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
        }, 500);
    };

    buttonClose.addEventListener('click', closePopup);
    blackout.addEventListener('click', closePopup);
    // card.id = id;
    // const cardImg = createHTMLElem(card, 'img', ['card__image']);
    // cardImg.src = cardData.img;
    // cardImg.alt = cardData.name;
    // const cardHeading = createHTMLElem(card, 'h4', ['h4'], cardData.name);
    // const cardLink = createHTMLElem(card, 'a', ['pets__button', 'button', 'button__outline', 'button__big']);
    // const cardLinkLabel = createHTMLElem(cardLink, 'span', ['label'], 'Learn more');
    // return card;
}
