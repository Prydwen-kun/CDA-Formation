const appTitle = document.getElementById("app-title");

// get attributes
console.log(appTitle.id);
console.log(appTitle.className);
console.log(appTitle.getAttribute("id"));

//set attributes
appTitle.title = "Shopping list";
appTitle.setAttribute("data-slot", "Random ass value !!");

//change style
const body = document.querySelector("body");
// setInterval(() => {
//   a = Math.random() * 255;
//   b = Math.random() * 255;
//   c = Math.random() * 255;
//   o = Math.random();
//   body.style.background = `linear-gradient(${o}turn,
//   rgb(${a},${b},${c}),
//   rgb(${a * 0.2},
//   ${b * 0.2},
//   ${c * 0.2})),
//   linear-gradient(${o*.25}turn,
//   rgb(${a * 0.8},${b * 0.8},${c * 0.8}),
//   rgb(${a * 0.1},
//   ${b * 0.1},
//   ${c * 0.1})),
//   linear-gradient(${o*.5}turn,
//   rgb(${a * 0.5},${b * 0.5},${c * 0.5}),
//   rgb(${a * 0.2},
//   ${b * 0.2},
//   ${c * 0.2}))`;
// }, 1000);

// setInterval(() => {
//   rot = Math.random() * 360;
//   body.style.transform = `rotate(${rot}deg)`;
// }, 100);

appTitle.style.color = "white";

const button_runner = document.querySelector("#button-runner");
const cont = document.querySelector(".but-cont");

cont.addEventListener("mouseover", (event) => {
  cont.style.position = "absolute";
  //   cont.style.top = `${event.clientY + 10}px`;
  cont.style.left = `${event.clientX + 5}px`;
});

// const cursor = document.querySelector("#cursor");

// body.addEventListener("mousemove", (ev) => {
//   cursor.style.position = "absolute";
//   cursor.style.top = `${ev.clientY - 150}px`;
//   cursor.style.left = `${ev.clientX - 150}px`;
// });

// let anfg = 0;
// let count = 0;
// let count2 = 0;
// let hitmarker = document.querySelector("#hitmarker");

// setInterval(() => {
//   anfg++;
//   cursor.style.transform = `rotate(${anfg}deg)`;
//   temp = body.appendChild(document.createElement("div"));
//   temp.className = "temp";
//   temp.style.position = "absolute";
//   temp.style.top = `${parseInt(cursor.style.top) + 150}px`;
//   temp.style.left = `${parseInt(cursor.style.left) + 150}px`;
//   temp.style.zIndex = "100";
//   count = document.querySelectorAll(".temp").length;

//   //hitmarker
//   temp2 = body.appendChild(hitmarker);
//   temp2.style.position = "absolute";
//   temp2.style.top = `${parseInt(Math.random() * 1080)}px`;
//   temp2.style.left = `${parseInt(Math.random() * 1920)}px`;
//   temp2.style.zIndex = "100";
//   count2 = document.querySelectorAll(".hitmarker").length;
//   if (count2 > 50) {
//     document.querySelector(".hitmarker").remove();
//   }
//   if (count > 50) {
//     document.querySelector(".temp").remove();
//   }
//   if (anfg > 360) {
//     anfg = 0;
//   }
// }, 16);

function additem(icon, name) {
  const list = document.querySelector("#item-list");

  let item = `<li class="flex items-center justify-between p-3 bg-white rounded">
${icon}${name}
          <button class="remove-item text-red-500 hover:text-red-700">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>`;

  list.innerHTML += item;
}

const add_button = document.querySelector("#add_button");
add_button.addEventListener("click", () => {
  let inpValue = document.querySelector("#itemadd").value.split(" ");
  additem(inpValue[0], inpValue[1]);
});
