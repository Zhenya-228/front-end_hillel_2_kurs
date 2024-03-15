// document.addEventListener("DOMContentLoaded", function () {
//   console.log("it work!");
// });
let name = "";
let is_wrong = true;
do {
  // check name
  name = prompt("Напишіть своє ім'я: ").trim();
  is_wrong = name === null || name === "";
  if (is_wrong) {
    alert("Ви написали своє ім'я неправильно");
  }
} while (is_wrong);
name = name.charAt(0).toUpperCase() + name.slice(1);
alert(`Приємно познайомитись ${name} !`);

let year = "";
do {
  // check age
  year = prompt("Напишіть свій вік: ").trim();
  is_wrong = isNaN(parseInt(year));
  if (is_wrong) {
    alert("Ви написали свій вік неправильно");
  }
} while (is_wrong);

const smok = confirm("Ви курите?");

if (year < 18 && smok === false) {
  alert(`"Молодець ${name}! Гарний приклад для своїх однолітків"`);
} else if (year < 18 && smok === true) {
  alert(`Це дуже шкідливо!!! ${name}, а твої батьки знають про це?`);
} else if (year > 17 && smok === false) {
  alert(`Супер ${name}! Мабуть ще й спортом займаєшся!`);
} else alert(`Що ж ${name}, це твій вібір. Але я не радив би курити`);
