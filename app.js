let boxes=document.querySelectorAll('.box')
let resetBtn=document.querySelector('#reset-btn');
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector(".msg-winner-container");
let msg=document.querySelector('#msgwin');
let count=1;
let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText='O';
            box.style.backgroundColor='#a4c3b2';
            box.style.color='#354f52';
            turnO=false;
        }else{
            box.innerText='X';
            box.style.backgroundColor='#6b9080';
            box.style.color='#a4c3b2';
            turnO=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    });
});

const disableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
        box.style.backgroundColor='';
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove('hide');
};
const checkWinner=()=>{
    for(let patterns of winPatterns){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!= ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                disableBtns();
                showWinner(pos1Val);
            }else if(count===9){
                disableBtns();
                drawMatch();
            }
        }
    }
};

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add('hide');
};

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);

const drawMatch=()=>{
        msg.innerText="Nice play,But it's a Draw!!"
        msgContainer.classList.remove('hide');
}