'use strict';

const Msg = (...args) => { // Msg(...args)
    console.log(...args);
};

const MsgG = (...args) => { // MsgG(header, ...args)
    let lastMsgPosition = args.length-1;
    console.group(args[0]);

    for (let i = 1; i <= lastMsgPosition; i++) {
        console.log(args[i]);
    }

    console.groupEnd();
};

const MsgGV = (...args) => { // MsgGV(header, ...args)
    if ((args.length-1)%2 === 1) {
        let lastMsgPosition = args.length-1;
        console.group(args[0]);

        for (let i = 1; i < lastMsgPosition; i+=2) {
            console.log(`${args[i]}: ${args[i+1]}`);
        }

        console.groupEnd();
    }

};

const MsgV = (...args) => { // MsgV(...args)
    let lastMsgPosition = args.length-1;
    if ((args.length-1)%2 === 0) {
        for (let i = 0; i < lastMsgPosition; i+=2) {
            console.log(`${args[i]}: ${args[i+1]}`);
        }
    }

};


//
const getHiddenCard = (cardNumber, countStarsBeforeLastNumbers = 4) => {
    return '****'.slice(0, countStarsBeforeLastNumbers) + cardNumber.toString().slice(12, 16);
};

//
const isEven = (number) => number % 2 === 0;

//
const isFirstLetterInUpperCase = (string) => {
    const firstLetter = string[0];
    return firstLetter.toUpperCase() === firstLetter;
};

//
const  reverseStr = (str) => {
    let i = str.length-1;
    let newString = '';
    while (i >= 0 ) {
      newString = `${newString}${str[i]}`;
      i = i - 1;
    }
    return newString;
};

//
const createArrayWithNums = (min, max) => {

    let resultArray = [];

    for (let i = 0; i < (max-min)+1; i++) {
        resultArray[i] = min + i;

    }
    return resultArray;
};

//
const randomizeArray = (array) => {
    let randomArray = [];
    while (array.length > 0) {
        const random = Math.trunc((Math.random()*array.length));
        randomArray = [...randomArray, ...array.splice(random, 1)];
    }
    return randomArray;
};

//
function rgbToHex( ){ // r, g, b
    let result = Object.values(arguments).map((key) => {
        key = '0' + (key > 255 ? 255 : key < 0 ? 0 : key).toString(16);
        return key.substring(key.length - 2);
    });

    return result.join('').toUpperCase();
}

//
// const getRandomNumber = (min=0, max=9) => {
//     if (min >= max) return undefined;
//     const randomNumber = Math.trunc(Math.random()*(max-min+1)) + min;
//     return randomNumber;
// };

export {
    Msg,
    MsgG,
    MsgGV,
    MsgV,
    getHiddenCard,
    isEven,
    isFirstLetterInUpperCase,
    reverseStr,
    createArrayWithNums,
    randomizeArray,
    rgbToHex,
};
