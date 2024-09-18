let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number).   
sort((a, b) => b - a);

function solution(coins, K) {
  let count = 0;
  for (let coin of coins) {
    while (K >= coin) {
      K -= coin;
      count++;
    }
  }
  return count;
}

console.log(solution(coins, K));