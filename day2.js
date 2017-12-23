"use strict";

let fs = require("fs");
let readline = require("readline");
let _ = require("lodash");

let rd = readline.createInterface({
    input: fs.createReadStream("inputDay2.txt"),
});

let sum1 = 0;
let sum2 = 0;

function check(arr) {
    for (let ii = 0; ii < arr.length - 2; ii++) {
        if (arr[arr.length - 1] % arr[ii] === 0) {
            return arr[arr.length - 1] / arr[ii];
        }
    }
    return null;
}

rd.on('line', function (line) {
    let arr = line.replace(/\s/g, " ").split(" ");
    let sorted = _.map(arr, function (e) {
        return parseInt(e, 10);
    }).sort(function compareNumbers(a, b) {
        return a - b;
    });
    let max = sorted[sorted.length - 1];
    let min = sorted[0];
    sum1 += max - min;
    let result = check(sorted);
    while (!result) {
        sorted.pop();
        result = check(sorted);
    }
    sum2 += result;
});

setTimeout(function () {
    console.log(sum1);
    console.log(sum2);
}, 3);