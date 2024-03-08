const num1 = parseFloat(prompt("Zadej první číslo:"));
const num2 = parseFloat(prompt("Zadej druhé číslo::"));
const num3 = parseFloat(prompt("Zadej třetí číslo::"));

function max3(num1, num2, num3) {
  if (num1 > num2) {
      if (num1 > num3) {
          return num1;
      } else {
          return num3;
      }
  } else {
      if (num2 > num3) {
          return num2;
      } else {
          return num3;
      }
  }
}

let maximum = max3(num1, num2, num3);

console.log("Největší číslo je : " + maximum);
