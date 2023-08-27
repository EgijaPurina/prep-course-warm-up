export {};

/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */

// You are allowed to change only this function
function convertToUSD(price: any, exchangeRate: any): any {
    if (typeof price !== "number" || typeof exchangeRate !== "number") {
        throw new Error('Both price and exchange rate must be numbers'); 
}

const priceInUSD = price * exchangeRate;
return priceInUSD;
} 

const product = "You don't know JS";
const price = 19.99;
const exchangeRateToUSD = 1.4;

const priceInUSD = convertToUSD(price, exchangeRateToUSD);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));

/* Expected output:

    > Product: You don't know JS
    > Price: $27.99

*/