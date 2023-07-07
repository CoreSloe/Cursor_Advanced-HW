class Student {
  constructor(fullName, university, course) {
    this.fullName = fullName;
    this.university = university;
    this.course = course;
    this._marks = [5, 4, 4, 5];
    this.isDismissed = false;
  }

  introduce() {
    console.log(
      `Привіт, мене звати ${this.fullName}! Я навчаюся в ${this.university} на ${this.course} курсі.`
    );
  }

  getInfo() {
    return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`;
  }

  get marks() {
    if (this.isDismissed) {
      return null;
    }
    return this._marks;
  }

  set marks(value) {
    if (!this.isDismissed) {
      this._marks.push(value);
    }
  }

  getAverageMark() {
    const sum = this._marks.reduce((acc, mark) => acc + mark, 0);
    const average = sum / this._marks.length;
    return average.toFixed(1);
  }

  dismiss() {
    this.isDismissed = true;
  }

  recover() {
    this.isDismissed = false;
  }
}

// Створення об'єкту студента
const student1 = new Student(
  "Остап Родоманський Бендер",
  "Вища Школа Психотерапії м. Одеса",
  1
);

// Виклик методу introduce()
student1.introduce();

// Виклик методу getInfo() та виведення результату
console.log(student1.getInfo());

// Виклик геттера marks та виведення результату
console.log(student1.marks);

// Встановлення оцінки за допомогою сеттера marks
student1.marks = 5;

// Виклик геттера marks після встановлення оцінки
console.log(student1.marks);

// Виклик методу getAverageMark() та виведення результату
console.log(student1.getAverageMark());

// Виклик методу dismiss() для "виключення" студента
student1.dismiss();

// Виведення статусу студента після "виключення"
console.log(student1.isDismissed);

// Виклик геттера marks після "виключення" студента
console.log(student1.marks);

// Виклик методу recover() для поновлення студента
student1.recover();

// Виведення статусу студента після поновлення
console.log(student1.isDismissed, "Студента поновлено");

//* Advanced */

class BudgetStudent extends Student {
  constructor(fullName, university, course) {
    super(fullName, university, course);
    this.getScholarship(); // Виклик методу отримання стипендії під час створення об'єкту

    // Виклик методу отримання стипендії кожні 30 секунд
    setInterval(() => {
      this.getScholarship();
    }, 30000);
  }

  getInfo() {
    return `Бюджетний ${super.getInfo()}`;
  }

  getScholarship() {
    if (this.getAverageMark() >= 4.0 && !this.isDismissed) {
      console.log(`Ви отримали 1400 грн. стипендії`);
    } else {
      console.log(`Ви не отримуєте стипендію`);
    }
  }
}

// Створення об'єкту бюджетного студента
const budgetStudent1 = new BudgetStudent(
  "Остап Родоманський Бендер",
  "Вища Школа Психотерапії м. Одеса",
  1
);

// Виклик методу introduce()
budgetStudent1.introduce();

// Виклик методу getInfo() та виведення результату
console.log(budgetStudent1.getInfo());

// Встановлення оцінок за допомогою сеттера marks
budgetStudent1.marks = 5;
budgetStudent1.marks = 4;
budgetStudent1.marks = 4;
budgetStudent1.marks = 5;

// Виклик методу getAverageMark() та виведення результату
console.log(budgetStudent1.getAverageMark());

// Виклик методу getScholarship() для отримання стипендії
budgetStudent1.getScholarship();
