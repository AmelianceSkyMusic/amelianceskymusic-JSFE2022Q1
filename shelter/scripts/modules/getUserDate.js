'use strict';

import {addTimeForwardZero} from './addTimeForwardZero.js';







// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function getUserDate(date = new Date(), daysType = 'English') {

    if (typeof date === 'number') date = new Date(date);



    let days = [];

    if (daysType === 'Eng') {

        days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

    } else if (daysType === 'ENG') {

        days = [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`];

    } else if (daysType === 'Ukraine') {

        days = [`Наділя`, `Понеділок`, `Вівторок`, `Середа`, `Четвер`, `П'ятниця`, `Субота`];

    } else if (daysType === 'Ua') {

        days = [`Нд`, `Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`];

    } else if (daysType === 'UA') {

        days = [`НД`, `ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`];

    } else {

        days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    }



    let YYYY = date.getFullYear().toString();
    let MM = addTimeForwardZero(date.getMonth()+1).toString();
    let DD = addTimeForwardZero(date.getDate()).toString();

    let dd = days[date.getDay()].toString();

    let hhUTC = addTimeForwardZero(date.getUTCHours()).toString();

    let hh = addTimeForwardZero(date.getHours()).toString();
    let mm = addTimeForwardZero(date.getMinutes()).toString();
    let ss = addTimeForwardZero(date.getSeconds()).toString();
    let mls = addTimeForwardZero(date.getMilliseconds()).toString();

    return {
        fullDate: `${YYYY}.${MM}.${DD} ${hh}:${mm}:${ss} (${dd})`,
        hhmmss: `${hh}:${mm}:${ss}`,
        hhmm: `${hh}:${mm}`,

        fullDateUTC: `${YYYY}.${MM}.${DD} ${hhUTC}:${mm}:${ss} (${dd})`,
        hhmmssUTC: `${hhUTC}:${mm}:${ss}`,
        hhmmUTC: `${hhUTC}:${mm}`,

        YYYYMMDD: `${YYYY}.${MM}.${DD}`,
        DDdd: `${DD} ${dd}`,

        YYYY,
        MM,
        DD,
        hhUTC,
        hh,
        mm,
        ss,
        mls,
        dd,
    };
};








// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export {
    getUserDate,
};
