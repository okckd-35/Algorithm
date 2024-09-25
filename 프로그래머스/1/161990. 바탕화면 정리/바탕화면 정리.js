function solution(arr) {
    let answer = [];
    let lux = Number.MAX_VALUE;
    let luy = Number.MAX_VALUE;
    let rdx = Number.MIN_VALUE;
    let rdy = Number.MIN_VALUE;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === '#') {
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i);
                rdy = Math.max(rdy, j);
             
            }
        }
    }
    return answer = [lux,luy,rdx + 1,rdy + 1]
}
