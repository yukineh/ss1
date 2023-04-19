// Модель
let users = [];

// Представление
function renderUsers() {
  const userList = document.getElementById("users-list");
  userList.innerHTML = "";
  for (let user of users) {
    const userElement = document.createElement("li");
    userElement.innerText = `${user.name} (${user.email}), ${user.age} лет`;
    userList.appendChild(userElement);
  }
}

// Контроллер
function sendData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  // Валидация данных
  if (name.trim() === "" || email.trim() === "" || age.trim() === "") {
    alert("Пожалуйста, заполните все поля!");
    return;
  }
  if (isNaN(age) || parseInt(age) < 0) {
    alert("Пожалуйста, введите корректный возраст!");
    return;
  }

  // Обновление модели и представления
  users.push({ name: name, email: email, age: parseInt(age) });
  renderUsers();

  // Очистка формы
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}
