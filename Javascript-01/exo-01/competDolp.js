let dolphin = [96, 108, 89];
let koala = [88, 91, 110];

let sum = 0;

dolphin.forEach((elem, index) => {
  sum += elem;
});
let avDol = sum / dolphin.length;

sum = 0;

koala.forEach((elem, index) => {
  sum += elem;
});
let avKoa = sum / koala.length;

let winner = "";
if (avDol > avKoa) {
  winner = "Les gagnants sont les dolphins!";
} else if (avDol < avKoa) {
  winner = "Les gagnants sont les Koalas";
} else {
  winner = "Match nul!";
}

console.log(
  "Test 1\n",
  "Dolphins average:",
  avDol,
  "\n",
  "Koalas Average:",
  avKoa,
  "\n",
  winner
);
