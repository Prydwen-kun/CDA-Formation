let arrayToSort = [9, 7, 6, 1, 4, 5, 3, 6, 4, 15, 78, 54, 26, undefined];

let arrayCopy = [];
arrayCopy.push(Array.from(arrayToSort));
let swap = 0;

do {
  swap = 0;
  for (let i = 0; i < arrayToSort.length; i++) {
    if (arrayToSort[i] > arrayToSort[i + 1]) {
      buffer = arrayToSort[i + 1];
      arrayToSort[i + 1] = arrayToSort[i];
      arrayToSort[i] = buffer;
      swap = 1;
    }
  }
} while (swap !== 0);

arrayCopy.push(arrayToSort);

let arrayObject = { Array: arrayCopy[0], SortedArray: arrayCopy[1] };
console.table(arrayObject);

console.log(
  "test > ",
  arrayCopy[0][arrayCopy[0].length - 1],
  " et ",
  arrayCopy[0][arrayCopy[0].length],' => ',
  arrayCopy[0][arrayCopy[0].length - 1] > arrayCopy[0][arrayCopy[0].length]
);
