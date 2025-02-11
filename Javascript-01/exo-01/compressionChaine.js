function compressString(str) {
  let count = 1;
  let compress = [];
  let strArray = Array.from(str);
  strArray.forEach((element, index, array) => {
    if (element === array[index - 1]) {
      count++;
    } else if (index !== 0) {
      if (count !== 1) {
        compress.push(array[index - 1], count);
      } else {
        compress.push(array[index - 1]);
      }

      count = 1;
    }
  });

  return compress.join("");
}

console.log(compressString("aaabbcddd"));
