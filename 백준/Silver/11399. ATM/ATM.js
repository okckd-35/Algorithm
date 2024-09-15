const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const time = input[1].split(' ').map(Number).sort((a,b)=>a-b);

let total = 0;
let sum = 0;
for(let i =0; i < time.length; i++){
    total += sum + time[i];
    sum += time[i];
}

console.log(total);