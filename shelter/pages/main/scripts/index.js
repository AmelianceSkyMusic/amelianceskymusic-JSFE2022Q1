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




// >----------------------------------------------------------------<
// >                           GET DATA                             <
// >----------------------------------------------------------------<

const dataUrl = '/shelter/data/pets.json';
// const dataUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/markups/level-2/shelter/pets.json';

let petsData = [];
let petsCards = [];
let petsArray = [];

async function getDataFromServer(url) {

    const res = await fetch(url);
    const fetchDate = await res.json();
    await fetchDate.forEach(item => petsData.push(item));
    Msg('fetchDatem', fetchDate);
    petsCards = generateCards(petsData);
    petsArray = generatePetsArray(petsData);

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

    PETS_CONTAINER.addEventListener('animationend', () => {
        PETS_CONTAINER.classList.remove('move-left');
        PETS_BACKWARD.addEventListener('click', moveSliderBackward);


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

    PETS_CONTAINER.addEventListener('animationend', () => {
        PETS_CONTAINER.classList.remove('move-right');
        PETS_FORWARD.addEventListener('click', moveSliderForward);


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
    const cardData = petsData[id];
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
    const cardData = petsData[id];
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
    const cardData = petsData[id];
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
