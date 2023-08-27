export {};

const count = (text: any, word: any): any => {
    const words = text.toLowerCase().split(' ');
  let count = 0;

  words.forEach((w: any) => {
    if (w === word.toLowerCase()) {
      count++;
    }
  });

  return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
