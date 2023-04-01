let player = 0;
var mark,t;
var ch=0;
const check = document.querySelectorAll(".grid .item button");

var ID = [];  //stores id's

var MARK = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];  //array  that stores marks on the button

for(var i=0; i<9; i++){
 ID[i] = check[i].getAttributeNode("id").value;
}


//adding event to every button
for(var i=0; i<9; i++){
check[i].addEventListener("click", checkStats);
}

function reloadWindow(){
    window.location.reload();
}


//********ADDS MARK TO THE BUTTON *********/
function addMark(id){
    player = (player%2) ? 1 : 2;
    mark = (player==1)? 'O' : 'X';

    for(var i =0; i<9; i++){

        if(ID[i] == id){

        if(MARK[i]=='X' || MARK[i]=='O')
        document.getElementById("info").style.display = "block";

        else{
        document.getElementById("info").style.display = "none";
        document.getElementById(id).innerText = mark;
        MARK[i] = mark;
        document.querySelector("#status h4").innerText = "Player " + player + " turn";
        player++;
        ch++;
        }
        }  
    } 
}
//**********Event Function***********/
function checkStats(id){
    addMark(this.id);
    t = checkWin();
    console.log(MARK);
    console.log(t);
    console.log(ch);
    if(t==true){
        player = (player==3)?player-2 : player--;
        document.querySelector("#status h4").innerText = "Player " + player + " Won! "; 
        for(var i=0; i<9; i++)
        check[i].removeEventListener("click", checkStats); 

        for(var i=0; i<2; i++)
        document.getElementsByClassName("gif")[i].style.display = "block";
    }

    //if none of the matches are made, then game draw
    if(ch==9){
        for(var i=0; i<9; i++)
        check[i].removeEventListener("click", checkStats); 

        document.querySelector("#status h4").innerText = "Game Draw";
    }
    
}



//*************Determines Game's Result************/
function checkWin(){
    if(MARK[0]==MARK[4] && MARK[4]==MARK[8]){
    return true
    ch=0;
    }

    else if(MARK[2]==MARK[4] && MARK[4]==MARK[6]){
    return true;
    ch=0;}


    else if(MARK[0]==MARK[3] && MARK[3]==MARK[6]){
    return true;
    ch=0;
    }

    else if(MARK[1]==MARK[4] && MARK[4]==MARK[7]){
    return true;
    ch=0;
    }

    else if(MARK[2]==MARK[5] && MARK[5]==MARK[8]){
    return true;
    ch=0;
    }

    else if(MARK[0]==MARK[1] && MARK[1]==MARK[2]){
    return true;
    ch=0;
    }

    else if(MARK[3]==MARK[4] && MARK[4]==MARK[5]){
    return true;
    ch=0;
    }

    else if(MARK[6]==MARK[7] && MARK[7]==MARK[8]){
    return true;
    ch=0;
    }

    else {
    return false;
    }
}



