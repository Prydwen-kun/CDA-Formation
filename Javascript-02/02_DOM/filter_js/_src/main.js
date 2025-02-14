const studentList = document.querySelector(".studentslist");

const filterSession = document.querySelector("#session");
const filterYear = document.querySelector("#year");

students.forEach((student, index) => {
  div = studentList.appendChild(document.createElement("div"));
  div.classList.add("col-3", "my-3", "listElement");
  div.innerHTML = `
    <div class="card">
            <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.session}</p>
              <p class="card-text">${student.year}</p>
              <a href="#" class="btn btn-primary">Voir profile</a>
            </div>
    </div>
    `;
});

//FILTER

filterSession.addEventListener("change", () => {
  listElements = document.querySelectorAll(".listElement");
  listElements.forEach((element) => {
    element.parentNode.removeChild(element);
  });

  students.forEach((student, index) => {
    if (filterSession.value === "all" && filterYear.value === "all") {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
            <div class="card">
                    <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${student.name}</h5>
                      <p class="card-text">${student.session}</p>
                      <p class="card-text">${student.year}</p>
                      <a href="#" class="btn btn-primary">Voir profile</a>
                    </div>
            </div>
            `;
    }
    if (filterSession.value === student.session && filterYear.value === "all") {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
              <div class="card">
                      <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.session}</p>
                        <p class="card-text">${student.year}</p>
                        <a href="#" class="btn btn-primary">Voir profile</a>
                      </div>
              </div>
              `;
    }
    if (filterSession.value === "all" && filterYear.value === student.year) {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
              <div class="card">
                      <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.session}</p>
                        <p class="card-text">${student.year}</p>
                        <a href="#" class="btn btn-primary">Voir profile</a>
                      </div>
              </div>
              `;
    }
    if (
      filterSession.value === student.session &&
      filterYear.value === student.year
    ) {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
              <div class="card">
                      <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.session}</p>
                        <p class="card-text">${student.year}</p>
                        <a href="#" class="btn btn-primary">Voir profile</a>
                      </div>
              </div>
              `;
    }
  });
});

filterYear.addEventListener("change", () => {
  listElements = document.querySelectorAll(".listElement");
  listElements.forEach((element) => {
    element.parentNode.removeChild(element);
  });

  students.forEach((student, index) => {
    if (filterSession.value === "all" && filterYear.value === "all") {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
            <div class="card">
                    <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${student.name}</h5>
                      <p class="card-text">${student.session}</p>
                      <p class="card-text">${student.year}</p>
                      <a href="#" class="btn btn-primary">Voir profile</a>
                    </div>
            </div>
            `;
    }
    if (filterSession.value === student.session && filterYear.value === "all") {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
              <div class="card">
                      <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.session}</p>
                        <p class="card-text">${student.year}</p>
                        <a href="#" class="btn btn-primary">Voir profile</a>
                      </div>
              </div>
              `;
    }
    if (filterSession.value === "all" && filterYear.value === student.year) {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
              <div class="card">
                      <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.session}</p>
                        <p class="card-text">${student.year}</p>
                        <a href="#" class="btn btn-primary">Voir profile</a>
                      </div>
              </div>
              `;
    }
    if (
      filterSession.value === student.session &&
      filterYear.value === student.year
    ) {
      div = studentList.appendChild(document.createElement("div"));
      div.classList.add("col-3", "my-3", "listElement");
      div.innerHTML = `
              <div class="card">
                      <img src="assets/img/avatar_webuser.jpg" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${student.name}</h5>
                        <p class="card-text">${student.session}</p>
                        <p class="card-text">${student.year}</p>
                        <a href="#" class="btn btn-primary">Voir profile</a>
                      </div>
              </div>
              `;
    }
  });
});

//BURGER
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
let aside;
let menu = ["Home", "Students", "Logs", "Exit"];
let burger_flag = false;

burger.addEventListener("click", () => {
  if (!burger_flag) {
    burger_flag = !burger_flag;
    aside = navbar.appendChild(document.createElement("aside"));
    aside.classList.add("burger-aside");

    menu.forEach((element) => {
      temp = aside.appendChild(document.createElement("a"));
      temp.classList.add(element);
      temp.innerHTML = element;
    });

    bars = document.querySelectorAll(".bar");
    bars[0].classList.add("bar_rotate");
    bars[1].classList.add("bar-none");
    bars[2].classList.add("bar_rotate_min", "bar_margin");

    burger.style.gap = "0px";
  } else {
    navbar.removeChild(aside);
    burger_flag = false;
    bars = document.querySelectorAll(".bar");
    bars[0].classList.remove("bar_rotate");
    bars[1].classList.remove("bar-none");
    bars[2].classList.remove("bar_rotate_min", "bar_margin");
    burger.style.gap = "5px";
  }
});
