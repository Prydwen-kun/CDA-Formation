// function rearrangeArray(array) {
//   for (i = 0; i < array.length; i += 2) {
//     array.splice(i, 0, array.pop());
//     console.log("Output array: ", array);
//   }
// }

// rearrangeArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// // Résultat attendu : [9, 1, 8, 2, 7, 3, 6, 4,5]

function compNum(a, b) {
  return a - b;
}

function rearrangeArray2(array) {
  array.sort(compNum);
  for (i = 0; i < array.length; i += 2) {
        array.splice(i, 0, array.pop());
        // console.log("Output array: ", array);
      }

  console.log('Output array: ',array);
}

rearrangeArray2([1, 2, 37, 8, 9, 4, 5, 6]);
