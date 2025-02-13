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
    } else if (
      filterSession.value === student.session ||
      filterYear.value === "all"
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
