let x = Math.random() * 100 + 1;
let y = Math.random() * 50 + 1;

x = Math.floor(x);
y = Math.floor(y);

let somme = x + y;
let diff = x - y;
let produit = x * y;
let divide = x / y;
let modulo = x % y;

let table = {
  somme: "x+y =" + somme,
  diff: "x-y =" + diff,
  produit: "x*y =" + produit,
  division: "x/y =" + divide,
  modulo: "x%y =" + modulo,
};

console.log(
  `${x} et ${y}\n`,
  `x+y=${somme}\n`,
  `x-y=${diff}\n`,
  `x*y=${produit}\n`,
  `x/y=${divide}\n`,
  `x%y=${modulo}\n`
);

console.table(table);

console.log((2.1).toFixed(0), (2.9).toFixed(0));
