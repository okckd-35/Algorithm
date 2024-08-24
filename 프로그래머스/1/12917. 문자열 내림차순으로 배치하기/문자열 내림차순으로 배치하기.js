function solution(s) {
    var answer = '';
    s = s.split("");
    s.sort().reverse();
    answer = s.join("").toString();
    return answer;
}