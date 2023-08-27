export {};

function concatenate({ firstWord, secondWord, thirdWord }: { firstWord: any; secondWord: any; thirdWord: any; }): any {
    return firstWord.concat('').concat(secondWord).concat(thirdWord);  // Write the body of this function to concatenate three words together with space between them
}

const result = concatenate({ firstWord: "Hello ", secondWord: "from ", thirdWord: "CODELEX" });
console.log(result); // Expected output: "Hello from CODELEX"
