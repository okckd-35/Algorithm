function solution(a, b) {
    var answer = 0;
    if(a < b){
    for(i = a; i <= b; i++){
        answer += i;
      }
    } else if (a > b) {
    for(i = a; i >= b; i--){
        answer += i;
     } 
    } else {
        return a;
    }
    return answer;
}