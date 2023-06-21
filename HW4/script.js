const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
let arrSize = 2;
let coupleStudents = [];
for (let i = 0; i < Math.ceil(students.length / arrSize); i++) {
  coupleStudents[i] = students.slice(i * arrSize, i * arrSize + arrSize);
}
console.log(coupleStudents);

// Поділ студентів на хлопців і дівчат
function getPairs(students) {
  const maleStudents = [];
  const femaleStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith("а")) {
      femaleStudents.push(students[i]);
    } else {
      maleStudents.push(students[i]);
    }
  }
  const pairs = [];

  //Пари хлопець + дівчина
  while (maleStudents.length > 0 && femaleStudents.length > 0) {
    const maleStudent = maleStudents.pop();
    const femaleStudent = femaleStudents.pop();
    pairs.push([maleStudent, femaleStudent]);
  }
  return pairs;
}
const pairs = getPairs(students);
console.log(pairs);

//Пари студентів і їх теми
function assignThemes(pairs, themes) {
  const assignedThemes = [];
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const themeIndex = i % themes.length; // Використовуємо залишок від ділення, щоб зациклити теми, якщо їх менше, ніж пари
    const theme = themes[themeIndex];
    const pairWithTheme = pair.join(" і ") + ", " + theme;
    assignedThemes.push(pairWithTheme);
  }
  return assignedThemes;
}
const pairedThemes = assignThemes(pairs, themes);
console.log(pairedThemes);

//Оцінки студентів
function mapMarksToStudents(students, marks) {
  // Перевірка, чи кількість студентів та оцінок співпадає
  if (students.length !== marks.length) {
    console.log(
      "Помилка: кількість студентів не співпадає з кількістю оцінок."
    );
    return;
  }
  const studentMarks = students.map((student, index) => [
    student,
    marks[index],
  ]);
  return studentMarks;
}
const studentMarks = mapMarksToStudents(students, marks);
console.log(studentMarks);

// Оцінки парам
function getRandomMark() {
  return Math.floor(Math.random() * 5) + 1;
}
function addRandomMarksToPairs(pairs) {
  const pairsWithMarks = pairs.map((pair) => {
    const randomMark = getRandomMark();
    return [...pair, randomMark];
  });
  return pairsWithMarks;
}
const pairsWithRandomMarks = addRandomMarksToPairs(pairs);
console.log(pairsWithRandomMarks);
