const users = [
  {
    id: 1,
    marca: "BMW",
    modelo: 2010,
    color: "negro",
    año: 2020,
    precio: 150000000,
  },
  {
    id: 2,
    marca: "Mercedes-Benz",
    modelo: "2015",
    color: "rojo",
    año: "2020",
    precio: "250000000",
  },
  {
    id: 3,
    marca: "Audi",
    modelo: 2012,
    color: "azul",
    año: 2020,
    precio: 300000000,
  },
  {
    id: 4,
    marca: "Lexus",
    modelo: 2019,
    color: "gris",
    año: 2020,
    precio: 100000000,
  },
  {
    id: 5,
    marca: "Ford",
    modelo: 2020,
    color: "blanco",
    año: 2020,
    precio: 175000000,
  },
];

function printUsers() {
  const container = document.getElementById("container-users");

  let html = "";

  users.forEach((aux) => {
    html += `<tr>
              <td>${aux.id}</td>
              <td>${aux.marca}</td>
              <td>${aux.modelo}</td>
              <td>${aux.color}</td>
              <td>${aux.año}</td>
              <td>${aux.precio}</td>
              <td>
                  <button  onclick="modifyUser(${aux.id})" class="btn btn-warning">
                    Modificar
                  </button>
              </td>
              <td>
                  <button  onclick="deleterUser(${aux.id})" class="btn btn-danger">
                    eliminar
                  </button>
              </td>
            </tr>`;
  });

  container.innerHTML = html;
}

function deleterUser(id) {
  let indice = users.findIndex((aux) => aux.id == id);
  users.splice(indice, 1);
  printUsers();
}

function addUser() {
  let inputId = 0;
  let mayor = 0;

  if (users.length == 0) {
    inputId = users.length + 1;
  } else {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id > mayor) {
        mayor = users[i].id;
        inputId = mayor + 1;
      }
    }
  }

  const newCar = {
    id: inputId,
    marca: document.getElementById("marca").value,
    modelo: document.getElementById("modelo").value,
    color: document.getElementById("color").value,
    año: (inputAño = document.getElementById("año").value),
    precio: document.getElementById("precio").value,
  };

  users.push(newCar);
  printUsers();

  document.getElementById("Formulario").reset();
}

function modifyUser(id) {
  let newCar = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      newCar = {
        id: users[i].id,
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        color: document.getElementById("color").value,
        año: (inputAño = document.getElementById("año").value),
        precio: document.getElementById("precio").value,
      };
    }
  }
  deleterUser(id);

  users.push(newCar);
  printUsers();

  document.getElementById("Formulario").reset();
}
printUsers();
