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
let PETS_ARRAY_TAB = [];
let PETS_ARRAY_MOB = [];
let PETS_OBJ = [];
let PETS_OBJ_TAB = [];
let PETS_OBJ_MOB = [];

async function getDataFromServer(url) {

    const res = await fetch(url);
    const fetchDate = await res.json();
    await fetchDate.forEach(item => PETS_DATA.push(item));
    // Msg('fetchDatem', fetchDate);
    PETS_CARD = generateCards(PETS_DATA);
    PETS_ARRAY = generatePetsArray(6, 8);
    PETS_ARRAY_TAB = generatePetsArray(8, 6);
    PETS_ARRAY_MOB = generatePetsArray(16, 3);

    for (const i of PETS_ARRAY) {
        PETS_OBJ.push(PETS_DATA[i]);
    }
    for (const i of PETS_ARRAY_TAB) {
        PETS_OBJ_TAB.push(PETS_DATA[i]);
    }
    for (const i of PETS_ARRAY_MOB) {
        PETS_OBJ_MOB.push(PETS_DATA[i]);
    }
    // Msg(PETS_OBJ);
    generatePagination();
    detectDevice();
}


getDataFromServer(dataUrl);

function generateCards (data) {
    const cards = {};
    for (let i = 0; i < 8; i++) {
        cards[data[i].name] = data[i];
    }
    return cards;
}

