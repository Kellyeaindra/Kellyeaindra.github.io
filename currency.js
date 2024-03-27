function initial() {
    fetch(
      "https://v6.exchangerate-api.com/v6/3de3e4792bb14625bcb2289b/latest/USD"
    )
      .then((res) => res.json())
      .then((data) => {
        for (const key in data.conversion_rates) {
          //console.log(key);
          if (key != "USD") {
            document.getElementById("keycode").innerHTML += `
     <option value="${data.conversion_rates[key]}">${key}</option>
     `;
          }
        }
      });
  
  }
  
  initial();
  
  /*-for currency exchange base for USD-*/
  function userType(obj) {
    let currency = obj.value;
    let answer = Number(currency) * Number(keycode.value);
    finalresult = parseInt(answer);
   // console.log(finalresult);
    let exchange = document.getElementById("keycode");
    let text = exchange.options[exchange.selectedIndex].text; // for selected currency MMK
    document.getElementById("answer").innerHTML = finalresult + "" + text;
  }
  