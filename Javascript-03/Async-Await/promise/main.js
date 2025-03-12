const app = document.querySelector("#app");

async function appLoad() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

const pokeList = await appLoad();
console.log(pokeList.results);

pokeList.results.forEach((element) => {
  console.log(element);
  let node = document.createElement("div");
  node.innerHTML = element.name;
  let newNode = app.appendChild(node);
  let urlNode = document.createElement("a");
  urlNode.innerHTML = element.url;
  urlNode.href = element.url;
  newNode.appendChild(urlNode);
});

const generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", chuckRequest);

function chuckRequest() {
  const req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      if (req.status === 200) {
        let resJSON = JSON.parse(req.responseText);
        const quote = document.querySelector(".quote");
        quote.innerHTML = resJSON.value;
      }
    }
  };
  req.open("GET", "https://api.chucknorris.io/jokes/random");
  req.send();
}
