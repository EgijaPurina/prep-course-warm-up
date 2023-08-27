export {} 

const min = (array: any) => {

  let minValue = array[0];

  for (let i = 1; i < array.length; i++) {

    if (array[i] < minValue) {

      minValue = array[i];

    }

  }

  return minValue;

};


const max = (array: any) => {

  let maxValue = array[0];

  for (let i = 1; i < array.length; i++) {

    if (array[i] > maxValue) {

      maxValue = array[i];

    }

  }

  return maxValue;

};


console.log(min([1, 2, 3, 4, 5])); // Expected output: 1

console.log(min([9, -3, 6])); // Expected output: -3

console.log(max([1, 2, 3, 4, 5])); // Expected output: 5

console.log(max([9, -3, 6])); // Expected output: 9