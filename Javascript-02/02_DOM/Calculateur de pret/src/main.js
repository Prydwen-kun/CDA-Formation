const form = document.getElementById("form");

const mensuel = document.getElementById("mensuel");
const total = document.getElementById("total");
const interet = document.getElementById("interet");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const montant = document.getElementById("montant").value;
  const taux = document.getElementById("taux").value;
  const duree = document.getElementById("duree").value;

  calculer(parseFloat(montant), parseFloat(taux), parseFloat(duree));
});

function calculer(montant, taux, annee) {
  if (
    typeof montant == "number" &&
    typeof taux == "number" &&
    typeof annee == "number"
  ) {
    let section = document.querySelector("section");
    section.style = "display: none";
    let spinner = document.getElementById("spinner");
    spinner.style = "display: block";
    let deg = 0;

    let tauxMensuel = taux / 1200;
    let nbPaiement = annee * 12;

    let mensualite =
      montant * tauxMensuel * Math.pow(1 + tauxMensuel, nbPaiement);

    mensualite = mensualite / ((1 + tauxMensuel) ** nbPaiement - 1);

    mensuel.innerHTML = mensualite.toFixed(3) + "€";
    total.innerHTML = (mensualite * nbPaiement).toFixed(3) + "€";
    interet.innerHTML = (mensualite * nbPaiement - montant).toFixed(3) + "€";

    let interval = setInterval(() => {
      spinner.style = `display: block;transform: rotate(${deg}deg);`;
      deg += 10;
      if (deg >= 360) {
        deg = 0;
      }
    }, 16);

    setTimeout(() => {
      clearInterval(interval);
      section.style = "display: flex";
      spinner.style = "display: none";
      
    }, 2000);
  } else {
    alert("Rentrez des nombres valides !");
    return;
  }
}
