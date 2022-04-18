"use strict";


// Context: 
// Detii un magazin care vinde dulciuri si pentru
// ca e stare de urgenta si nu mai intra nimeni
// in magazin risti sa dai faliment, asa ca te-ai
// hotarat sa iti construiesti o platforma 
// online ca sa-ti vinzi produsele.

// 1. Defineste o clasa pe nume Sweet care sa contina urmatoarele proprietati:
// - nume
// - descriere
// - culoare
// - pret/gr
// - cantitate (gr)
// - informatii nutritionale (calorii /100g)
// - tip (jeleu, ciocolata, inghetata etc.)

// 2. Sa se incarce un numar de produse de tip Sweet
//  dintr-un fisier de tip json si sa se afiseze
//   obiectele incarcate in formatul "<nume> - <descriere>".


// 3. Sa se afiseze produsele de un anumit tip dat 
// in acelasi format de mai sus.


// 4. Sa se afiseze cantitatea totala pentru fiecare 
// tip de produs.

// 5. Sa se calculeze stocul (valoarea) fiecarui 
// tip de produs din magazin, cat si valoarea totala 
// a produselor.


class Sweet {
    constructor(product){
        this.productName = product.productName;
        this.description = product.description;
        this.color = product.color;
        this.pricePerGrams = product.pricePerGrams;
        this.amountInGrams = product.amountInGrams;
        this.kcalPerGram = product.kcalPerGram;
        this.type = product.type;
  }

    computeBasicDetails = () => 
        `${this.productName} - ${this.description}`;
  
    computeBasicDetailsByType = () =>
        `${this.productName} - ${this.description}`;
   
    computeTotalAmount = () => 
        `${this.productName} - ${this.amountInGrams} grame`;
    
    computeEachProductStock =() =>
        `${this.productName} - ${Math.floor(this.amountInGrams * this.pricePerGrams)} lei`
}

loadJSON().catch( error => { console.log(error) })

async function loadJSON(){
    const response = await fetch("./sweets.json")
    const jsonData = await response.json()

    const productsContainer = []
    const basicDetails = []
    const basicDetailsByType =[]
    const amountInGrams = []
    const stock = []

    const type = "Napolitana";
    let totalAmount = 0 
    

    for(const x in jsonData){
      productsContainer.push(new Sweet(jsonData[x]));
    }

    for(const x in productsContainer){
        basicDetails.push(productsContainer[x].computeBasicDetails());
    }

    for (const x in productsContainer){
        amountInGrams.push(productsContainer[x].computeTotalAmount());
    }

    for (const x in productsContainer){
        stock.push(productsContainer[x].computeEachProductStock());
    }

    for (const x in productsContainer){
        totalAmount += Number(productsContainer[x].computeEachProductStock().split(" ")[2])
    }

    for (const x in productsContainer){
        let products = productsContainer[x]
        if(products.type ===  type){
            basicDetailsByType.push(products.computeBasicDetailsByType())
        }
    }

    stock.push(`Suma totala: ${totalAmount} lei`)

    console.log(basicDetails);
    console.log(basicDetailsByType);
    console.log(amountInGrams);
    console.log(stock);
}

/*

// 1. Se da un string care contine cuvinte separate prin ", ". Sa se afiseze cuvintele palindrom (identice in oglinda) in acelasi format.
// ex: "mar, bob, rotor, aiurea" afiseaza "bob, rotor"


person.calcAverage();
const words =
  "mar, rezistent, Bob, hematoterapie, rotor, Aiurea, unu, cojoc, reper, coprocultură, compliment, necuprins, hialoplasmă, english, word, racecar, 1000, 1881, minim";

function findPalindrome(string) {
  return string
    .toLowerCase()
    .split(", ")
    .filter((y) => y === y.split("").reverse().join(""))
    .join(", ");
}

const palindromes = findPalindrome(words);
console.log(palindromes);

// 2. Se da un array* de numere naturale. Sa se insereze intre oricare 2 numere media lor.

const numbers = [
  -1, 15, 2, 4, 10, 5, 31, 4, 20, 38, 66, 131, 34, 455, 10243, 11, 12,
];

function computeAverage(numbers) {
  return numbers
    .map((x, i) =>
      (i === numbers.length - 1) ? x : [x, (x + numbers[i + 1]) / 2]
    )
    .flat();
}
const numbersAndAvg = computeAverage(numbers);
console.log(numbersAndAvg);


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

const result3 = pythagoreanTriplet(1000);
console.log(result3);

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
// Numarul total de vocal din string
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
