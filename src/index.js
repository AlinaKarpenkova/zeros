function getNumberOfTwo(number) {
  let numberOfTwo = 0

  while (number % 2 === 0) {
    numberOfTwo++;
    number = Math.trunc(number / 2);
  }

  return numberOfTwo;
}

function getNumberOfFive(number) {
  let numberOfFive = 0;

  while (number % 5 === 0) {
    numberOfFive++;
    number = Math.trunc(number / 5);
  }

  return numberOfFive;
}

module.exports = function zeros(expression) {
  let factorials = expression.split("*");

  let numberOfTwo = 0,
    numberOfFive = 0;

  for (let i = 0; i < factorials.length; i++) {
    if (factorials[i].includes("!!")) {
      let num = factorials[i].replace(/!/g, "");

      if (num % 2 === 0) {
        for (let j = 2; j <= num; j += 2) {
          numberOfTwo += getNumberOfTwo(j);
          numberOfFive += getNumberOfFive(j);
        }
      } else {
        for (let j = 1; j <= num; j += 2) {
          numberOfFive += getNumberOfFive(j);
        }
      }
    } else {
      let num = factorials[i].replace(/!/g, "");

      for (let j = 1; j <= num; j++) {
        numberOfTwo += getNumberOfTwo(j);
        numberOfFive += getNumberOfFive(j);
      }
    }
  }

  return (numberOfTwo < numberOfFive) ? numberOfTwo : numberOfFive;
};