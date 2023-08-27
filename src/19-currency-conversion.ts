export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

function applyForeignTransactionFee(price: any) {
    // Calculate 1% fee
    const feePercentage = 0.01;
    const fee = price * feePercentage;
    return price + fee;
}
// You are allowed to change this function
function convertToUSD(price: any) {
    const exchangeRateToUSD = 0.85;
    const priceWithFee = applyForeignTransactionFee(price);
    return priceWithFee * exchangeRateToUSD;
}

// You are allowed to change this function
function convertToBRL(price: any) {
    const exchangeRateToBRL = 4.15;
    const priceWithFee = applyForeignTransactionFee(price);
    return priceWithFee * exchangeRateToBRL;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));
console.log("Price: R$" + priceInBRL.toFixed(2));

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
