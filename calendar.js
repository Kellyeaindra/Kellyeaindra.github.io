let date= new Date();
currentCalendar(date);

function currentCalendar(date){
let current=date;
current.setDate(1);
let startDay=current.getDay();
current.setMonth(current.getMonth()+1);
current.setDate(0);
let endDate=current.getDate();
let count=1;
for (let index = startDay; index < 35; index++) {

    if(count<=endDate){
    document.getElementsByClassName("day")[index].innerHTML=count++;
    }
}
}

function btnShow(){
    for (let index = 0; index < 35; index++) {
        document.getElementsByClassName("day")[index].innerHTML="";
        }  
    let year=document.getElementById("year").value;
    let month=(document.getElementById("month").value)-1; 
 let date=new Date(year,month);
 currentCalendar(date);

 btnHoliday();
}

function btnHoliday(){

    let holiday=document.getElementById("holiday").value;
    let usertype=document.getElementById("usertype").value;
    let holiarray= holiday.split("-");
    let year=document.getElementById("year").value;
    let month=document.getElementById("month").value; 

  for (let index = 0; index < 35; index++) {
    let addDate=document.getElementsByClassName("day")[index].innerHTML;
  let dd=parseInt(holiarray[2]);
  
 if(holiarray[0]==year && holiarray[1]==month && addDate==dd){
    document.getElementsByClassName("day")[index].style.backgroundColor="blue";
    document.getElementsByClassName("day")[index].innerHTML+=   `</br>${usertype}`;
 }else if( holiarray[1]!=month ){
    for (let index = 0; index < 35; index++) {
        document.getElementsByClassName("day")[index].style.backgroundColor="white";
    }
}
  }}

