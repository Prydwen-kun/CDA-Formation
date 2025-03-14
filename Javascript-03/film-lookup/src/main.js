import "../src/style.css";

const URL = "https://api.api-ninjas.com/v1/celebrity";
const key = "NIbOCyGlJzg8gB83Em7G1Q==OSyo8ek2LLbFg6gf";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": key,
  },
};

async function getCeleb(event, search) {
  const response = await fetch(URL + "?name=" + search.trim(), options);

  if (!response.ok) {
    throw new Error("Response statut :" + response.status);
  } else {
    const celebs = await response.json();
    console.log(celebs);
    const list = document.querySelector(".celeb-list");
    for (const celeb of celebs) {
      let celebElem = document.createElement("div");
      celebElem.innerHTML = `
      <div>${celeb.name}</div>
      <div>${celeb.net_worth}</div>
      <div>${celeb.nationality}</div>
      `;
    }
  }
}

const search = document.querySelector("#search");
search.addEventListener("click", (event) => {
  let searchValue = document.querySelector("#film").value;
  getCeleb(event, searchValue);
});
