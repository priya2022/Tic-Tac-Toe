let gmbtn=document.querySelectorAll(".btn-option");
let popup=document.querySelector(".popup");
let rbtn=document.getElementById("restart");
let mes =document.getElementById("message");
let ngbtn = document.getElementById("new-game");

let winningPattern = [
    [0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

let xTurn = true;
let count =0;

//Disable all buttons in the
 const disableButtons = ()=>{
    gmbtn.forEach((element)=>(
        element.disabled =true
    ));
    //Enable Popup Buttons
    popup.classList.remove("hide");
 }

 const enableButtons = ()=>{
    gmbtn.forEach((element)=>{
        element.innerText ="";
        element.disabled = false
 });
    //Disable Pop Up Buttons
    popup.classList.add("hide")

 }

 const winFunction = (letter)=> {
    disableButtons();
    if(letter == "X")
    {
        mes.innerHTML = "&#x1F389; <br> 'X' Wins";

    }
    else{
        mes.innerHTML = "&#x1F389; <br> 'O' Wins";
        
    }
 }

 //Function for drawing

 const drawFunction=()=>{
    disableButtons();
    mes.innerHTML = "&#x1F60E; <br> It's a Draw";
 }

 //New game
 ngbtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
 })

 //restart buttons
 rbtn.addEventListener('click',()=>{
    count =0;
    enableButtons();	
 })

 //win Logical

 const winChecker =()=>{
    //loop through all win patternIsRegExp
    for(let i of winningPattern){
        let[element1,element2, element3]=[
            gmbtn[i[0]].innerText,
            gmbtn[i[1]].innerText,
            gmbtn[i[2]].innerText,

        ];
        //check if elements are filled;
        //if 3 empty elements are same and would give win as would

        if(element1 != ""&&(element2 != "") & (element3 != "")){
            if(element1 == element2 && element2 == element3){
                winFunction(element1);
            }
        }
    }
 }

 gmbtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(xTurn){
            xTurn = false;
            element.innerText ="X";
            element.disabled =true;
        }
        else{
            xTurn = true;
            element.innerText ="O";
            element.disabled =true;
        }
        count +=1;
        if(count == 9)
        {
            drawFunction();
        }
        //check for win on every Click;
        winChecker();
    })
 })
window.onload =enableButtons;