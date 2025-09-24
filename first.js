let principalAmount = 1000;
let annualInterest = 0.05;
let timeInyear = 5;

let interest = principalAmount * annualInterest * timeInyear
console.log(interest)
let totalAmmount = principalAmount + interest
console.log(totalAmmount)

let summary =`going forward to ${timeInyear} years at a ${interest} rate of ${annualInterest}%, the total amount will be N${totalAmmount}`
let container = document.getElementById("container")
container.innerText = summary





