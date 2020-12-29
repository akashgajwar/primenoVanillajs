var inputVar = document.querySelector("#dateInp");
var checkBtn = document.querySelector("#check");
var outputResult = document.querySelector("#output");

function primeDay(date){
    for(i=2; i<date; i++){
        if(date%i ===0){
          return ("You are not born on a primeday")
          
        }else{
          return ("Hurray!! you are born on a primeday")
        }
      }
}


function clickHandler(){
    var dob = inputVar.value;
    var date = dob.substring(0,2);
    
    var result = primeDay(date);
    
    outputResult.innerText = result;
        
}

checkBtn.addEventListener("click", clickHandler);