const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
// 1

function getSubjects(student) {
  const subjects = Object.keys(student.subjects);
  const formattedSubjects = subjects.map((subject) => {
    // Перетворюємо першу літеру предмету на велику, а решту на малі
    return subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase();
  });
  return formattedSubjects;
}
const studentSubjects = getSubjects(students[0]);
console.log(studentSubjects);

// 2

function getAverageMark(student) {
  const subjects = Object.values(student.subjects);
  const allMarks = [].concat(...subjects);
  const averageMark =
    allMarks.reduce((sum, mark) => sum + mark, 0) / allMarks.length;
  return averageMark.toFixed(2);
}
const averageMark = getAverageMark(students[0]);
console.log(averageMark);

// 3

function getStudentInfo(student) {
  const { name, course } = student;
  const averageMark = getAverageMark(student);

  return {
    name,
    course,
    averageMark: Number(averageMark),
  };
}
const studentInfo = getStudentInfo(students[0]);
console.log(studentInfo);

// 4

function getStudentsNames(students) {
  const names = students.map((student) => student.name);
  const sortedNames = names.sort();
  return sortedNames;
}
const studentNames = getStudentsNames(students);
console.log(studentNames);

// 5

function getBestStudent(students) {
  let bestAverage = 0;
  let bestStudent = "";

  for (const student of students) {
    const averageMark = getAverageMark(student);
    if (averageMark > bestAverage) {
      bestAverage = averageMark;
      bestStudent = student.name;
    }
  }

  return bestStudent;
}
const bestStudent = getBestStudent(students);
console.log(bestStudent);

// 6

function calculateWordLetters(word) {
  return [...word].reduce((letters, letter) => {
    letters[letter] = (letters[letter] || 0) + 1;
    return letters;
  }, {});
}
let result = calculateWordLetters("тест");
console.log(result);
