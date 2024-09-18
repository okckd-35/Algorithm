let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


const G = input[0].split("-");

let answer = 0;
for (let i = 0; i < G.length; i++) {
    let K = G[i].split("+").map(Number).reduce((a, b) => a + b, 0);

    if (i == 0) {
        answer += K;
    }
    
    else {
        answer -= K;
    }
}

console.log(answer);