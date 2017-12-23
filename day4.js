"use strict";

let fs = require("fs");
let readline = require("readline");
let _ = require("lodash");

let rd = readline.createInterface({
    input: fs.createReadStream("inputDay4.txt"),
});

let sum1 = 0;
let sum2 = 0;

rd.on('line', function (line) {
    let arr = line.replace(/\s/g, " ").split(" ");
    if (_.uniqWith(arr, _.isEqual).length === arr.length) {
        sum1++;
        let anagram = _.map(arr, function (e) {
            return e.toLowerCase().split('').sort().join('').trim();
        });
        if (_.uniqWith(anagram, _.isEqual).length === arr.length) {
            sum2++;
        }
    }
});

setTimeout(function () {
    console.log(sum1);
    console.log(sum2);
}, 3);