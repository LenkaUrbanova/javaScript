const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];


//Vypište do stránky všechna čísla.
console.log(numbers)

//Vypište do stránky druhé mocniny všech čísel
const squares = numbers.map(number => number ** 2);
console.log(squares);

//Vypište do stránky pouze záporná čísla.
const negativeNumbers = numbers.filter(number => number < 0);
console.log(negativeNumbers);

//Vypište do stránky absolutní hodnotu všech čísel
const absoluteValues = numbers.map(number => Math.abs(number));
console.log(absoluteValues);

//Vypište do stránky pouze sudá čísla
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

//Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi
const numbersDivisibleByThree = numbers.filter(number => Math.abs(number) % 3 === 0);
console.log(numbersDivisibleByThree);

//Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5
const distancesFromFive = numbers.map(number => Math.abs(number - 5));
console.log(distancesFromFive);

//Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5
const squaredDistancesFromFive = numbers.map(number => Math.pow(number - 5, 2));
console.log(squaredDistancesFromFive);

//Spočítejte, kolik je v seznamu záporných čísel
const negativeNumbersCount = numbers.filter(number => number < 0).length;
console.log("Number of negative numbers:", negativeNumbersCount);

//Spočítejte součet všech čísel v poli
const soucet = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers:", soucet);

//Spočítejte průměr všech čísel v poli
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbers.length;

console.log("Average of all numbers:", average);


// Spočítejte součet všech kladných čísel v poli
const sumOfPositives = numbers.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
        return accumulator + currentValue;
    } else {
        return accumulator;
    }
}, 0);

console.log("Sum of all positive numbers:", sumOfPositives);


