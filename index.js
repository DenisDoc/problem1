"use strict";

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
// let dOB = new Date(person.dateOfBirth).getFullYear();
// const currentYear = new Date().getFullYear();
// const leapYearsCount = [];

//check if leap
// function leapYear(year) {
//   return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// }

// while (dOB < currentYear) {
//   if (leapYear(dOB) == true) {
//     leapYearsCount.push(dOB);
//   }
//   dOB++;
// }

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
// Numarul de vocal din array
const totalAmountOfVowels = person.hobbies
  .join("")
  .split("")
  .filter((x) => vowels.includes(x)).length;
console.log(totalAmountOfVowels);

//Numarul de vocale din fiecare hobby
const hobbyVowels = {};

// for (const x of person.hobbies) {
//   hobbyVowels[x] = x.split("").filter((x) => vowels.includes(x)).length;
// }

//refactored
person.hobbies.map(
  (x) => (hobbyVowels[x] = x.split("").filter((x) => vowels.includes(x)).length)
);

console.log(hobbyVowels);
