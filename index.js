"use strict";
// Afiseaza toate numerele pitagorice ale caror suma este 1000. (3 numere a, b, c se numesc pitagorice daca a^2 + b^2 = c^2)
let x, y;

const numbers = [];

function random(min, max) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
}

while (x ** 2 + y ** 2 !== 1000 || numbers.length < 50) {
  x = random(0, 30);
  y = random(0, 30);
  if (Math.pow(x, 2) + Math.pow(y, 2) == 1000) {
    numbers.push(x);
  }
}
console.log(numbers);

const result = numbers.sort().filter(function (value, index, array) {
  return !index || value != array[index - 1];
});
console.log(result);

/*
const person = {
  firstName: "Mihai",
  lastName: "Stan",
  dateOfBirth: "07-09-1990",
  occupation: "engineer",
  nationality: "romanian",
  hobbies: ["cars", "planes", "music", "arts"],
  lotoNum: [2, 19, 33, 47, 26, 8],
};

// -------------------1-------------------

//verifica daca luna februarie are 28 sau 29 de zile
function checkLeap(year) {
  const leap = new Date(year, 1, 28);
  leap.setDate(leap.getDate() + 1);
  return leap.getMonth() == 1;
}

function calcAge(date) {
  const dateOfBirth = new Date(date);
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  let years = currentYear - dateOfBirth.getFullYear();

  dateOfBirth.setFullYear(dateOfBirth.getFullYear() + years);

  if (dateOfBirth > currentTime) {
    years--;
    dateOfBirth.setFullYear(dateOfBirth.getFullYear() - 1);
  }
  const days = (currentTime.getTime() - dateOfBirth.getTime()) / 864e5;
  return parseInt(years + days / (checkLeap(currentYear) ? 366 : 365));
}
console.log(
  `${person.firstName} ${person.lastName} is a ${calcAge(
    person.dateOfBirth
  )} years old ${person.occupation}`
);

//------------------- 2 ------------------

let country;
switch (person.nationality) {
  case "romanian":
    country = "Romania";
    break;

  case "german":
    country = "Germany";
    break;

  case "italian":
    country = "Italy";
    break;

  case "british":
    country = "United Kingdom";
    break;

  case "french":
    country = "France";
    break;

  case "spanish":
    country = "Spain";
    break;
}

console.log(`${person.firstName} ${person.lastName} is from ${country}.`);

//---------------------3-------------------

console.log(
  `${person.firstName} ${person.lastName} has the following ${
    person.hobbies.length > 1 ? "hobbies" : "hobby"
  }: ${person.hobbies !== "" ? person.hobbies.join(", ") : ""}.`
);

//--------------------4---------------------

console.log(
  `Loto numbers: ${person.lotoNum.sort((a, b) => a - b).join(", ")}.`
);

//-------------------5----------------------

console.log(
  `Media aritmetica = ${
    person.lotoNum.reduce((a, b) => a + b) / person.lotoNum.length
  }`
);

//-------------------6-----------------------

const odd = person.lotoNum.filter((x) => x % 2 !== 0).reduce((a, b) => a + b);
const even = person.lotoNum.filter((x) => x % 2 === 0).reduce((a, b) => a + b);
const diferenta = even - odd;
console.log(diferenta);

//------------------7------------------------

const vowels = ["a", "e", "i", "o", "u"];
// Numarul total de vocal din array
const totalAmountOfVowels = person.hobbies
  .join("")
  .split("")
  .filter((x) => vowels.includes(x)).length;
console.log(totalAmountOfVowels);

//Numarul de vocale din fiecare hobby
const numOfVow = person.hobbies.map(
  (x) => `${x}: ${x.split("").filter((x) => vowels.includes(x)).length}`
);

console.log(numOfVow);
 */
