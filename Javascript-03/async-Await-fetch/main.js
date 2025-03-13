
const url = "https://api.api-ninjas.com/v1/randomuser";

const options = {
  headers: {
    "X-Api-key": key,
  },
};

async function fetchSoul() {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  const user = json;
  const app = document.querySelector("#app");

  console.log(user);
  for (const element in user) {
    const child = document.createElement("div");
    child.innerHTML = `<span>${element}</span>${user[element]}`;
    app.appendChild(child);
  }
}

const button = document.querySelector("#random");
button.addEventListener("click", fetchSoul);
