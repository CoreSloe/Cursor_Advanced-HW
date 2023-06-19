//Перша функція

function getMaxDigit(number) {
  let numberStr = number.toString();
  let maxDigit = 0;

  for (let i = 0; i < numberStr.length; i++) {
    let digit = parseInt(numberStr[i]);

    if (digit > maxDigit) {
      maxDigit = digit;
    }
  }
  return maxDigit;
}
// console.log(getMaxDigit(123456));
// console.log(getMaxDigit(9876543218));

// П'ята функція

function getRandomNumber(N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N;
}

let randomNumber = getRandomNumber(1, 10);
//console.log(randomNumber);

// Шоста функція

function countLetter(letter, word) {
  let count = 0;
  let lowercaseLetter = letter.toLowerCase();
  let lowercaseWord = word.toLowerCase();

  for (let i = 0; i < lowercaseWord.length; i++) {
    if (lowercaseWord[i] === lowercaseLetter) {
      count++;
    }
  }
  return count;
}
let letterCount = countLetter("н", "Нісенітниця");
//console.log(letterCount);

//Сьома і восьма функції

function convertCurrency(input) {
  if (input.includes("$")) {
    let amount = parseFloat(input.replace("$", ""));
    let converted = amount * 37;
    return converted + " грн.";
  } else if (input.includes("UAH")) {
    let amount = parseFloat(input.replace("UAH", ""));
    let converted = amount / 37;
    return converted + "$";
  } else {
    return "Невідомий формат вхідного рядка.";
  }
}
// console.log(convertCurrency("200$"));
// console.log(convertCurrency("7400UAH"));

// Десята функція

function deleteLetters(letter, sentence) {
  return sentence.split(letter).join("");
}

//console.log(deleteLetters("е", "Паралелепіпед"));

// Третя функція

function formatName(name) {
  if (name.length === 0) {
    return "";
  }
  name = name.toLowerCase();
  let firstLetter = name.charAt(0).toUpperCase();

  return firstLetter + name.slice(1);
}

const name1 = "олег";
//console.log(formatName(name1));
const name2 = "оЛЕГ";
//console.log(formatName(name2));

//***//

console.log(`
1. Отримує будь-яке число та виводить найбільшу цифру в цьому числі: ${
  (getMaxDigit(123456), getMaxDigit(9876543218))
}
5. Функція, яка повертає випадкове ціле число в діапазоні від N до M: ${randomNumber}
6. Функція, яка рахує скільки разів певна буква повторюється в слові: ${letterCount}
7,8. Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку: ${convertCurrency(
  "300$"
)}
10. Функція, яка видаляє всі букви з речення: ${deleteLetters(
  "е",
  "Паралелепіпед"
)}
3. Функція, яка форматує ім'я, роблячи першу букву великою: ${formatName(
  name1
)}`);
