// Функція 1
function getRandomArray(length, min, max) {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomNum);
  }
  return randomArray;
}
let result = getRandomArray(15, 1, 100);
console.log(result);

// Функція 2
function getModa(...numbers) {
  const occurrences = [];

  for (const number of numbers) {
    if (Number.isInteger(number)) {
      if (occurrences[number]) {
        occurrences[number]++;
      } else {
        occurrences[number] = 1;
      }
    }
  }
  let maxCount = 0;
  let mode = null;
  for (let i = 0; i < occurrences.length; i++) {
    if (occurrences[i] && occurrences[i] > maxCount) {
      maxCount = occurrences[i];
      mode = i;
    }
  }
  return mode;
}
const result2 = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(result2);

// Функція 3
function getAverage(...numbers) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      sum += numbers[i];
      count++;
    }
  }
  return count > 0 ? sum / count : 0;
}

const average = getAverage(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
console.log(average);

//Функція 4
function getMedian(...numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const length = sortedNumbers.length;

  if (length % 2 === 0) {
    const midIndex = length / 2;
    return (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return sortedNumbers[midIndex];
  }
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); // Виведе: 23
console.log(getMedian(1, 2, 3, 4));
console.log(getMedian(1, 2, 3, 4, 5));

// Функція 5
function filterEvenNumbers(...numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

const result3 = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(result3);

// Функція 6
function countPositiveNumbers(...numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }
  return count;
}

const result4 = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(result4);

// Функція 7
function getDividedByFive(...numbers) {
  return numbers.filter((number) => number % 5 === 0);
}

const result5 = getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
console.log(result5);
