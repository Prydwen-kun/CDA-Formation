let essai = 3;
let max = 10;
let min = 0;

let randNum = Math.floor(Math.random() * (max - min + 1) + min);

const rangeDis = document.querySelector("#range");
rangeDis.value = `Entre ${min} et ${max}`;

const essaiRestant = document.getElementById("essai");

essaiRestant.innerHTML = `${essai} Essai restant`;

const tryButton = document.querySelector("#guessBut");
const gameStatut = document.querySelector(".gameStatut");

const guessInput = document.querySelector("#guess");
const historique = document.querySelector(".hist-content");

let flag = false;
let statut = "";

tryButton.addEventListener("click", () => {
  if (!flag) {
    let guess = guessInput.value;
    if (essai > 1) {
      if (
        isFinite(parseInt(guess)) &&
        parseInt(guess) <= max &&
        parseInt(guess) >= min
      ) {
        essai--;
        if (parseInt(guess) === randNum) {
          flag = true;
          statut = "Win";
          essaiRestant.innerHTML = `${essai} Essai restant`;
          gameStatut.classList.add("win");
          gameStatut.innerHTML = statut + ` | Le nombre est bien ${randNum}`;
          document.querySelector("#reset").style.display = "block";
          let element = historique.appendChild(document.createElement("div"));
          element.innerHTML = `${guess}`;
        } else {
          if (parseInt(guess) > randNum) {
            essaiRestant.innerHTML = `${essai} Essai restant | Number is less than the guess`;
            let element = historique.appendChild(document.createElement("div"));
            element.innerHTML = `${guess}`;
          } else {
            essaiRestant.innerHTML = `${essai} Essai restant | Number is greater than the guess`;
            let element = historique.appendChild(document.createElement("div"));
            element.innerHTML = `${guess}`;
          }
        }
      } else {
        alert("Enter valid number");
      }
    } else {
      essai--;
      essaiRestant.innerHTML = `${essai} Essai restant`;
      flag = true;
      statut = "Lose";
      gameStatut.classList.add("lose");
      gameStatut.innerHTML = statut + ` | Le nombre était ${randNum}`;
      document.querySelector("#reset").style.display = "block";
      let element = historique.appendChild(document.createElement("div"));
            element.innerHTML = `${guess}`;
    }
  } else {
  }
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  randNum = Math.floor(Math.random() * (max - min + 1) + min);
  resetButton.style.display = "none";
  essai = 3;
  essaiRestant.innerHTML = `${essai} Essai restant`;
  flag = false;
  statut = "";
  gameStatut.innerHTML = "";
  gameStatut.classList.remove("lose", "win");
  historique.innerHTML = "";
});

guessInput.addEventListener("focus", () => {
  guessInput.value = "";
});
