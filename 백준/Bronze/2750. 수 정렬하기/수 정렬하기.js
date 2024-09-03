let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);

let sorted = input.slice(1).sort((a, b) => Number(a) - Number(b));
let result = "";
for (let i=0; i<n; i++) {
  result += sorted[i] + '\n';
}
console.log(result)