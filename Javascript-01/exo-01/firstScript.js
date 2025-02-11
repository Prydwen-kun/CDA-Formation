toto = [
  [15, 14, 16, 12, 18],
  [150, 14, 16, 12, 18],
  [15, 14, 160, 12, 18],
  ["15", 14, 16, 12, 18],
  [15, 14, "16", 12, 18],
  [null, 14, 16, 12, 18],
  [15, 14, null, 12, 18],
  [false, 14, 16, 12, 18],
  [15, 14, false, 12, 18],
  [undefined, 14, 16, 12, 18],
  [15, 14, undefined, 12, 18],
];

function moyenne(array) {
  let returnArray = [];
  let sum = 0;
  array.forEach((element) => {
    sum = 0;
    element.forEach((value) => {
      sum += value;
    });
    returnArray.push(sum / element.length);
  });
  return returnArray;
}

console.table(moyenne(toto));
