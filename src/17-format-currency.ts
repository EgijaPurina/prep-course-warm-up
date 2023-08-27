export {};

/**
 * Currency Formatting
 *
 * The business has informed you that prices must have 2 decimal places
 * They must also start with the currency symbol
 * Write a function that transforms numbers into the format £0.00
 */

// You are allowed to change only this function
function formatCurrency(amount: any, currencySymbol = "$", decimalDigits = 2) {
  if (typeof amount !== "number") {
      throw new Error("Amount must be a number");
  }

  const formattedAmount = amount.toFixed(decimalDigits);
  return `${currencySymbol}${formattedAmount}`;
}

function calculateSalesTax(price: any) {
  return price * 0.21;
}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

// Format prices and sales tax using the formatCurrency function
const formattedPrice = formatCurrency(price);
const formattedSalesTax = formatCurrency(salesTax);
const totalPrice = price + salesTax;
const formattedTotalPrice = formatCurrency(totalPrice);

console.log("Product: " + product);
console.log("Price: " + formattedPrice);
console.log("Sales tax: " + formattedSalesTax);
console.log("Total: " + formattedTotalPrice);


/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/