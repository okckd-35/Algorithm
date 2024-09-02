const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let nk = input[0].split(' ');
let n = parseInt(nk[0]);
let k = parseInt(nk[1]);


let numbers = input[1].split(' ');
let sorted = [];
for (let i = 0; i < numbers.length; i++) {
    sorted.push(parseInt(numbers[i]));
}


sorted.sort((a, b) => a - b);


console.log(sorted[k - 1]);