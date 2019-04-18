$(document).ready(function () {
  
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = (slider.value + "%"); 
    var tip = document.getElementById('tip');
    var total = document.getElementById('total');
      
    slider.oninput = function() {
       let bill = Number($('#bill-amount').val());
       let tipPercent = (this.value / 100)
       let tipAmount = tipPercent * bill;
       let totalBill = tipAmount + bill;
      output.innerHTML = (this.value + "%");
      tip.innerHTML = "Tip: $" + Math.round(tipAmount*100)/100;
      total.innerHTML = "Total: $" + Math.round(totalBill*100)/100;
    }
      
    });
    
      