export {};

function add(a: any, b: any): any {
    return a + b;
}

function subtract(a: any, b: any): any {
    return a - b;
}

function sum(arr: any) {
    return arr.reduce((total: any, currentValue: any): any => total + currentValue, 0);
}

function multiply(arr: any) {
    return arr.reduce((product: any, currentValue: any): any => product * currentValue, 1);
}

function power(base: any, exponent: any): any {
    return Math.pow(base, exponent);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
