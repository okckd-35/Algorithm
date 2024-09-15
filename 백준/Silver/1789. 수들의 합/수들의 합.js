const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("/n");
let S = Number(input[0]);

let sum = 0;
let count = 0;
let i = 1;

while (sum + i <= S) {
    sum += i;
    count++;
    i++;
}

console.log(count);