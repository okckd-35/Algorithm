function solution(nums) {
    let answer = 0;
    let maxpon = nums.length / 2;
    
    let arr = nums.filter((element, index) => {
        return nums.indexOf(element) === index;
    });
    
    if(arr.length >= maxpon){
        answer = maxpon;
    }else{
        answer = arr.length;
    }
    
    return answer;
}