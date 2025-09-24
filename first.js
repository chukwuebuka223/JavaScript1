let principalAmount = 1000;
let annualInterest = 0.05;
let timeInyear = 2;

let interest = principalAmount * annualInterest * timeInyear
console.log(interest)
let totalAmmount = principalAmount + interest
console.log(totalAmmount)

let summary =  "after " + timeInyear + " years " + " at an " + interest + " rate of " + annualInterest + " %, the total amount will be N " + totalAmmount
console.log(summary)
let container = document.getElementById("container")
container.innerText = summary





