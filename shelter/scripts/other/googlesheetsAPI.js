'use strict';

import {msg as Msg} from './modules/asm.js';
// import * as asm from 'ASM_js-unctions.js';

// const sheetID = '1VLFuJzPUtRJ6yQUMJbw_QCmWwrd5xtu2wUJAj5qkR3A'; // Amelianve worship song list
const sheetID = '16wsDcFtQ7J1nYrlSkEB8KgLp_XpyCdwH-SIi0fuqapc'; // woody-songlist
const sheetTitle = 'Ameliance Worship API';
const sheetRange = '';
const url = 'https://docs.google.com/spreadsheets/d/' + sheetID + '/gviz/tq?tqx=out:json&sheet=' + sheetTitle + '&range=' + sheetRange;


async function getGoogleSheetsData(url) {

        const res = await fetch(url);
        const textData = await res.text();

        const dataJson = JSON.parse(textData.substr(47).slice(0, -2));

        // *----- Get data from bit table with auto headers detected -----
        function getTableWsLabels(data) {
            const dataObj = {};

            for (let i = 0; i < data.table.cols.length; i++) {
                let col = data.table.cols[i];
                let rowDate = [];

                for (let j = 0; j < data.table.rows.length; j++) {
                    let row = data.table.rows[j];
                    let value = '';
                    if (row.c[i]) {
                        if (row.c[i].v) {
                            value = row.c[i].v;
                        }
                    }
                    rowDate[j] = value;
                }
                dataObj[col.label] = rowDate;
            }
            return dataObj;
        }

        // *----- Get data from simpla table when first row is header -----
        function getTableOnlyRowsWithHeaders(data) {
            const dataObj = {};
            const table = data.table;
            const maxLengthOfColumn = table.rows[0].c.length; // TODO: get max
            for (let i = 0; i < maxLengthOfColumn; i++) {
                let colDate = [];
                for (let j = 1; j < table.rows.length; j++) {
                    if (table.rows[j].c[i]) {
                        colDate[j-1] = table.rows[j].c[i].v ?? '';
                    } else {
                        colDate[j] = '';
                    }
                }
                dataObj[table.rows[0].c[i].v] = colDate;
            }

            return dataObj;
        }

        // *----- Get data from simpla table with no headers . return arrays-----
        function getTableOnlyRows(data) {
            const dataArr = [];
            const table = data.table;
            const maxLengthOfColumn = table.rows[0].c.length; // TODO: get max
            for (let i = 0; i < maxLengthOfColumn; i++) {
                let colDate = [];
                for (let j = 0; j < table.rows.length; j++) {
                    if (table.rows[j].c[i]) {
                        colDate[j] = table.rows[j].c[i].v ?? '';
                    } else {
                        colDate[j] = '';
                    }
                }
                dataArr[i] = colDate;
            }

            return dataArr;
        }

        const data = getTableOnlyRows(dataJson);

        localStorage.setItem('songList', JSON.stringify(data)); // write
    //     let receivedSettings = JSON.parse(localStorage.getItem('settings')); // read
    //     GS = {...GS, ...receivedSettings};
}

getGoogleSheetsData(url);

// function getDataFrom(url) {
//     getGoogleSheetsData(url);
// }

// getDataFrom(url);













// fetch(url)
// .then(res => res.text())
// .then(rep => {
//     // let data = JSON.parse()
//     console.log(rep);
// });
// const showMovieData = (data) => {
//         Msg(data);
// };

// Msg('hello');
// window.addEventListener('load', getMovieData(url));
// window.onload = function() {
//     let getJSON = function(url, callback) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.responseType = 'json';
//         xhr.onload = function () {
//             let status = xhr.status;
//             if (status === 200) {
//                 callback(null, xhr.response);
//             } else {
//                 callback(status, xhr.response);
//             }
//         };
//         xhr.send();
//     };

//     getJSON('https://spreadsheets.google.com/feeds/list/1sn6RBL7XL34iM5CmXBTZoz1kBTGDYK2KnWOugQK9mY8/od6/public/values?alt=json',
//     function(err, data) {
//         console.log(data);

//     });
// };
