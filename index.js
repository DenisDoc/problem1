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

const age = Math.floor(
  (new Date().getTime() - new Date(person.dateOfBirth).getTime()) /
    (1000 * 365 * 60 * 60 * 24)
);
console.log(age);

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
  .filter((x) => vowels.indexOf(x) > -1).length;
console.log(totalAmountOfVowels);

//Numarul de vocale din fiecare hobby
const hobbyVowels = {};
for (const x of person.hobbies) {
  hobbyVowels[x] = x.split("").filter((x) => vowels.indexOf(x) > -1).length;
}
console.log(hobbyVowels);
