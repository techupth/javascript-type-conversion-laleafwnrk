let accountBalance = 400;
let depositAmountFromUser = "10";

Number(depositAmountFromUser);
depositAmountFromUser = Number(depositAmountFromUser);

accountBalance = accountBalance + depositAmountFromUser;

let accountBalanceMessage = "Your account balance is " + accountBalance;

console.log(accountBalanceMessage);
