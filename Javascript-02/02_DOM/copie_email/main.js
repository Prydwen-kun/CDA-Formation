const button = document.querySelector("button");
const body = document.querySelector("body");

let flag = false;

button.addEventListener("click", () => {
  if (!flag) {
    span = body.appendChild(document.createElement("span"));
    navigator.clipboard.writeText("example@email.com");
    span.innerHTML = "Email copié";
    span.style.transition = "all 1s ease-in";
    flag = !flag;
  }
  setTimeout(() => {
    span = document.querySelector("span");
    body.removeChild(span);
    flag = false;
  }, 1000);
});
