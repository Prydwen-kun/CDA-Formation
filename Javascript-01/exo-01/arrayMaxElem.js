function compNum(a, b) {
  return a - b;
}

function findMax(arr) {
  arr.sort(compNum);
  console.log("Max element : ", arr[arr.length - 1]);
}

findMax([5, 8, 9, 45, 21, 78, 96]);
