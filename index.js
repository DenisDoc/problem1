"use strict";

function pythagoreanTriplet(sum) {
  for (let x = 1; x < sum; x++) {
    for (let y = x + 1; y < sum; y++) {
      let z = sum - x - y;
      if (x ** 2 + y ** 2 == z ** 2) {
        return `${x}, ${y}, ${z}`;
      }
    }
  }
}

const result = pythagoreanTriplet(1000);
console.log(result);

// let x, y, z, a, sum;
// function pitTriplet(sum) {
//   let m = 2;
//   let k = 1;
//   for (let n = 1; n < sum / 3; n++) {
//      let a = k * (m ** 2 - n ** 2);
//      let b = k * (2 * m * p);
//      let c = k * (m ** 2 + n ** 2);
//
//     m++;
//     k++;
//   }
// }

/*
// Afiseaza toate numerele pitagorice ale caror suma este 1000. (3 numere a, b, c se numesc pitagorice daca a^2 + b^2 = c^2)
let x, y, z, sum;
const numbers = [];
const sortRandom = [];
function random(min, max) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
}

while (numbers.length < 1) {
  x = random(200, 425);
  y = random(200, 425);
  z = random(200, 425);
  sum = 1000;
  if (x !== y && x !== z && y !== z) {
    sortRandom.push([x, y, z].sort((a, b) => a - b));
    if (
      sortRandom[0][0] ** 2 + sortRandom[0][1] ** 2 == sortRandom[0][2] ** 2 &&
      sortRandom[0][0] + sortRandom[0][1] + sortRandom[0][2] == sum
    ) {
      numbers.push([sortRandom[0][0], sortRandom[0][1], sortRandom[0][2]]);
    }
  }
  sortRandom.pop();
}
console.log(
  `Numerele pitagorice ale caror suma este egala cu 1000 sunt: ${numbers.toString()} `
);





const person = {
  firstName: "Mihai",
  lastName: "Stan",
  dateOfBirth: "04-06-1990",
  occupation: "engineer",
  nationality: "romanian",
  hobbies: ["cars", "planes", "music", "arts"],
  lotoNum: [2, 19, 33, 47, 26, 8],
};


// -------------------1-------------------

function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
function calcAge(dOBirth) {
  let dOB = new Date(dOBirth).getFullYear();
  const currentYear = new Date().getFullYear();
  const leapYearsCount = [];

  while (dOB < currentYear) {
    if (leapYear(dOB) == true) {
      leapYearsCount.push(dOB);
    }
    dOB++;
  }
  const dateOfBirth = new Date(dOBirth).getTime();
  const leapInMs = leapYearsCount.length * (24 * 60 * 60 * 1000);
  const age = Math.floor(
    (new Date() - dateOfBirth - leapInMs) / (365 * 24 * 60 * 60 * 1000)
  );
  return age;
}
console.log(
  `${person.firstName} ${person.lastName} is a ${calcAge(
    person.dateOfBirth
  )} years old ${person.occupation}.`
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
