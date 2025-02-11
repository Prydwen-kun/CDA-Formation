function tip(tip) {
  return 300 >= tip && 50 <= tip ? tip * 0.15 : tip * 0.2;
}

const prompt = require("prompt-sync")();

let input = prompt("Addition :");

let tip0 = tip(input);

console.log("calc tip:", tip0);
