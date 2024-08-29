function solution(board, moves) {
    let box = [];
    let same = 0;
    for(let i = 0; i < moves.length; i++){
        for(let j = 0; j < board.length; j++){
            let movingcrain = moves[i]-1;
            if(board[j][movingcrain] !== 0){
                box.push(board[j][movingcrain]);
                board[j][movingcrain] = 0;
                if(box.length > 1){
                    if(box[box.length-1] === box[box.length-2]){
                        box.pop();
                        box.pop();
                        same += 2;
                    }
                }
               break;
            }
        }
    }
  return same;
}