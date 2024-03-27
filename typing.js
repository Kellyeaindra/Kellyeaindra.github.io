function ClickW(){
    for (let index = 0; index < 5; index++) {
      let random=Math.floor(Math.random()*(122-97+1)+97);
    let wordrandom=   String.fromCharCode(random);
   document.getElementById("word").innerHTML+=wordrandom;
    }
}

window.addEventListener("keyup",function(e){
   document.getElementById("usertype").innerHTML+=e.key;

   /* for keyboard color if u press*/
   for (let index = 0; index <26; index++) {
   let type=document.getElementsByClassName("w")[index].innerHTML;
    if(type==e.key){
      document.getElementsByClassName("w")[index].style.backgroundColor="blue";
    }else{
      document.getElementsByClassName("w")[index].style.backgroundColor="white";
    }
   }
  /* for lose or win*/
 let word=   document.getElementById("word").innerHTML;
 let ekey=document.getElementById("usertype").innerHTML;
 if(word==ekey){
  document.getElementById("word").innerHTML="";
  document.getElementById("usertype").innerHTML="";
  ClickW();
let correct=document.getElementById("cor").innerHTML;
document.getElementById("cor").innerHTML=Number(correct)+1;
 }else{
  let newword=word.split("");
 let newekey=ekey.split("");
if(newword.length==newekey.length){
  document.getElementById("usertype").innerHTML="";
  let wrong=document.getElementById("wro").innerHTML;
document.getElementById("wro").innerHTML=Number(wrong)+1;
}
 }
})