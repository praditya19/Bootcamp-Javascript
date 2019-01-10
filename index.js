let highIncome = false;
let goodCreditScore = false;
let eligbleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligbleForLoan);

let applicationRefush = !eligbleForLoan;
console.log('application Refush', applicationRefush);
