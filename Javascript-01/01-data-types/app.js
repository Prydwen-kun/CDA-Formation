const rotate = document.getElementById("rotate");

async function anim() {
  setTimeout(() => {
    rotate.setAttribute(
      "style",
      `transform: rotate(${
        x + y + z
      }deg)  translate3d(${x}px,${y}px,${z}px);perspective: 500px;`
    );
  }, 100);
}

const span0 = document.getElementById("span");
span0.innerHTML = "Hello";

for (let index = 0; index < 10; index++) {
  span0.innerHTML += index;
}

const button = document.getElementById("button");
let animbool = false;

let pos = rotate.getBoundingClientRect();

button.addEventListener("click", async (ev) => {
  animbool = !animbool;
  span0.innerHTML += " CLICK ";

  x = Math.random() * 100;
  y = Math.random() * 100;
  z = Math.random() * 100;

  await anim();
  pos = rotate.getBoundingClientRect();
  console.table(pos);
});

onkeydown = (ev) => {
  pos = rotate.getBoundingClientRect();
  console.log(ev.key);
  switch (ev.key) {
    case "z":
      rotate.setAttribute(
        "style",
        `top:${pos.top - 10}px;
            left:${pos.left}px;`
      );
      break;
    case "s":
      rotate.setAttribute(
        "style",
        `top:${pos.top + 10}px;
            left:${pos.left}px;`
      );
      break;
    case "q":
      rotate.setAttribute(
        "style",
        `top:${pos.top}px;
            left:${pos.left - 10}px;`
      );
      break;
    case "d":
      rotate.setAttribute(
        "style",
        `top:${pos.top}px;
            left:${pos.left + 10}px;`
      );
      break;

    default:
      break;
  }
};

//BOT

const bot = document.getElementById("rotate2");
const body0 = document.getElementById("bodyId");
let botPos = bot.getBoundingClientRect();

setInterval(() => {
  a = Math.random() * 900;
  b = Math.random() * 1870;
  o = Math.random() * 360;
  r = Math.random() * 255;
  g = Math.random() * 255;
  c = Math.random() * 255;

  bot.setAttribute(
    "style",
    `top:${a}px;
    left:${b}px;
    transform: rotate(${o}deg);
    
    `
  );

  body0.setAttribute("style", `background-color: rgb(${r},${g},${c});`);
}, 2000);
