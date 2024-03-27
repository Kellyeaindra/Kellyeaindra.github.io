let color=["red","blue","gold","black","orange","pink","red","blue","gold","black","orange","pink"];
let colorrandom=[];
let first="";
let second="";
let click=[];
var countdownTime = 10; 
let clickcount=0;

function btnStart(){ 
    for (let index = 0; index < color.length; index++) {
    let random=Math.floor(Math.random()*11);

    if(checkTwice(color[random])){
        newRandom();
    }else{
   colorrandom.push(color[random]);
    }
}

for (let index = 0; index < 12; index++) {
document.getElementsByClassName("box")[index].style.backgroundColor=colorrandom[index]; 
}

updateCountdown();
}

function checkTwice(value){
 let count=0;
for (let index = 0; index <colorrandom.length; index++) {
  if(  colorrandom[index]==value){
    count++;
  }}
    if(count==2){
        return true;
    }else{
        return false;
    } 

}
function  newRandom(){
    for (let index = 0; index < color.length; index++) {
        let random=Math.floor(Math.random()*11);
        if(!checkTwice(color[random])){
            colorrandom.push(color[random]);
        }
}
}

function flip(obj){
    clickcount++;
    let userpress=obj.id;
    document.getElementById(userpress).disabled=true;
if(first==""){
    first=obj.style.backgroundColor;
   click[0] =obj.id;
}else{
    second=obj.style.backgroundColor;
    click[1] =obj.id;
    if(first==second && click[0]!=click[1]){
        document.getElementById(click[0]).style.display="none";
        document.getElementById(click[1]).style.display="none";
    }
    first="";
    second="";
    click=[];
}
}

function updateCountdown() {
    setInterval(() => {
        countdownTime--;
        if(countdownTime>=0){
            document.getElementById("timer").innerHTML= countdownTime + "s";
        }
      
if(countdownTime<=0 && clickcount!=12){
    document.getElementById("answer").innerHTML="GameOver!";
}else if( clickcount==12 && countdownTime>0){
    document.getElementById("answer").innerHTML="GameWin!";
   countdownTime=0;
}
}, 1000);
}

