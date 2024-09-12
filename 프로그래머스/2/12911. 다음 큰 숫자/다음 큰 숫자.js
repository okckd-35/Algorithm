function solution(n) {
    let answer = n + 1;

    while (true) {
        const firstN = n.toString(2).split("1").length;
        const nextN = answer.toString(2).split("1").length;

        if (firstN === nextN) {
            break;
        }
        answer++;
    }
    return answer;
}