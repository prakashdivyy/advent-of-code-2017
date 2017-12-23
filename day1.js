"use strict";

let fs = require("fs");
let readline = require("readline");

let rd = readline.createInterface({
    input: fs.createReadStream("inputDay1.txt"),
});

rd.on('line', function (line) {
    let str = line;
    let sum = 0;

    for (let a = 0; a < str.length; a++) {
        let pointer = a + 1;
        if (str.length === pointer) {
            pointer = 0;
        }
        if (str[a] === str[pointer]) {
            sum += parseInt(str[a], 10);
        }
    }

    console.log(sum);

    let str2 = str + str;

    sum = 0;
    let next = str.length / 2;

    for (let a = 0; a < str.length; a++) {
        let pointer = a + next;
        if (str[a] === str2[pointer]) {
            sum += parseInt(str[a], 10);
        }
    }

    console.log(sum);
});