function generatePetsArray(pagesCount, cardsCount) {

    const petsArray = [];

    let prevArr = [];
    for (let i = 0; i < pagesCount; i++) {
        const curNum = new Set();
        while (curNum.size < cardsCount) {
            const randomNum = getRandomNumber(0, 7);
            // if (curNum.size >= 2 || (randomNum !== prevArr[6] && randomNum !== prevArr[7])) {
                curNum.add(randomNum);
            // }
        }
        // Msg(curNum)
        petsArray.push(...curNum);
        prevArr = [...curNum];
    }

    // Msg(petsArray);
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

    blackout.addEventListener('mouseover', () => { buttonClose.classList.add('hovered')})
    blackout.addEventListener('mouseleave ', () => { buttonClose.classList.remove('hovered')})
    blackout.addEventListener('mouseout', () => { buttonClose.classList.remove('hovered')})
    popup.addEventListener('mouseover', () => { buttonClose.classList.remove('hovered')})
    setTimeout(() => {
        buttonClose.classList.remove('hovered')
    }, 0);




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






// >----------------------------------------------------------------<
// >                          PAGINATION                            <
// >----------------------------------------------------------------<


const paginFirst    = document.querySelector('.button__first');
const paginPrevious = document.querySelector('.button__previous');
const paginNext     = document.querySelector('.button__next');
const paginLast     = document.querySelector('.button__last');

const paginNumberLabel  = document.querySelector('.button__number .label');


let CURRENT_PAGE = 1;

// ^------------------------ Go First ------------------------

function goFirst() {

    // Msg('goFirst');
    CURRENT_PAGE = 1;
    paginNumberLabel.innerText = CURRENT_PAGE;
    paginFirst.classList.add('disabled');
    paginPrevious.classList.add('disabled');
    paginNext.classList.remove('disabled');
    paginLast.classList.remove('disabled');
    generatePagination();
}
paginFirst.addEventListener('click', goFirst);



// ^------------------------ Go Previous ------------------------

function goPrevious() {
    // Msg('goPrevious');

    CURRENT_PAGE--;
    if (CURRENT_PAGE <= 1) {
        paginFirst.classList.add('disabled');
        paginPrevious.classList.add('disabled');
    } else {
        paginNext.classList.remove('disabled');
        paginLast.classList.remove('disabled');
    }
    paginNumberLabel.innerText = CURRENT_PAGE;
    generatePagination();
}

paginPrevious.addEventListener('click', goPrevious);



// ^------------------------ Go Next ------------------------

function goNext() {
    // Msg('goNext');
    CURRENT_PAGE++;
    if (CURRENT_PAGE >= PAGES_PAGIN_COUNT) {
        paginNext.classList.add('disabled');
        paginLast.classList.add('disabled');
    } else {
        paginFirst.classList.remove('disabled');
        paginPrevious.classList.remove('disabled');
    }
    paginNumberLabel.innerText = CURRENT_PAGE;
    generatePagination();
}

paginNext.addEventListener('click', goNext);



// ^------------------------ Go Last ------------------------

function goLast() {
    // Msg('goLast');
    CURRENT_PAGE = PAGES_PAGIN_COUNT;
    paginNumberLabel.innerText = CURRENT_PAGE;
    paginNext.classList.add('disabled');
    paginLast.classList.add('disabled');
    paginFirst.classList.remove('disabled');
    paginPrevious.classList.remove('disabled');
    generatePagination();
}

paginLast.addEventListener('click', goLast);


// >----------------------------------------------------------------<
// >                                                              <
// >----------------------------------------------------------------<

let PAGES_PAGIN_COUNT = 0;

function generatePagination() {


    const windowSize = window.innerWidth;
    let currentPetsArray = [];
    // Msg(windowSize + 'px')
    let cardsOnPage = 0;
    if (windowSize <= 767) {
        // Msg('mob');
        cardsOnPage = 3;
        PAGES_PAGIN_COUNT = PETS_ARRAY.length / cardsOnPage;
        // currentPetsArray = [...PETS_ARRAY_MOB];
        currentPetsArray = [...PETS_OBJ_MOB];
    } else if (windowSize <= 1279) {
        // Msg('tab');
        cardsOnPage = 6;
        PAGES_PAGIN_COUNT = PETS_ARRAY.length / cardsOnPage;
        // currentPetsArray = [...PETS_ARRAY_TAB];
        currentPetsArray = [...PETS_OBJ_TAB];
    } else {
        // Msg('pc');
        cardsOnPage = 8;
        PAGES_PAGIN_COUNT = PETS_ARRAY.length / cardsOnPage;
        // currentPetsArray = [...PETS_ARRAY];
        currentPetsArray = [...PETS_OBJ];
    }



    const petsLayout = document.querySelectorAll('.pets__layout .pets__card');
    let pageCards = 0;
    for (const card of petsLayout) {
        pageCards++;
        card.style.display = 'flex';
        if (pageCards > cardsOnPage) {
            // Msg(pageCards, cardsOnPage);
            card.remove();
        }
        // Msg(window.getComputedStyle(card).display);
        // if (window.getComputedStyle(card).display === 'none') {
        // }
        // card.style.display = 'flex';
        // const gotCard = ((CURRENT_PAGE * cardsOnPage) - cardsOnPage + pageCards - 1);
        const gotCard = currentPetsArray[((CURRENT_PAGE * cardsOnPage) - cardsOnPage + pageCards - 1)];
        // Msg(gotCard);
        const generatedCard = generateCard(gotCard);
        // Msg(generatedCard.innerHTML);
        card.innerHTML = generatedCard.innerHTML;
        generatedCard.remove();
    }


    // generateCard(pets__layout, 1);

    // Msg('PAGES_PAGIN_COUNT:', PAGES_PAGIN_COUNT);
}

// window.addEventListener('load', generatePagination);




function detectDevice() {
    const windowSize = window.innerWidth;
    if (windowSize <= 767) {
        Msg('Mobile: ' + windowSize + 'px');
    } else if (windowSize <= 1279) {
        Msg('Tablet: ' + windowSize + 'px');
    } else {
        Msg('PC: ' + windowSize + 'px');
    }
}
// window.addEventListener('load', detectDevice);






// const desktop_Device    = window.matchMedia('(min-width: 1280px)');
const tablet_Device     = window.matchMedia('(max-width: 1279px)');
const mobile_Device     = window.matchMedia('(max-width: 767px)');


// desktop_Device.addListener( () => { generatePagination('desktop'); });
// tablet_Device.addListener( (event) => { generatePagination(event, 'tablet'); });
// mobile_Device.addListener( (event) => { generatePagination(event, 'mobile'); });
tablet_Device.addListener( () => { location.reload(); });
mobile_Device.addListener( () => { location.reload(); });



// >----------------------------------------------------------------<
// >                         GENERATE CARD                          <
// >----------------------------------------------------------------<

function generateCard(cardData) {
    const parent = document.querySelector('.pets__layout');
    // const cardData = PETS_DATA[id];
    const card = createHTMLElemPrep(parent, 'div', ['card', 'pets__card']);
    card.id = cardData.id;
    card.style.display = 'none';
    const cardImg = createHTMLElem(card, 'img', ['card__image']);
    cardImg.src = cardData.img;
    cardImg.alt = cardData.name;
    const cardHeading = createHTMLElem(card, 'h4', ['h4'], cardData.name);
    const cardLink = createHTMLElem(card, 'a', ['pets__button', 'button', 'button__outline', 'button__big']);
    const cardLinkLabel = createHTMLElem(cardLink, 'span', ['label'], 'Learn more');
    return card;
}
