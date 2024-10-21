let num1 = parseInt(prompt("Enter first value"))
let operator = prompt("Enter an operator")
let num2 = parseInt(prompt("Enter second value"))

if(isNaN(num1) && isNaN(num2)){
  alert("Invalid inputs")
}
else if(operator === "+"){
  alert("Sum = " + num1+num2)
}
else if(operator === "*"){
  alert("Solution = " + num1*num2)
}
else if(operator === "-"){
  alert("Answer = " + (num1 - num2))
}
else if(operator === "/"){
  alert("Solution = " + num1/num2)
}
else{
  alert("invalid operator")
}
