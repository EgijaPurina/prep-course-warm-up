export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

type MapFunction<T, R> = (value: T, index: number, array: T[]) => R;

const map = <T, R>(arr: T[], callback: MapFunction<T, R>): R[] => {
  const result: R[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

const numbers = [1, 2, 3];
const doubled = map<number, number>(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
