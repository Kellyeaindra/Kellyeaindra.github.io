let codenumber=[];
let priceitem=[];
let quantity=[];
let count=0;
let discount=false;
let today = new Date();

$(document).ready(function(){
  /*--for card click effect--*/
    $(".card").click(function(){
let img=$(this).find("img").attr("src"); 
let price=$(this).find(".price").text();      
let pname=$(this).find(".pname").text();
let code=$(this).find(".code").text();
 
priceitem.push(Number(price.replace("Ks ","")));//to get clear price
quantity.push(1);//to get item quantity

if(!codenumber.includes(code)){
  codenumber.push(code)
  console.log(codenumber);
    /*---for slidedown card-*/
  $(".cart").slideDown("slow",function(){
  $(".showitem").append(
    `<div class="item">
    <img src="${img}" alt="">
 <div class="itemdetail">
    <p id="pname">${pname}</p>
    <p id="code">${code}</p>
 </div>
 <input type="text" class="quantity" value="1">
 <div id="${count}" class="delete"><ion-icon name="trash-outline"></ion-icon></div>
 </div>`
  )
  count++;
  calculate();
  checkWeekEnd();
})
}else alert("already in chart");
})

  /*--for delete button--*/
$(document).on("click",".delete",function(){
  codenumber[this.id] = "";//for delete userclick codenumber[index]
  priceitem[this.id]=0;// for 0 price if u delete
      $(this).parent().remove();
      calculate(); 
})

$(document).on("focus",".quantity",function(){
    prequantity = Number($(this).val());
})

 /*--for inputbox allow 0 to 9--*/
$(document).on("blur",".quantity",function(){
  var newvalue = Number($(this).val());
  if(newvalue <1 || newvalue >9){
      $(this).val( prequantity);//resign original state
  alert("Allow 1 to 9!")
  }else{
    let index = $(this).parent().find(".delete").attr("id");
    quantity[index]=newvalue;//for change quantity
    calculate();
  } 
})
})

/*--for change delivery price--*/
$('#delivery').on('change',()=>{
  calculate();
 })
 
/*--for to get price--*/
function calculate(){
let itemtotal=0;
let discounttotal=0;
let grandTotal=0;
let  deliAmount = $("#delivery").val();
for (let index = 0; index < priceitem.length; index++) {
  itemtotal+=priceitem[index] * quantity[index];
  finaltotal=itemtotal+Number(deliAmount);
    }
    /*--when discount--*/
    if(discount){
      discounttotal =  itemtotal * 0.15;
     grandTotal = (itemtotal - discounttotal);
      $("#discountprice").text(grandTotal + "Ks");
  }
  $("#grand").text(finaltotal+ "Ks");
  if(discount){
    dis=Number(grandTotal)+Number(deliAmount);
    $("#grand").text(dis+ "Ks");
  }
  if(itemtotal==0){
    $(".cart").slideUp(1000);
  }
}
 /*--for discount weekend--*/
function checkWeekEnd(){
  if(today.getDay()==0 || today.getDay()==6){
     if(today.getHours() >= 9 && today.getHours() <= 17){
      $("#discounttitle").show();
      $("#discountprice").show();
      discount=true;
}
  }
  }

  $("#order").click(function(){
    let name=$("#yourname").val();
    let phone=$("#phone").val();
    let address=$("#address").val();
   $("#orderdetail").append(
     `<div>Thank You${name}</div>
     <div>We receive your order</div>
     <div>We will deliever to your place at${address}</div>
     <div>Before delivery we will inform to you Phone:${phone}</div>
     `)
  })