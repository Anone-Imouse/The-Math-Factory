function addition() {
  var emptyp=document.getElementById("emptyp");
  var num1=prompt("What is your first number?");
  var num2=prompt("Your second...");
  
  var result=(Number(num1)+Number(num2));
  
  alert("Your result is being calculated");
  alert("...");
  alert(result);
  emptyp.innerHTML=("Your last result was "+result+".");
} function subtraction() {
  var emptyp=document.getElementById("emptyp");
  var num1=prompt("What is your first number?");
  var num2=prompt("Your second...");
  
  var result=(Number(num1)-Number(num2));
  
  alert("Your result is being calculated");
  alert("...");
  alert(result);
  emptyp.innerHTML=("Your last result was "+result+".");
} function multiplication() {
  var emptyp=document.getElementById("emptyp");
  var num1=prompt("What is your first number?");
  var num2=prompt("Your second...");
  
  var result=(Number(num1)*Number(num2));
  
  alert("Your result is being calculated");
  alert("...");
  alert(result);
  emptyp.innerHTML=("Your last result was "+result+".");
} function division() {
  var emptyp=document.getElementById("emptyp");
  var num1=prompt("What is your first number?");
  var num2=prompt("Your second...");
  
  var result=(Number(num1)/Number(num2));
  
  alert("Your result is being calculated");
  alert("...");
  alert(result);
  emptyp.innerHTML=("Your last result was "+result+".");
} 

function factorialize(num) {
  var emptyp=document.getElementById("emptyp");
  var quest=prompt("What number do you want to factorialize?");
  
  var result=1;
  for (var i=1; i<=quest; i++) {
    result*=i;
  }
  emptyp.innerHTML="Your last result was "+result+"."
    console.log(result);
}
