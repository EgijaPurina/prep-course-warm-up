export {};

const repeatString = function(str: any, num: any): any {
    return (num < 0) ? new Error("Error") : str.repeat(num);
}
module.exports = repeatString 

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
