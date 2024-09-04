const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = input.shift();

const arr = [];

for(let i = 0; i<input.length; i++){
    arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
    if(a[0] !== b[0]){
        return a[0] - b[0]
    } else {
        return a[1] - b[1]
    }
});

let result = '';

arr.forEach((e) => {
    result += `${e[0]} ${e[1]}\n`;
});

console.log(result);