const app = document.querySelector("#app");

async function appLoad() {
  let rand = Math.floor(Math.random() * 1025);
  const flag = Math.floor(Math.random() * 2 + 1);
  console.log(flag);
  if (flag > 1) {
    rand = Math.floor(Math.random() * 277 + 10000);
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${rand}/`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

const button = document.getElementById("random");

button.addEventListener("click", random);

async function random() {
  const RandomPoke = await appLoad();
  const info = document.createElement("div");
  info.innerHTML = `<div>${
    RandomPoke.name.charAt(0).toUpperCase() + RandomPoke.name.slice(1)
  }</div>
  <img height='200' width='200' src='${RandomPoke.sprites.front_default}'></img>
  <div>Height : ${RandomPoke.height * 10}cm</div>
  <div>Weight : ${RandomPoke.weight / 10}kg</div>
  <div>Type : ${RandomPoke.types[0].type.name}${
    RandomPoke.types[1] != undefined
      ? " | " + RandomPoke.types[1].type.name
      : ""
  }</div>
  <div>Cry</div>
  <audio controls>
        <source src="${RandomPoke.cries.latest}" type="application/ogg" />
  </audio>

  `;
  app.innerHTML = "";
  app.appendChild(info);
}
