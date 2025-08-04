let bx=document.querySelectorAll(".boxes");
console.log(bx);
let reset=document.querySelector("#resetbtnn");
console.log(reset);
let newtbn=document.querySelector("#new-btn");
let messageshow=document.querySelector(".messageshow");
let msg=document.getElementById("msg");

let turn=true;
let numbers=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]  
];

let resetgame = ()=>{
  turn = true;
  enablebx();
  messageshow.classList.add("hide");
}
let bxx = document.querySelectorAll(".boxes"); 
bxx.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn){
        box.innerText="O";
        turn = false;
    }else{
        turn=true;
        box.innerText="X";
    }
    
    Winnercheck();
  });   
});
const disablebx=()=>{
  for(let box of bx){
    box.disabled=true;
  }
};
const enablebx=()=>{
  for (let box of bx){
    box.disabled=false;
    box.innerText="";
  }
};

let WinnerShow = (winner) => {
  if (winner === "X" || winner === "O") {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    messageshow.classList.remove("hide");
    disablebx();
  }
};

 let Winnercheck=()=>{
  for(pattern of numbers) {
      let val1=bx[pattern[0]].innerText;
    let val2=bx[pattern[1]].innerText;
    let val3= bx[pattern[2]].innerText;
  if(val1 !="" && val2 !="" && val3 !=""){
    if(val1===val2 && val2===val3){
      console.log("winner", val1);
      WinnerShow(val1);
    }
  }
  }
 };
 newtbn.addEventListener("click",resetgame);
 reset.addEventListener("click",resetgame);
