function solution(n, left, right) {
    const answer = [];
    for(let k = left; k <= right; k++) {
        const row = Math.floor(k / n);
        const column = k % n;
        if(row >= column) {
            answer.push(row + 1);
        }
        else {
            answer.push(column + 1);
        }
    }
    return answer;
}