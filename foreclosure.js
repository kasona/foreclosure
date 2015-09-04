'use strict';
/*Initialize variables for ...
   steve
   stevesLoan
   month,with an inital value of 0
   monthsUntilEvi
   cted */
   debugger;
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

/*Declare function named loan() takes 0 arguments
1. Delcare variable named account w/inital value being literal objects */
function loan() {
  var account = {
    borrowed : 550000,
    balance : 286000,
    monthlyPayment : 1700,
    defaulted : 0,
    defaultsToForeclose : 5,
    foreclosed : false
  }; // end of var account

  /*Declare function named missPayment() takes 0 arguments
  Access defaulted property of account var and increase value by 1
  Write conditional, when value of account.defaulted >= account.defaultsToForeclose
  it will run (set value of foreclosed of account onj to true */
  function missPayment() {
    account.defaulted += 1;
    if (account.defaulted >= account.defaultsToForeclose) {
      return account.foreclosed = true;
    }
  }// end of missPayment


  return {
    getBalance : function() {
      return account.balance;
    },
    receivePayment : function(amount) { // key : unnamed FUNCTION
      if (amount < account.monthlyPayment) {
        return missPayment();
      } else {
        account.balance -= amount;
      }
    },
    getMonthlyPayment : function() { //0 arguments
      return account.monthlyPayment;
    },
    isForeclosed : function() {
      return account.foreclosed;
    }
  };//return
}//loan

function borrower(loan) { // 1 argument loan
  var account = {
    monthlyIncome : 1350,
    funds : 2800,
    loan : loan
  };

  return {
    getFunds : function() {
      return account.funds;
    },
    makePayment : function() {
      if (account.funds > loan.getMonthlyPayment()) {
        account.funds -= loan.getMonthlyPayment();
        loan.receivePayment(loan.getMonthlyPayment());
      } else {
        loan.receivePayment(account.funds);
        account.funds = 0;
      }
    },//makePayment
    payDay : function() {
      account.funds += account.monthlyIncome;
    }
  }; //return borrower
} // borrower



// Debug
var stevesLoan = loan();
var steve = borrower(stevesLoan);

while (stevesLoan.isForeclosed() === false) {
  steve.payDay();
  steve.makePayment();
  month++;
  monthsUntilEvicted = month;
}