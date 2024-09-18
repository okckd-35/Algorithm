const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

let N = Number(input);
let bag = 0

while(true){
    if(N % 5 === 0){
        bag += N/5
        break
    }
    N -= 3
    bag += 1
    
    if (N < 0){
        bag = -1
        break
    }
}

console.log(bag);