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
const prompt = require("prompt-sync")();

let tableNum = 0;
let table = [];
let prompt0 = "";
let currentElement = [];

while (prompt0 !== "conf") {
  console.log("yes to finish current array, conf to end entries input\n");
  prompt0 = prompt(`Entrer les valeurs du tableau n° ${tableNum + 1}:`);
  console.log("Entry :", prompt0);
  if (prompt0 !== "yes" && prompt0 !== "conf") {
    currentElement.push(parseInt(prompt0));
  } else if (prompt0 === "yes") {
    table.push(currentElement);
    tableNum++;
    currentElement = [];
  }
}

console.table(moyenne(table));
