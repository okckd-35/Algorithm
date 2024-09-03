let fs = require('fs');
let [n, ...sorted] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

n = Number(n);
sorted.sort((a, b) => Number(a) - Number(b));

let result = "";
for (let i=0; i<n; i++) {
  result += sorted[i] + '\n';
}
console.log(result)