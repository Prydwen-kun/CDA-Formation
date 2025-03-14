const url = "https://jsonplaceholder.typicode.com/todos/";

const GET = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
};

const DELETE = {
  method: "DELETE",
};
//create todo
let POST = {
  method: "POST",
  body: {},
};

let PATCH = {
  method: "PATCH",
  body: {},
};

async function fetchSoul() {
  const response = await fetch(url, GET);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  const user = json;
  const app = document.querySelector("#app");

  console.log(user);
  for (const element in user) {
    const child = document.createElement("div");
    child.classList.add(`todo${user[element].id}`);
    child.innerHTML = `
    <div class='idDiv'>${user[element].id}<button class='edit edit${
      user[element].id
    }'>Edit</button></div>
    <div>${user[element].title}</div>
    <div>${user[element].userId}</div>
    <div>
      <div class='completed comp${user[element].id}'>${
      user[element].completed ? "v" : "x"
    }</div>
    </div>
    <div><button class='suppr supp${
      user[element].id
    }')'>Supprimer</button></div>
    `;
    app.appendChild(child);
    const editButton = document.querySelector(`.edit${user[element].id}`);
    editButton.addEventListener("click", (event) => {
      editTask(event, `${user[element].id}`);
    });

    const compButt = document.querySelector(`.comp${user[element].id}`);
    compButt.addEventListener("click", (event) => {
      toggleCompleted(event, `${user[element].id}`);
    });

    const suppButton = document.querySelector(`.supp${user[element].id}`);
    suppButton.addEventListener("click", (event) => {
      supprimer(event, `${user[element].id}`);
    });
  }
}

async function supprimer(event, todoId) {
  const response = await fetch(`${url}${todoId}`, DELETE);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  } else {
    const todoElem = document.querySelector(`.todo${todoId}`);
    const suppButton = document.querySelector(`.supp${todoId}`);
    // suppButton.removeEventListener("click", supprimer(`${todoId}`));
    const app = document.querySelector("#app");
    app.removeChild(todoElem);
  }
}

async function toggleCompleted(event, todoId) {
  const res = await fetch(`${url}${todoId}`, GET);
  if (!res.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const task = await res.json();
  PATCH.body = {
    completed: !task.completed,
  };
  const response = await fetch(`${url}${todoId}`, PATCH);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  } else {
    console.log("Update...");
    const update = await response.json();
    console.log("Updated!");
    const taskElement = document.querySelector(`.comp${todoId}`);
    console.log(taskElement);
    taskElement.innerHTML = taskElement.innerHTML == "v" ? "x" : "v";
  }
}

let editID = "1";
async function editTask(event, edit_id) {
  const hiddenForm = document.querySelector(".hidden");
  hiddenForm.classList.add("translateForm");
  editID = edit_id;
  const editing = document.querySelector(".editing");
  editing.innerHTML = "Editing task n°" + editID;
}

const hiddenClose = document.querySelector("#hidden-close");
hiddenClose.addEventListener("click", closeHidden);

function closeHidden(event) {
  const hiddenForm = document.querySelector(".hidden");
  event.preventDefault();
  hiddenForm.classList.remove("translateForm");
}

const hiddenSave = document.querySelector("#hidden-save");
hiddenSave.addEventListener("click", (event) => {
  saveEdit(event);
});

async function saveEdit(event) {
  event.preventDefault();
  let title = document.getElementById("task").value.trim();
  let user = document.getElementById("user").value.trim();
  if (title == "" || user == "" || isNaN(user)) {
    alert("Fill all field or enter a proper number");
    return;
  }
  PATCH.body = {
    title: title,
    userId: user,
  };
  const response = await fetch(`${url}${editID}`, PATCH);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  } else {
    const titleUP = document.querySelector(`.todo${editID}`).childNodes[3];
    const userUP = document.querySelector(`.todo${editID}`).childNodes[5];
    console.log(document.querySelector(`.todo${editID}`).childNodes);
    titleUP.innerHTML = title;
    userUP.innerHTML = user;
    const hiddenForm = document.querySelector(".hidden");
    hiddenForm.classList.remove("translateForm");
  }
}

const addTaskButt = document.querySelector("#addTask");
addTaskButt.addEventListener("click", (event) => {
  addTask(event);
});

let maxID = 200;

async function addTask(event) {
  event.preventDefault();
  const tache = document.querySelector("#tache").value.trim();
  const user = document.querySelector("#userId").value.trim();
  if (tache == "" || user == "" || isNaN(user)) {
    alert("Fill all field or enter a proper number");
    return;
  }
  POST.body = {
    title: tache,
    userId: user,
    completed: false,
  };
  const response = await fetch(`${url}`, POST);
  console.log(response);
  if (!response.ok) {
    throw new Error(`Response status :${response.status}`);
  } else {
    const list = document.querySelector("#app");
    maxID++;
    const child = document.createElement("div");
    child.classList.add(`todo${maxID}`);
    child.innerHTML = `
    <div class='idDiv'>${maxID}<button class='edit edit${maxID}'>Edit</button></div>
    <div>${tache}</div>
    <div>${user}</div>
    <div>
      <div class='completed comp${maxID}'>${"x"}</div>
    </div>
    <div><button class='suppr supp${maxID}')'>Supprimer</button></div>
    `;
    list.appendChild(child);

    const editButton = document.querySelector(`.edit${maxID}`);
    editButton.addEventListener("click", (event) => {
      editTask(event, `${maxID}`);
    });

    const compButt = document.querySelector(`.comp${maxID}`);
    compButt.addEventListener("click", (event) => {
      toggleCompleted(event, `${maxID}`);
    });

    const suppButton = document.querySelector(`.supp${maxID}`);
    suppButton.addEventListener("click", (event) => {
      supprimer(event, `${maxID}`);
    });
  }
}

await fetchSoul();
